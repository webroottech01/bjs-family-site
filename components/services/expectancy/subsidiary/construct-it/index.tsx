import styled from "styled-components";

import { Bulletpoint } from "components/services/expectancy/entry";
import { Styleable } from "@bjsdistribution/components";

import Root from "components/services/expectancy/subsidiary/Container";
import SectorsCovered from "./SectorsCovered";
import TheFleet from "./the-fleet";
import NationwideCoverage from "./NationwideCoverage";
import {
  Title,
  Seperator,
} from "components/services/expectancy/entry/AbstractEntry";
import config from "subsidiary-config/construct-it-config";

const constructITColour = config.primaryColour;



function ConstructITExpectancy(props: Styleable) {
  return (
    <Container className={props.className}>
      <SectorsCovered />
      <TheFleet />
      <NationwideCoverage />
    </Container>
  );
}

const Container = styled(Root)`
  ${Seperator} {
    background: ${constructITColour};
  }

  ${SectorsCovered}, ${NationwideCoverage}, ${TheFleet} {
    ${Title} {
      color: #14191E;
    }
  }
`;

export default styled(ConstructITExpectancy)``;
