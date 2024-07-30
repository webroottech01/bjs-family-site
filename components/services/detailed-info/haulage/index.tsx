import styled from "styled-components";
import { Button, Styleable } from "@bjsdistribution/components";
import { up, down, only } from "styled-breakpoints";

import {
  Container as Root,
  Text,
  Boxes,
  Box,
} from "components/services/detailed-info/blueprint";

import { Logo } from "../blueprint/DetailedHeader";
import DetailedHeader, { Year } from "../blueprint/DetailedHeader";

import sameDay from "public/images/services/haulage/same-day.png";
import nextDay from "public/images/services/haulage/next-day.png";

import config from "subsidiary-config/haulage-config";
import SubsidiaryHeader from "../blueprint/SubsidiaryHeader";
import TalkToUsIcon from "/components/talk-to-us/button/TalkToUsIcon";
import useNavigateToQuote from "/components/util/useNavigateToQuote";

function Haulage(props: Styleable) {
  const htmlDesc = config.description.join(" ");
  const htmlText = { __html: htmlDesc };
  const navigateTo = useNavigateToQuote();
  return (
    <Container className={props.className} subsidiary="haulage">
      <SubsidiaryHeader subsidiary="haulage" />
      <Text dangerouslySetInnerHTML={htmlText} />      
      <CustomBoxes>
        <Box text="same day delivery" image={sameDay} />
        <Box text="next day delivery" image={nextDay} />
      </CustomBoxes>
      <QuoteButton onClick={navigateTo} className={props.className} id="talk-to-us-go-to-talk-to-us">
        <TalkToUsIcon />
        <QuoteText>Get a Quote</QuoteText>
      </QuoteButton>
    </Container>
  );
}

const QuoteText = styled.span``;

const CustomBoxes = styled(Boxes)`
  line-height: 1.4em;
`;

const Container = styled(Root)`
  background: black url("/images/showcase/haulage.png") no-repeat right center !important;
  background-size: cover;
  color: white;
  padding-bottom: 50px;
  @media only screen and (max-width: 1600px) {
    background-position-x: -120px !important;
  }

  @media only screen and (max-width: 1200px) {
    background-position-x: -300px !important;
  }

  ${up("lg")} {
    height: 706px !important;
  }

  ${up("md")} {
    height: 887px;
  }

  ${down("md")} {
    padding: 50px 40px 350px 40px !important;
  }
  ${DetailedHeader} {
    ${Logo} {
      width: 152px;
      height: auto;
    }
    ${Year} {
      color: rgba(255, 255, 255, 0.65);
    }
  }

  ${Text} {
    width: 40%;

    ${down("md")} {
      width: 100%;
    }
    ${down("lg")} {
      width: 80%;
    }
  }

  ${Box} {
    background: #0d0d0d;
    border: none;
  }

  ${down("md")} {
    padding-bottom: 350px !important;
    background: black url("/images/showcase/haulage_tablet.jpg") no-repeat right
      bottom !important;
    background-size: contain;

    ${SubsidiaryHeader} {
      margin-bottom: 45px;
    }

    ${Box} {
      width: 100%;
    }
  }

  ${only("md")} {
    padding: 30px 40px 0px 40px;
  }

  ${down("sm")} {
    padding-bottom: 50px !important;
    padding-left: 20px !important;
    padding-right: 20px !important;
    //background: black url("/images/showcase/haulage_tablet.jpg") no-repeat right
    // bottom !important;
    background-image: none !important;
    ${Text} {
      width: 100%;
    }
  }
`;


const QuoteButton = styled(Button)`
  padding: 13px 27px;
  align-items: center;
  background: #FEBA30;
  border: 1px solid #FEBA30;
  span {
    font-family: "Eveleth";
  }
  color: #5f5d5b;
  font-size: 14px;
  transition: color 0.3s;
  align-self: flex-end;
  > :not(:last-child) {
    margin-right: 12px;
  }

  :hover {
    background: black;
    border: 1px solid black;
    svg path {
      :nth-of-type(2) {
        fill: white;
      }
    }
    ${QuoteText} {
      color: #ffffff
    }
  }
  ${down("md")} {
    align-self: center;
    position: absolute;
    bottom: 50px;
  }
  ${down("sm")} {
    position: relative;
    font-size: 14px;
    padding: 10px 20px;
    height: auto;
    margin-top: 75px;
  }

`;

export default styled(Haulage)``;
