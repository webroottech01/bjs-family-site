import OurValuesPage from "components/about/our-values";

import Head from "next/head";

function OurValues() {
  return (
    <>
      <OurValuesPage />
      <Head>
        <title>Our BJS Family values</title> 
        <meta
          property="og:image:url"
          content={`${
            process.env.NEXT_PUBLIC_CONTENT_RESOURCE
          }/bjs-family/bjsMetaOptimised_AboutUs_OurValues.jpg`}
        />
        <meta
          name="description"
          content="BJS is a corporate built on compassionate values, with an authentic desire to make a lasting and positive impact on the world."
        />
      </Head>
    </>
  );
}

export default OurValues;
