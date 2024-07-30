import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";
import OurPartners from "./our-partners";

import OrderTrackingApplicationShowcase from "./application/impl/order-tracking-showcase";
function Introduction(props: Styleable) {
  return (
    <Container className={props.className}>
      <TextContainer>
        <Headline>
          BJS powers its <b>logistics</b>, <b>distribution</b>, and{" "}
          <b>warehousing</b> operations with cutting edge in-house software.
        </Headline>
        <Subtitle>
          Whether planning routes, tracking orders, managing our warehouse, or getting proof-of-delivery on glass, it’s our bespoke software platform that powers the whole customer journey. We work closely with our partners to understand any challenges within their operation and use our technology to explore new efficiencies through automation and to deliver the best service possible.
        </Subtitle>
      </TextContainer>
      <OurPartners />
    </Container>
  );
}

const Subtitle = styled.span`
  ${up("lg")} {
    font-size: 20px;
  }

  ${down("md")} {
    font-size: 16px;
  }
`;

const Headline = styled.span`
  color: #888075;
  font-size: 32px;
  font-family: "Gotham SSm A", "Gotham SSm B";
  font-weight: normal;
  ${up("lg")} {
    font-size: 36px;
  }
  ${down("md")} {
    font-size: 26px;
  }
  b {
    color: #888075;
    font-weight: medium;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;

  width: 100%;

  ${OurPartners} {
    margin: 40px 0px 40px 0px;
  }
  ${down("md")} {
    padding-top: 0px;
  }
  padding-top: 50px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: auto;
  margin-right: auto;
  text-align: center;

  ${up("lg")} {
    > :not(:last-child) {
      margin-bottom: 40px;
    }

    width: 60%;
  }

  @media only screen and (max-width: 1400px) {
    width: 100%;
  }

  ${down("md")} {
    > :not(:last-child) {
      margin-bottom: 40px;
    }
    text-align: center;
  }
`;

export default Introduction;
