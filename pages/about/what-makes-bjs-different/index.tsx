import styled from "styled-components";
import Page, { FirstElement } from "components/about/page";
import { up, down } from "styled-breakpoints";
import ClientAffirmationList from "components/about/what-makes-bjs-different/ClientAffirmationList";
import OurTechnologyLink from "components/about/what-makes-bjs-different/our-technology-link";

import Head from "next/head";
import OurPartners from "/components/our-partners";
import ContinuousImprovement from 'components/about/charity-and-community/continuous-improvement';

function WhatMakesBjsDifferent() {
  return (
    <Container page="What makes BJS different">
      <Intro>
        <Text>
          We thought we would let our customers tell you what makes BJS
          different...
        </Text>
        <ClientAffirmationList />
      </Intro>
      <ContinuousImprovement />
      <OurPartners />
      <Head>
        <title>What makes us different?</title>
        <meta
          property="og:image:url"
          content={`${process.env.NEXT_PUBLIC_CONTENT_RESOURCE
            }/bjs-family/bjsMetaOptimised_AboutUs_OurValues.jpg`}
        />
        <meta
          name="description"
          content="We could tell you, but we'll let our customers tell you instead."
        />
      </Head>
    </Container>
  );
}

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  font-size: 16px;
`;

const Container = styled(Page)`
  ${FirstElement} {
    background: #f3eee8;
  }

  ${Intro} {
    ${Text} {
      ${up("md")} {
        margin-bottom: 100px;
      }
      ${down("sm")} {
        margin-bottom: 40px;
        text-align: center;
      }
    }
  }
`;

export default WhatMakesBjsDifferent;
