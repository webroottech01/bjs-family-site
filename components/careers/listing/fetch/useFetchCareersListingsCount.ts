import useSWR from "swr";
import {
  useDepartmentQuery,
  useSearchQuery,
} from "components/careers/search-bar/store";
import {format} from "date-fns";

const endpoint = process.env.NEXT_PUBLIC_CMS_ENDPOINT + "/careers/count";

const fetcher = async (
  key: string,
  query: string,
  department: string
): Promise<number> => {
  const result = await fetch(formUrl(query, department));
  const text = await result.text();
  return parseInt(text);
};

const formUrl = (query: string, department?: string) => {
  if (department === "all departments") {
    department = undefined;
  }
  const today = new Date();
  const dateString = format(today, "yyyy-MM-dd");
  const dateFilter = `deadline_gte=${dateString}`;
  if (department) {
    //Department takes priority
    department = department?.replaceAll("&", "and");
    return `${endpoint}?&${dateFilter}&department.Name_contains=${department}&${dateFilter}`;
  }
  return `${endpoint}?&${dateFilter}&job_title_contains=${query}`;
};

function useFetchCareersListingCount() {
  const query = useSearchQuery();
  const department = useDepartmentQuery();

  const { data, error } = useSWR(["careers_count", query, department], fetcher);

  if (error) {
    console.error(error);
  }

  return {
    data: data ?? -1,
    isLoading: !error && !data,
    error,
  };
}

export default useFetchCareersListingCount;
