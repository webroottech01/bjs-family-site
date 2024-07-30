import styled from "styled-components";
import Page from "components/about/page";
import {up, down} from "styled-breakpoints";
import { FirstElement } from "components/about/page";
import SmilingWhateverTheWeather from "../timeline/word-ladder";

import Header from "./header";
import HarinderPiece from "./harinder-piece";
import AboveAndBeyond from "/components/landing/above-and-beyond";
import OurTechnologyLink from "../what-makes-bjs-different/our-technology-link";

function OurValues() {
  return (
    <Container
      page="our values"
    >
      <FirstSection>
        <Header />
        <HarinderPiece />
      </FirstSection>
      <OurTechnologyLink/>
    </Container>
  );
}

const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled(Page)`
  ${FirstElement} {
    background: url("/images/about/our-values/background.svg") !important;
    padding-bottom: 0;
  }

  ${Header} {
    padding: 100px 0px;

    ${down("sm")} {
      padding: 0px;
      margin-bottom: 60px;
    }
  }
  ${HarinderPiece} {
    margin: 0px -100px;
    z-index:100000;

    ${down("md")} {
      margin: 0px -40px;
    }

    ${down("sm")} {
      margin: 0px -20px;
    }
  }
`;

export default OurValues;
