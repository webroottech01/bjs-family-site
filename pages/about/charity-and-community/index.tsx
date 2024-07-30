import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import Page, { FirstElement } from "components/about/page";

import UnderOneSky from "components/about/charity-and-community/under-one-sky";
import ImageCollage from "components/about/charity-and-community/ImageCollage";
import NhsKeyWorkers from "components/about/charity-and-community/nhs-key-workers";
import EducateOutPrejudice from "components/about/charity-and-community/educate-out-prejudice";
import ContinuousImprovement from "components/about/charity-and-community/continuous-improvement";

import Head from "next/head";
import OurPartners from "/components/our-partners";

function CharityAndCommunityPage() {
  return (
    <>
      <Container page="Charity and community">
        <Introduction>
          <UnderOneSky />
          <ImageCollage />
        </Introduction>
        <NhsKeyWorkers />
        <EducateOutPrejudice />
        <OurPartners />
      </Container>
      <Head>
        <title>Our charity and community work</title>
        <meta
          property="og:image:url"
          content={`${process.env.NEXT_PUBLIC_CONTENT_RESOURCE}/bjs-family/bjsMetaOptimised_AboutUs_CharityCommunity.jpg`}
        />
        <meta
          name="description"
          content="We're proud to uphold our BJS beliefs in the local community."
        />
      </Head>
    </>
  );
}

const Introduction = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media only screen and (min-width: 1920px) {
    justify-content: center;
    margin: 0 auto;
    max-width: 1600px;
  }

  ${down("md")} {
    flex-direction: column;
    padding: 50px 50px;
  }
  ${down("sm")} {
    padding: 10px 10px;
  }

  @media only screen and (max-width: 1580px) {
    // flex-direction: column;
    //  gap: 30px;
  }
`;

const Container = styled(Page)`
  ${Introduction} {
    padding-top: 100px;
    @media only screen and (min-width: 1920px) {
      padding-top: 80px 100px;
    }
    ${down("md")} {
      padding-top: 50px;
    }
  }
  ${FirstElement} {
    ${down("md")} {
      padding: 80px 0px;
    }

    ${down("sm")} {
      padding: 40px 0px;
    }
  }
`;

export default CharityAndCommunityPage;
