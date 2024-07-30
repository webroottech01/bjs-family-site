import { useState, useEffect, useMemo } from "react";
import useSWR from "swr";

import Listing from "components/careers/listing/item/Listing";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

import parseDate from "date-fns/parse";
import {
  SortType,
  useDepartmentQuery,
  useSearchQuery,
  useSortQueryValue,
} from "components/careers/search-bar/store";
import { STEP, usePagination } from "components/careers/store/pagination";
import useFetchCareersListingsCount from "./useFetchCareersListingsCount";
import { useListingState } from "../../store";

const PRIMARY_KEY_NAME = `job_title`;
const ENDPOINT = process.env.NEXT_PUBLIC_CMS_ENDPOINT + "/careers";

const query = `{
  careers {
    title: job_title
    location {
      location_name
    }
    contractType: employment_type
    company {
      name
    }
    department {
      Name
    }
    closing: deadline
    introduction {
      title
      body
    }
    furtherIntroduction:further_introduction {
      title
      body
    }
    skills {
      title
      body
    }
    responsibilities {
      title
      body
    }
  }
}`;

const mapItem = (input: any): Listing | undefined => {
  if (!input.location || !input.department || !input.company) {
    return undefined;
  }
  const closing = parseDate(input.deadline, "yyyy-MM-dd", new Date());
  const subsidiary = parseCompany(input.company.name);
  const result = {
    title: input.job_title,
    location: input.location.location_name,
    contractType: input.employment_type,
    jobType: parseJobType(input.job_type),
    subsidiary,
    department: input.department.Name,
    closing,
    introduction: input.introduction,
    furtherIntroduction: input.further_introduction,
    skills: input.skills,
    responsibilities: input.responsibilities,
    banner: input.banner.banner_images.map((image: any) => image.url),
    salary: parseSalary(input),
  };
  return result;
};

const parseJobType = (rawType: string): string => {
  rawType = rawType.toLowerCase();
  if (rawType === "fulltime") {
    return "Full time";
  } else if (rawType === "parttime") {
    return "Part time";
  }
  return rawType;
};

const parseSalary = (input: any): string => {
  if (!input.salary || input.salary.length === 0) {
    return `Competitive salary`;
  }
  const salary = input.salary[0];
  const type = salary.__component;
  if (type === "salary.salary-unspecified") {
    //Raw
    return salary.value;
  } else if (type === "salary.salary-range") {
    const lower = salary.lower_value;
    const upper = salary.upper_value;
    const type = salary.type;
    return `£${lower} - £${upper} ${type}`;
  } else if (type === "salary.salary") {
    const { value, type } = salary;
    return `£${value} ${type}`;
  }
  return `Competitive salary`;
};

const parseCompany = (companyName: string): Subsidiary => {
  switch (companyName.toLowerCase()) {
    case "bjs home delivery":
      return "home delivery";
    case "constructit":
      return "constructit";
    case "bjs haulage":
      return "haulage";

    default:
      throw new Error(`Cannot find subsidiary for ${companyName}`);
  }
};

export const isExpired = (listing: Listing) => {
  if (!listing.closing) {
    return true; //No expiry date, say it's expired as count cannot see this...
  }
  if (isNaN(listing.closing.getTime())) {
    return true;
  }
  const today = new Date();
  const expired = today >= listing.closing;
  return expired;
};

const fetcher = async (
  key: string,
  query: string,
  sortBy: SortType,
  pagination: number,
  total: number,
  department?: string
): Promise<Listing[]> => {
  const url = formUrl(query, sortBy, pagination, total, department);
  const response = await fetch(url);
  const json = await response.json();

  const result = await json
    .map((item: any) => mapItem(item))
    .filter(Boolean)
    .filter((item: Listing) => {
      const nonExpired = !isExpired(item);
      return nonExpired;
    });
  return result;
};

const formUrl = (
  query: string,
  sortBy: SortType,
  pagination: number,
  total: number,
  department?: string
): string => {
  const sortBySegment = formSortBy(sortBy);
  const endpoint = `${ENDPOINT}?${sortBySegment}&_limit=${STEP}&_start=${pagination}`;
  if (department === "all departments") {
    department = undefined;
  }

  if (department) {
    department = department?.replaceAll("&", "and");
    //Department takes priority
    return `${endpoint}&department.Name_contains=${department}`;
  }
  if (query.length === 0) {
    return endpoint; //No formatting needed
  }
  return `${endpoint}&${PRIMARY_KEY_NAME}_contains=${query}`;
};

const formSortBy = (sortBy: SortType): string => {
  if (sortBy === "most recent") {
    return "_sort=created_at:ASC";
  } else if (sortBy === "ending soon") {
    return "_sort=created_at:DESC";
  }
  throw new Error(`Cannot find sort_by for ${sortBy}`);
};

function useFetchCareersListing() {
  const query = useSearchQuery();
  const department = useDepartmentQuery();
  const sortBy = useSortQueryValue();
  const pagination = usePagination();

  const [list, setList] = useListingState();

  const { data: total } = useFetchCareersListingsCount();

  const { data, error } = useSWR(
    ["careers", query, sortBy, pagination, total, department],
    fetcher
  );

  useEffect(() => {
    if (!data) {
      return;
    }

    setList((old) => {
      const clone = [...old];
      for (const item of data) {
        const notContained =
          clone.findIndex((i) => i.title === item.title) === -1;
        if (notContained) {
          clone.push(item);
        }
      }
      return clone;
    });
  }, [data]);

  if (error) {
    console.error(error);
  }

  return {
    data,
    isLoading: !error && !data,
    error,
  };
}

export default useFetchCareersListing;
