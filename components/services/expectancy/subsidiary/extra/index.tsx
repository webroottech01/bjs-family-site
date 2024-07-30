import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";

import { Bulletpoint } from "components/services/expectancy/entry";
import { BulletpointContainer } from "components/services/expectancy/entry/BulletpointEntry";

import Root from "components/services/expectancy/subsidiary/Container";
import OurPeople from "./OurPeople";
import YourCustomersCanExpect from "./YourCustomersCanExpect";
import { Title, Seperator } from "/components/services/expectancy/entry/AbstractEntry";

import extraConfig from "subsidiary-config/extra-config";

const offers = [
  "A single point of contact",
  "Consistency of service with inconsistent volumes",
  "A dedicated warehouse for EXTRA clients",
  "IT infrastructure and support",
  "Fuss-free on-boarding process",
  "3-5 day lead time",
];

function ExtraExpectancy(props: Styleable) {
  return (
    <Container className={props.className}>
      <Row>
        <Offers title="we can offer you" entries={offers} />
        <OurPeople />
      </Row>
      <YourCustomersCanExpect />
    </Container>
  );
}

const Offers = styled(Bulletpoint)`
  ${BulletpointContainer} {
    grid-template-columns: 1fr;

    grid-gap: 0px;
  }

  li:not(:last-child) {
    margin-bottom: 4px !important;
  }
`;

const Container = styled(Root)`
  ${Title} {
    color: ${colours.black};
  }
  ${Seperator} {
    background: ${extraConfig.primaryColour};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 60px;
  }

  ${down("sm")} {
    > :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export default styled(ExtraExpectancy)``;
