import styled from "styled-components";
import Page, {
  Header,
  ExplanativeQuote,
  ReadMore,
} from "components/services/case-study/blueprint";

import {
  Container,
  HighlightQuote,
  JulianBowenLogo,
  BottomRow,
  ManHoldingSofaImageContainer,
  BottomBody,
  ContinuedQuote,
  Site,
} from "./Shared.styles";

import Image from "next/image";

import menHoldingSofaImage from "public/images/services/case-study/julian-bowen/holding-sofa.png";

import IntroductionPiece from "components/services/case-study/blueprint/IntroductionPiece";
import LargeQuote from "components/services/case-study/blueprint/LargeQuote";
import useWindowDimensions from "components/util/useWindowDimensions";

const CHANGE_QUOTE_BREAKPOINT = 1300;

function JulianBowenDesktop() {
  const highlightQuote = (
    <HighlightQuote>{`"We’ve partnered with BJS for over two years now"`}</HighlightQuote>
  );

  const { width } = useWindowDimensions();

  return (
    <Blueprint
      initial={{ x: -500 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <IntroductionPiece>
          <JulianBowenLogo />
          <ExplanativeQuote
            description="We used to have our own delivery fleet service and drivers, but
        the service BJS offered was a perfect fit for us in terms of
        coverage and automation. Outsourcing delivery to a specialist
        company was a logical decision and the best thing we’ve ever done."
            author="Emmett Lenaghan, Managing Director at Julian Bowen"
            italic={false}
          />
          {width > CHANGE_QUOTE_BREAKPOINT && highlightQuote}
        </IntroductionPiece>
      </Header>
      <ReadMore>
        <BottomRow>
          <BottomContent>
            <ManHoldingSofaImageContainer>
            <Image
              src={menHoldingSofaImage}
              layout="fill"
            />
            </ManHoldingSofaImageContainer>

            {width <= CHANGE_QUOTE_BREAKPOINT && highlightQuote}
          </BottomContent>
          <BottomBody>
            <LargeQuote
              text="I first saw one of the BJS vans when they made a delivery to our
                office and the smart, professional, uniformed team were dressed
                to impress - and they certainly impressed me!"
            />
            <ContinuedQuote>
              <p>
                It’s not just that BJS Home Delivery look fantastic, their
                coverage is great too and the automation side of things – with
                choice for the our customers and tracking portals – has really
                helped our business to grow.
              </p>
              <p>
                We have daily collections from our warehouse and with great
                Google reviews from our happy customers we know we are getting
                quality and quantity in our deliveries.
              </p>
              <Site href="https://www.julian-bowen.co.uk" target="_blank">
                www.julian-bowen.co.uk
              </Site>
            </ContinuedQuote>
          </BottomBody>
        </BottomRow>
      </ReadMore>
    </Blueprint>
  );
}

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1165px) {
    flex-direction: column-reverse;

    > :not(:last-child) {
      margin-bottom: 20px;
    }

    ${ManHoldingSofaImageContainer} {
      width: 100%;
      height: auto;
    }

    ${HighlightQuote} {
      position: static;
      bottom: auto;
      text-align: center;
      margin-left: 0px !important;
      width: 100%;
      // text-align: center;
    }
  }
`;

const Blueprint = styled(Container)`


  
  @media only screen and (min-width: 1920px) {
    margin: 0 auto;
    width: 100%;
    max-width: 1920px;
  }

  @media only screen and (max-width: 1165px) {
    ${Header} {
      margin-bottom: 0px;
    }
  }

  ${ExplanativeQuote} {
    @media only screen and (max-width: 1600px) {
      flex: initial !important;
      max-width: 640px;

      > :not(:last-child) {
        margin-bottom: 30px;
      }
    }

    @media only screen and (max-width: ${CHANGE_QUOTE_BREAKPOINT}px) {
      max-width: 100ch !important;
      padding-right: 0px;
    }
  }

  @media only screen and (max-width: 1600px) {
    ${HighlightQuote} {
      margin-left: -100px; //Removes the 100px gap (easier to set negative here rather than adjust the others)
    }
    ${ExplanativeQuote} {
      max-width: 540px;
    }
  }

  @media only screen and (max-width: ${CHANGE_QUOTE_BREAKPOINT}px) {
    > :not(:last-child) {
      margin-bottom: 34px;
    }
    ${BottomRow} {
      flex-direction: column;
    }

    ${BottomBody} {
      padding-bottom: 80px;
    }
  }
`;
export default JulianBowenDesktop;
