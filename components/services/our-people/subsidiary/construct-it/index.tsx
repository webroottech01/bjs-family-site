import { Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { UIEventHandler, useState } from "react";

import OurPeople, {
  TopContainer,
} from "components/services/our-people/blueprint";

import ScrollableCards from "components/services/our-people/blueprint/ScrollableCards";
import Card from "components/services/our-people/blueprint/Card";

import industryLeading from "public/images/services/construct-it/our-people/industry-leading.png";
import heart from "public/images/services/construct-it/our-people/heart.jpg";
import serviceLed from "public/images/services/construct-it/our-people/service-led.png";
import greenAllOver from "public/images/services/construct-it/our-people/green-all-over.png";
import harry from "public/images/services/construct-it/our-people/harry.png";
import closeKnit from "public/images/services/construct-it/our-people/close-knit.png";
import { useRef } from "react";

const cards = [
  {
    title: "Industry leading training",
    description:
      "Class-leading expertise from our internal training managers – alongside ALLMI and FORS recognised partners.",
    image: industryLeading,
  },
  {
    title: "H&S at the heart of it",
    description:
      "We ensure safe working practices at all times for staff, customers, contractors, and the wider public.",
    image: heart,
  },
  {
    title: "Service-led",
    description:
      "Our team are reliable, responsive, adaptable, and built on service-first foundations.",
    image: serviceLed,
  },
  {
    title: "Quick thinkers",
    description:
      "We have our very own dedicated in-house tech team so we can keep our wheels rolling in the right direction.",
    image: harry,
  },
  {
    title: "Close knit",
    description:
      "Our single central hub comprises of an experienced team of construction transport sector professionals.",
    image: closeKnit,
  },
];

function ConstructIT(props: Styleable) {

  return (
    <Container className={props.className}>
      <Subtitle>Health & Safety is at the heart of everything we do.</Subtitle>
      <Description>
        The health and well-being of our team, our customers and the general
        public is something that should go without saying, but not every
        operator feels the same way. So let us assure you that we are determined
        to provide a safe working environment for everyone involved.
      </Description>
      <ScrollableCards>
        {cards.map((card, index) => (
          <Card
            {...card}
            key={index}
          />
        ))}
      </ScrollableCards>
    </Container>
  );
}

const Subtitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #615e59;

  ${down("sm")} {
    color: ${colours.black};
  }
`;

const Description = styled.span``;

const Container = styled(OurPeople)`
  ${up("lg")} {
    background: url("/images/services/construct-it/our-people/background-guy.png")
        no-repeat,
      linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%);
    background-position: top right 300px;
    position: relative;
    ${Subtitle} {
      margin-bottom: 40px;
    }
    ${Description} {
      width: 40%;
    }
  }

  ${down("md")} {
    ${Subtitle} {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
`;

export default ConstructIT;
