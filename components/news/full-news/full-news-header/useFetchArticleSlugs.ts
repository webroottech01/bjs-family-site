import { request } from "graphql-request";
import useSWR from "swr";

const fetcher = async (query: string): Promise<string[]> => {
  const response = await request(
    `${process.env.NEXT_PUBLIC_CMS_ENDPOINT}/graphql`,
    query
  );
  return response.articles.map((article: any) => article["slug"]);
};

function useFetchArticleSlugs() {
  const { data, error } = useSWR(
    `{
      articles {
          slug
      }
    }`,
    fetcher
  );
  return { data, error };
}

export default useFetchArticleSlugs;
