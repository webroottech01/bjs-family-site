import Error from "next/error";
import FullNews from "/components/news/full-news";
import { InferGetServerSidePropsType } from "next";
import { getNewsBySlug } from "../api/handler/Api";
import { INewsItem } from "../api/handler/Types";

import Head from "next/head";
import OurPartners from "/components/our-partners";

export const getServerSideProps = async (context: {
  params: { slug: any };
}) => {
  const res = await getNewsBySlug(context.params.slug);
  const data: Array<INewsItem> = await res.json();
  return {
    props: {
      news: data,
    },
  };
};
const FullNewsPage = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const { news } = props;
  const newsArray: Array<INewsItem> = news;
  if (newsArray.length === 0) {
    return <Error statusCode={400} />;
  }
  return (
    <>
      <Head>
        <title>{newsArray[0].title}</title>
      </Head>
      <FullNews news={newsArray[0]} />
      <OurPartners />
    </>
  );
};

export default FullNewsPage;
