import styled from "styled-components";
import Page from "components/about/page";
import { FirstElement } from "components/about/page";
import TimelineSection from "./TimelineSection";
import OurPartners from "/components/our-partners";

import Head from "next/head";

function OurStory() {
  return (
    <>
      <Container page="our story">
        <TimelineSection />
        <OurPartners />
      </Container>
      <Head>
        <title>Our story</title>
        <meta
          property="og:image:url"
          content={`${
            process.env.NEXT_PUBLIC_CONTENT_RESOURCE
          }/bjs-family/bjsMetaOptimised_AboutUs_OurStory.jpg`}
        />
        <meta
          name="description"
          content="Whether we are loading orders onto vans to deliver to homes, routing trucks to distribution centres or moving bricks to building sites - we pay attention to the small details however large the load."
        />
      </Head>
    </>
  );
}

const Container = styled(Page)`
  ${FirstElement} {
    background-image: url("/images/about/our-story/background.jpg");
    background-repeat: repeat;
  }
`;

export default OurStory;
