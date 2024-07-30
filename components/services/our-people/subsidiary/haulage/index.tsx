import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import OurPeople, { Title } from "../../blueprint";
import ScrollableCards from "../../blueprint/ScrollableCards";
import Card from "../../blueprint/Card";
import { Styleable } from "@bjsdistribution/components";

import supplyChain from "public/images/services/haulage/our-people/supply-chain.jpg";
import solutionsOriented from "public/images/services/haulage/our-people/solutions-oriented.jpg";
import bigOnTrucks from "public/images/services/haulage/our-people/big-on-trucks.jpg";

import efficiencyDrivers from "public/images/services/haulage/our-people/efficiency-drivers.jpg";
import equippedForAnyChallenge from "public/images/services/haulage/our-people/equipped-for-any-challenge.jpg";

import techTeam from "public/images/services/haulage/our-people/tech-team.jpg";
import SupportingIllustration from "./SupportingIllustration";

interface Card {
  title: string;
  description: string;
  image: StaticImageData;
}

const cards: Card[] = [
  {
    title: "Supply chain superstars",
    description:
      "We understand the big picture and ensure we seamlessly fulfil our link in your chain. We deliver peace of mind with every load.",
    image: supplyChain,
  },
  {
    title: "Solutions oriented, service-led",
    description:
      "We might be all about big trucks but we are agile thinkers keen to fit around you; so if you’re requirements are a little out of the ordinary then let us prove to you that we are too!",
    image: solutionsOriented,
  },
  {
    title: "Big on trucks, big on detail",
    description:
      "You can be confident that BJS Haulage will deliver an end-to-end service driven by the highest customer service levels.",
    image: bigOnTrucks,
  },
  {
    title: "Efficiency drivers",
    description:
      "Our teams are constantly looking at ways to increase efficiency; reducing costs means we can provide backloads and return loads wherever possible.",
    image: efficiencyDrivers,
  },
  {
    title: "Equipped for any challenge",
    description:
      "Our class-leading expertise is born from our internal training managers – ensuring our teams have the knowledge right from the start.",
    image: equippedForAnyChallenge,
  },
  {
    title: "Tech team on hand",
    description:
      "Our dedicated internal tech team means across all our hardware and software, it’s all systems go, all the time.",
    image: techTeam,
  },
];

function Haulage(props: Styleable) {
  return (
    <Container className={props.className}>
      <Body>
        <FirstColumn>
          <p>
            We value the <b>whole customer experience</b>, and we aim to meet
            the highest standards across a wide variety of tasks. That’s why
            we’ve created our own dedicated training academy – ensuring that our
            delivery teams have all the skills required to provide the very best
            service experience for your customers.
          </p>
          <p>
            Our people are our product, so the whole team undertake a tailored
            training programme to provide the very best delivery service
            standards.
          </p>
        </FirstColumn>
      </Body>

      <ScrollableCards>
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </ScrollableCards>
      <SupportingIllustration />
    </Container>
  );
}

const Container = styled(OurPeople)`
  background: linear-gradient(#e2e0dd, #f5f0ea);
  position: relative;

  ${Card} {
    max-width: 332px;
    max-height: 437px;
  }

  ${down("md")} {
    ${ScrollableCards} {
      bottom: -29%;
    }
  }

  ${Title} {
    margin-bottom: 40px;
  }
`;

const Body = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 60px;
  }
  position: relative;

  ${down("md")} {
    width: 100%;
    flex-direction: column;

    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 60px;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 30px;
  }
`;

const FirstColumn = styled(Column)`
  // flex-basis: 40%;
  margin-bottom: 60px;

  max-width: 885px;

  @media only screen and (max-width: 1660px) {
    max-width: 760px;
  }

  @media only screen and (max-width: 1350px) {
    max-width: 690px;
  }

  @media only screen and (max-width: 1300px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 1200px) {
    max-width: 560px;
  }

  @media only screen and (max-width: 1170px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 1090px) {
    max-width: 400px;
  }

  @media only screen and (max-width: 994px) {
    max-width: 100%;
  }

  p {
    //  margin: 0;
  }
`;

export default styled(Haulage)``;
