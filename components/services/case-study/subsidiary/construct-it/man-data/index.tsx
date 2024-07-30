import { Button, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import { up, down, only } from "styled-breakpoints";

import Page, {
  Header,
  ExplanativeQuote,
} from "components/services/case-study/blueprint";
import Image from "next/image";

import { motion } from "framer-motion";
import IntroductionPiece from "components/services/case-study/blueprint/IntroductionPiece";
import LargeQuote from "components/services/case-study/blueprint/LargeQuote";

function ManDataCaseStudy() {
  return (
    <Container
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <CaseStudyHeader>
        <IntroductionPiece>
          <LogoContainer>
            <Image
              src={"/images/services/case-study/mandata/logo.png"}
              layout="fill"
            />
          </LogoContainer>
          <ExplanativeQuote
            description="We have many years’ experience delivering furniture to homes and offices throughout the UK. However, our expansion into the food, retail, construction and manufacturing haulage sectors requires its own dedicated fleet and transport management control system and that’s where Mandata comes in."
            author="Operations Director, Amarat Gill"
          />
          <Explanatory>
            With over 50 relatively new artics already on the road, BJS expects
            to more than double its fleet size in the coming months and as a
            result, says Operations Director Amarat Gill, the business needed a
            comprehensive transport management system to keep pace with their
            ambitious growth plans.
          </Explanatory>
        </IntroductionPiece>
      </CaseStudyHeader>
      <BottomRow>
        <ImageContainer>
          <Image
            src={"/images/services/case-study/mandata/inside.jpg"}
            layout="fill"
          />
        </ImageContainer>
        <BottomBody>
          <LargeQuote
            text=" Real-time data feeds such as live drivers' hours, vehicle location
              and load progress with live ETAs on an arrivals board, will enable
              us to find and resolve problems early"
          />
          <ContinuedQuote>
            Our goal is to further connect the traffic office with customers and
            realising BJS Haulage’s objective to maintain complete transparency
            throughout the delivery process, text and email notifications will
            keep customers informed in real-time regarding each delivery.
          </ContinuedQuote>
          <a
            href="https://www.mandata.co.uk/customerstories/home-delivery-specialist-grows-haulage-operation-with-mandata-tms"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button colors="dark" id="construct-it-go-to-mandata-full-story">Full story</Button>
          </a>
        </BottomBody>
      </BottomRow>
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 80px;

    ${only("md")} {
      margin-bottom: 60px;
    }

    ${down("sm")} {
      margin-bottom: 40px;
    }
  }
`;

const ContinuedQuote = styled.div`
  font-size: 16px;
  position: relative;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > :not(:last-child) {
    margin-right: 100px;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 30px;
    }
  }
`;

const BottomBody = styled.div`
  display: flex;
  flex-direction: column;

  ${LargeQuote} {
    margin-bottom: 60px;
  }

  ${ContinuedQuote} {
    margin-bottom: 50px;
  }

  ${Button.PlainButton} {
    width: min-content;
    max-height: 56px;
  }
`;

const ImageContainer = styled.div`
  min-height: 400px;
  min-width: 700px;
  position: relative;

  ${down("md")} {
    max-width: 100%;
    min-width: 100%;
  }

  ${down("sm")} {
    min-height: 250px;
  }
`;

const LogoContainer = styled.div`
  min-width: 255px;
  min-height: 91px;
  max-width: 255px;
  max-height: 91px;

  position: relative;

  ${down("sm")} {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CaseStudyHeader = styled(Header)`
  ${down("sm")} {
    ${LogoContainer} {
      margin-bottom: 50px;
    }

    ${ExplanativeQuote} {
      margin-bottom: 40px;
    }
  }

  ${down("md")} {
    flex-direction: column;
  }
`;

const Explanatory = styled.div`
  flex-basis: 33%;
`;

export default ManDataCaseStudy;
