import styled from "styled-components";
import { up, down, only } from "styled-breakpoints";
import { colours, Styleable } from "@bjsdistribution/components";
import { motion } from "framer-motion";
import { Header } from "components/services/case-study/blueprint";
import LargeQuote from "components/services/case-study/blueprint/LargeQuote";
import getClientLogo from "/components/util/getClientLogo";

const ContinuedQuote = styled.div`
  font-size: 16px;
  position: relative;

  @media only screen and (max-width: 1600px) {
    font-size: 14px;
  }
`;

const Site = styled.a`
  position: relative;
  bottom: -50px;
  text-decoration: underline;

  @media only screen and (max-width: 1600px) {
    bottom: -20px;
  }
`;

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${up("lg")} {
    width: 80%;
  }
`;

const QuoteMark = styled.span`
  font-size: 100px;
  font-weight: bold;
  font-style: italic;
  color: ${colours.yellow};
  content: open-quote;
  line-height: 0.8;
`;

const Quote = styled.span`
  font-weight: medium;
  font-size: 22px;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > :not(:last-child) {
    margin-right: 100px;
  }
  @media only screen and (max-width: 1600px) {
    > :not(:last-child) {
      margin-right: 40px;
    }
  }

  ${down("md")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 40px;
    }
  }
`;

const BottomBody = styled.div`
  display: flex;
  flex-direction: column;

  ${LargeQuote} {
    ${up("lg")} {
      margin-bottom: 60px;
    }
    @media only screen and (max-width: 1600px) {
      margin-bottom: 40px;
    }
  }
`;

const ManHoldingSofaImageContainer = styled.div`
  position: relative;
  height: 400px;
  width: 700px;

  ${only("md")} {
    height: 425px;
    width: 100%;
  }
  ${down("sm")} {
    height: 200px;
    width: auto;
  }
`;

const FakeImage = styled.div`
  min-height: 400px;
  min-width: 700px;
  border: 1px solid black;

  ${down("md")} {
    min-width: 100%;
  }
`;

const HighlightQuote = styled.div`
  flex-basis: 33%;
  font-size: 38px;
  font-style: italic;
  color: #9c9a97;
  text-align: right;
  white-space: pre-line;

  ${down("md")} {
    font-size: 28px;
    text-align: left;
    position: absolute;
    width: 40%;
    bottom: -20px;
  }

  ${down("sm")} {
    position: relative;
    font-size: 28px;
    width: 100%;
  }
`;

const LogoText = styled.span`
  font-size: 40px;
  font-family: "Arial";
  white-space: nowrap;

  ${down("md")} {
    margin-left: auto;
    margin-right: auto;
  }
`;


const JulianBowenLogo = styled(JulianBowenLogoInternal)``;
function JulianBowenLogoInternal({className} : Styleable) {
  return <img className={className} src={getClientLogo("julian bowen")} height={46} width={304} />;
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  ${down("md")} {
    ${Header} {
      margin-bottom: 40px;
    }
  }

  ${down("sm")} {
      ${JulianBowenLogo} {
        margin: 10px auto 60px auto;
      
    }
  }
`;


export {
  Container,
  HighlightQuote,
  ContinuedQuote,
  Site,
  QuoteContainer,
  QuoteMark,
  Quote,
  BottomRow,
  BottomBody,
  FakeImage,
  ManHoldingSofaImageContainer,
  JulianBowenLogo,
};
