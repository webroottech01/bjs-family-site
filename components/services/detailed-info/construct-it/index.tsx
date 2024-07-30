import styled from "styled-components";
import { Button, Styleable } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import {
  Container as Root,
  Text,
  Boxes,
  Box,
} from "components/services/detailed-info/blueprint";

import SubsidiaryHeader, { Title } from "../blueprint/SubsidiaryHeader";
import { Logo } from "../blueprint/DetailedHeader";
import { Year } from "../blueprint/DetailedHeader";

import config from "subsidiary-config/construct-it-config";

import FlexibleEuro6Fleet from "./FlexibleEuro6Fleet";
import LiveOrderTracking from "./LiveOrderTracking";
import TalkToUsIcon from "/components/talk-to-us/button/TalkToUsIcon";
import useNavigateToQuote from "/components/util/useNavigateToQuote";

function ConstructIT(props: Styleable) {
  const navigateTo = useNavigateToQuote();

  return (
    <Container className={props.className} subsidiary="constructit">
      <SubsidiaryHeader subsidiary="constructit" />
      <TextContainer>
        {config.description.map((text) => {
          const htmlText = { __html: text };
          return <Text key={text} dangerouslySetInnerHTML={htmlText} />;
        })}
      </TextContainer>
      <CustomBoxes>
        <FlexibleEuro6Fleet />
        <LiveOrderTracking />
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

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: #fff;
  }

  ${Text}:first-child {
    margin-bottom: 10px;
  }
`;

const Container = styled(Root)`
  background: black url("/images/services/construct-it/background.png")
    no-repeat right !important;
  background-size: cover !important;
  color: white;
  background-size: auto 100%;
  
  ${up("lg")} {
    height: 706px !important;
  }
  
  ${up("md")} {
    height: 887px;
  }
  
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    padding: 60px !important;
  }
  
  @media only screen and (max-width: 1400px) {
    background-position-x: -250px !important;
  }
  ${SubsidiaryHeader} {
    ${down("md")} {
      align-items: flex-start;
    }

    ${Logo} {
      height: 64px;
      ${down("sm")} {
        height: 48px;
      }
    }
    ${Year} {
      color: rgba(255, 255, 255, 0.65);
    }
    ${Title} {
      @media only screen and (max-width: 375px) {
        font-size: 10px;
      }
    }
  }

  ${Box} {
    background: #20252a;
    border: none;
  }

  ${Text} {
    width: 42%;
    ${down("md")} {
      width: 100%;
    }
  }

  ${down("md")} {
    background: #14191e url("/images/showcase/constructit_tablet.jpg") no-repeat
      center bottom !important;
    background-size: 100% !important;
    padding: 76px 40px 470px 40px !important;
    // padding: 50px 40px 350px 40px !important;

    ${Box} {
      background: #20252a;
      border: 2px solid #20252a;
      border-radius: 12px;
      width: 50%;
    }
  }

  ${down("sm")} {
    // background: #14191e url("/images/showcase/constructit_mobile1.jpg") no-repeat
    // center bottom !important;
    background-size: 100% !important;
    background-image: none !important;
    padding: 50px 20px 10px 20px !important;
    width: 100%;
    ${Box} {
      width: 100%;
    }
    ${Logo} {
      height: 33px !important;
    }
  }
`;

const QuoteButton = styled(Button)`
  padding: 13px 27px;
  align-items: center;
  background: #E4E428;
  border: 1px solid #E4E428;
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

export default styled(ConstructIT)``;
