import Image from "next/image";
import styled from "styled-components";
import Text from "./Text";
import { Button, colours } from "@bjsdistribution/components";
import { up, down, only } from "styled-breakpoints";

import QuoteExplanation from "components/landing/belief-in-a-divine-flow/quote/QuoteExplanation";
import Quote from "./quote";

import { useNavigateTo } from "components/about/page/AboutPage";
import useWindowDimensions from "components/util/useWindowDimensions";

const imageUrl = "/images/landing/man-holding-tv.png";

function BeliefInADivineFlow() {
  const navigateTo = useNavigateTo();
  const { width } = useWindowDimensions();

  const isTabletOrSmaller = width <= 824; //824 or smaller...

  return (
    <Container>
      <Body>
        {isTabletOrSmaller && (
          <Image
            src={imageUrl}
            layout="responsive"
            height={70}
            width={"100%"}
          />
        )}
        <Title>Belief in a divine flow and the team</Title>
        <History>
          From the very inception of BJS, spiritual guidance was sought from
          Baba Jaswant Singh Ji – whom the company is named after. Before his
          death in 2020, Baba Jaswant Singh Ji was based in Punjab and had a
          trust that ran projects for the welfare of humanity; providing health
          care facilities, higher medical education and to show ‘the path of
          spiritual righteousness’, to ‘foster human values and welfare with
          esteemed devotion indeed’.
        </History>
        <Quote />
        <Button id="belief-in-a-devine-flow-go-to-our-story"
        onClick={() => navigateTo("our story")}
        >
          Our story
          </Button>
      </Body>
      {!isTabletOrSmaller && (
        <ImageContainer>
          <Image src={imageUrl} layout="fill" />
        </ImageContainer>
      )}
    </Container>
  );
}

const ImageContainer = styled.div`
  position: relative;
  height: 550px;
  width: 740px;
  @media only screen and (max-width: 1575px) {
    height: 350px;
  }

  @media only screen and (max-width: 1480px) {
    /* width: 505px;
    height: 360px;
    //position: absolute;
    right: 60px;*/
  }

  @media only screen and (max-width: 1380px) {
    position: absolute;
    right: 60px;
    width: 440px;
    height: 300px;
  }

  @media only screen and (max-width: 1130px) {
    width: 370px;
    height: 270px;
  }

  @media only screen and (max-width: 990px) {
    width: 360px;
    height: 250px;
    top: 70px;
  }

  @media only screen and (max-width: 920px) {
    width: 320px;
    height: 225px;
    top: 75px;
  }

  @media only screen and (max-width: 885px) {
    width: 280px;
    height: 190px;
  }
`;

const Container = styled.div`
  padding: 100px;
  background: white;
  display: flex;
  justify-content: space-between;

  > :not(:last-child) {
    margin-right: 60px;
  }

  position: relative;

  @media only screen and (max-width: 1600px) {
    padding: 60px 50px;
  }

  @media only screen and (max-width: 1400px) {
    padding: 60px;
  }
  @media only screen and (max-width: 1300px) {
    padding: 60px 30px;
  }

  ${down("md")} {
    > :not(:last-child) {
      margin-right: 0px; //Reset
    }
    flex-direction: column;
    padding: 40px;
  }

  ${down("sm")} {
    padding: 60px 20px;
  }
`;

const Title = styled.h2`
  font-family: "Eveleth";
  text-transform: uppercase;
  font-size: 32px;

  @media only screen and (max-width: 1490px) {
    font-size: 26px;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 1400px) {
    font-size: 30px;
    margin-top: 0px;
    max-width: 560px;
  }

  @media only screen and (min-width: 775px) and (max-width: 990px) {
    max-width: 50%;
  }
  ${only("md")} {
    font-size: 26px;
    max-width: initial;
    margin-top: 37px;
    max-width: unset;
  }

  ${down("sm")} {
    font-size: 20px;
  }
`;

const History = styled(Text)``;

const Body = styled.div`
  display: flex;
  flex-direction: column;

  ${up("lg")} {
    width: 60%;
  }

  @media only screen and (max-width: 1490px) {
    width: 100%;
  }

  @media only screen and (max-width: 1400px) {
    width: auto;
    ${History}, ${QuoteExplanation} {
      font-size: 14px;
      max-width: 100ch;
    }
  }

  ${History}, ${QuoteExplanation} {
    @media only screen and (max-width: 1280px) {
      max-width: 80ch;
    }
    @media only screen and (max-width: 1085px) {
      max-width: 65ch;
    }

    @media only screen and (max-width: 830px) {
      max-width: 50ch;
    }

  }

  ${History} {
    @media only screen and (max-width: 824px) {
      max-width: 100%;
    }
  }

  ${Title} {
    margin-bottom: 40px;
  }

  ${History} {
    margin-bottom: 10px;
  }

  ${Button.PlainButton} {
    font-family: "Eveleth";
    width: fit-content;
    padding: 17px 40px;
    max-height: 56px;
    :hover {
      color: ${colours.black} !important;
    }
  }

  ${down("md")} {
    width: 100%;
    ${Title} {
      margin-top: 32px;
      margin-bottom: 38px;
    }
  }

  ${only("sm")} {
    ${Quote} {
    }
  }

  ${down("sm")} {
    ${Title} {
      margin-top: 40px;
      margin-bottom: 25px;
    }

    ${Button.PlainButton} {
      width: 100%;
    }
  }

  ${down("xs")} {
    ${Title} {
      margin-top: 30px;
      margin-bottom: 20px;
    }
  }
`;

export default BeliefInADivineFlow;
