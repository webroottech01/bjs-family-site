import styled from "styled-components";
import Page from "components/about/page";
import Navigation from "components/about/page/navigation";
import { FirstElement, Title } from "components/about/page";
import SmilingWhateverTheWeather from "../../../components/about/timeline/word-ladder";

import AboveAndBeyond from "/components/landing/above-and-beyond";
import PracticeAndDedicated from "components/about/training-academy/practice-and-dedication";
import ImageShowcase from "components/about/training-academy/ImageShowcase";
import { down } from "styled-breakpoints";
import TrainingAcademyMan from "components/about/training-academy/TrainingAcademyMan";

import GivingBack from "components/about/our-technology/GivingBack";

import Head from "next/head";
import OurPartners from "/components/our-partners";
function TrainingAcademy() {
  return (
    <Container page="Training academy">
      <First>
        <PracticeAndDedicated />
      </First>
      <ImageShowcase />

      <GivingBack />
      <OurPartners />
      <Head>
        <title>Our training academy</title>
        <meta
          property="og:image:url"
          content={`${process.env.NEXT_PUBLIC_CONTENT_RESOURCE}/bjs-family/bjsMetaOptimised_AboutUs_TrainingAcademy.jpg`}
        />
        <meta
          name="description"
          content="Making it look so easy takes a lot of hard work from our dedicated teams."
        />
      </Head>
    </Container>
  );
}

const First = styled.div`
  display: flex;
  justify-content: space-between;

  ${down("md")} {
  //  padding-bottom: 205px;
  }
`;
const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Page)`
  ${Title} {
    ${down("sm")} {
      font-size: 26px;
    }
  }
  ${FirstElement} {
    background: url("/images/about/training-academy/man-in-back.png"),
      linear-gradient( #E2E0DD 0%, #f5f0ea 100%);
    background-repeat: no-repeat;

    background-size: cover;
    background-position: right;

    @media only screen and (max-width: 1800px) {
      background-position: right 0px center;
    }

    @media only screen and (max-width: 1466px) {
      background-position: right -219px center;
    }

    @media only screen and (max-width: 1400px) {
      background-position: right -270px center;
    }

    @media only screen and (max-width: 1335px) {
      background-position: right -310px center;
    }

    @media only screen and (max-width: 1290px) {
      background-position: right -400px center;
    }

    @media only screen and (max-width: 1235px) {
      background-position: right -430px top 0px;
    }

    @media only screen and (max-width: 1043px) {
      background-position: right -430px top 0px;
    }

    @media only screen and (min-width: 2000px) {
      background-size: auto;
    }

    //  background-position: right -131px center;
    ${down("md")} {
      background-size: contain;
      background-position: bottom right;
      background-color: #e1e1e1;
    }
    ${down("sm")} {
      background-size: 800px;
      background-position: top 20px right -131px;
      background-color: #e1e1e1;
    }
  }
`;

export default TrainingAcademy;
