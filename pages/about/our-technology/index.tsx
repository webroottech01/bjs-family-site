import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import Page from "components/about/page";

import { FirstElement } from "components/about/page";
import Introduction from "components/about/our-technology/Introduction";
import TemporaryPiece from "components/about/our-technology/temporary-piece";

import Head from "next/head";
import OnBoardingBJS from "/components/about/our-technology/onboarding-withbjs";
import OurPartners from "/components/our-partners";
import AboveAndBeyond from "/components/landing/above-and-beyond";

function OurTechnology() {
  return (
    <>
      <Container
        page="Our technology"
      >
        <Introduction />
        <OnBoardingBJS />
        {/* <TemporaryPiece /> */}
        <AboveAndBeyond />
        <OurPartners />
      </Container>
      <Head>
        <title>Our Technology</title>
        <meta
          property="og:image:url"
          content={`${process.env.NEXT_PUBLIC_CONTENT_RESOURCE
            }/bjs-family/bjsMetaOptimised_AboutUs_OurTechnology.jpg`}
        />
        <meta
          name="description"
          content="BJS powers its logistics, distribution, and warehousing operations with cutting edge in-house software."
        />
      </Head>
    </>
  );
}

const Container = styled(Page)`
  ${FirstElement} {
    ${up("lg")} {
      padding-bottom: 60px;
    }
    ${down("md")} {
      padding: 80px 30px;
    }
  }

  ${TemporaryPiece} {
    margin-top: 100px;
  }
`;

export default OurTechnology;
