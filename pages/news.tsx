import NewsPage from "components/news";
import { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import { getNews } from "./api/handler/Api";
import { useSetNewsContent } from "./api/store/newsStore";

export const getServerSideProps = async () => {
  const data = await getNews();
  return {
    props: {
      data,
    },
  };
};
const News = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const setNews = useSetNewsContent();
  useEffect(() => {
    setNews(data);
  }, [data]);
  return <NewsPage />;
};

export default News;
