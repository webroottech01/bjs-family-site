import styled from "styled-components";
import OurPeople, { TopContainer } from "../../blueprint";
import ScrollableCards from "../../blueprint/ScrollableCards";
import Card from "../../blueprint/Card";
import { down, up } from "styled-breakpoints";

import headOfClass from "/public/images/services/homedelivery/our-people/head-of-the-class.png";
import aToB from "/public/images/services/homedelivery/our-people/a-to-b.png";
import brains from "/public/images/services/homedelivery/our-people/brains.png";
import prepared from "/public/images/services/homedelivery/our-people/prepared.png";
import qualified from "/public/images/services/homedelivery/our-people/qualified.png";
import puttingTogether from "/public/images/services/homedelivery/our-people/putting-together.png";
import HomeDeliveryTextPiece from './HomeDeliveryTextPiece';

const TRANSFORM_TO_COLUMN_BREAKPOINT = 1560;
const TRANSFORM_TO_FULL_WIDTH = 1200;

function HomeDelivery() {
  return (
    <Container>
      <HomeDeliveryTextPiece/>
      <ScrollableCards>
        <Card
          title="head of the class"
          description="Once we've found people with the right attitude - we invest time and energy into helping them 'learn the ropes' well."
          image={headOfClass}
        />
        <Card
          title="getting from a to b"
          description="In order to get to a customer on-time, we help our teams improve their navigation and driving skills."
          image={aToB}
        />
        <Card
          title="brains as well as brawn"
          description="All our teams are thoroughly trained in how to move large and awkward items safely and without damage."
          image={brains}
        />
        <Card
          title="be prepared"
          description="We check a home before moving items inside, measuring doors and tight-spaces to ensure the minimum of fuss."
          image={prepared}
        />
        <Card
          title="putting it all together"
          description="Each team is thoroughly trained in how to assemble and install every item of furniture and equipment we deliver."
          image={puttingTogether}
        />
        <Card
          title="qualified and ready"
          description="After three weeks of training, our teams are ready to provide a great two-man delivery service to your customers."
          image={qualified}
        />
      </ScrollableCards>
    </Container>
  );
}

const Container = styled(OurPeople)`
  ${up("lg")} {
    background: url("/images/services/homedelivery/our-people/two-men.png")
      no-repeat bottom 300px right 90px;
    background-color: #e2e0de;

    @media only screen and (max-width: 1800px) {
      background-position: bottom 300px right 50px;
    }

    @media only screen and (max-width: 1600px) {
      background-position: bottom 300px right 0px;
    }

    @media only screen and (max-width: 1200px) {
      background-position: bottom 370px right -60px;
    }
  }

  background-color: #e2e0de;
  ${TopContainer} {
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-gap: 0px 60px;
  grid-template-rows: repeat(2, min-content);
  grid-auto-flow: column;
`;

const Body = styled.div`
  display: flex;
  gap: 60px;
  width: 65%;
  position: relative;

  @media only screen and (max-width: 1600px) {
    width: 100%;
    gap: 40px;
  }

  @media only screen and (max-width: ${TRANSFORM_TO_COLUMN_BREAKPOINT}px) {
    flex-direction: column;
    gap: 0px;
  }

  ${down("md")} {
    width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-basis: 50%;

  @media only screen and (max-width: ${TRANSFORM_TO_COLUMN_BREAKPOINT}px) {
    gap: 0px;
  }

  @media only screen and (max-width: 1600px) {
    font-size: 14px;
  }

  ${down("md")} {
    gap: 0px;
  }

  ${down("sm")} {
    p {
      margin-bottom: 1.5em;
    }
  }
`;

const FirstColumn = styled(Column)`
  // flex-basis: 40%;
  @media only screen and (max-width: 1600px) {
    max-width: 80ch;
  }
  @media only screen and (max-width: ${TRANSFORM_TO_COLUMN_BREAKPOINT}px) {
    max-width: 107ch;
  }

  @media only screen and (max-width: 1300px) {
    max-width: 70ch;
  }

  ${down("sm")} {
    max-width: 100%;
  }
`;

const SecondColumn = styled(Column)`
  @media only screen and (max-width: 1600px) {
    max-width: 45ch;
  }

  @media only screen and (max-width: ${TRANSFORM_TO_COLUMN_BREAKPOINT}px) {
    max-width: 100ch;
  }

  @media only screen and (max-width: 1300px) {
    max-width: 75ch;
  }
  ${down("sm")} {
    max-width: 100%;
  }
`;

export default HomeDelivery;
