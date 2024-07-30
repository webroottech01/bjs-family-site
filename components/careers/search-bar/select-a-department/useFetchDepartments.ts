import { request } from "graphql-request";
import useSWR from "swr";

const fetcher = async (query: string): Promise<string[]> => {
  const response = await request(
    `${process.env.NEXT_PUBLIC_CMS_ENDPOINT}/graphql`,
    query
  );
  return response.departments.map((department: any) => department["Name"]);
};

function useFetchDepartments() {
  const { data, error } = useSWR(
    `{
      departments {
          Name
      }
    }`,
    fetcher
  );
  return { data, error };
}

export default useFetchDepartments;
