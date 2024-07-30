import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import { Abstract } from "components/services/expectancy/entry";
//import BulletpointStyling from "components/services/expectancy/entry/BulletpointEntry";

import BuildItShiftIt from "./BuildItShiftIt";

const Container = styled(Abstract)`

  ul {
    color: #3A3630;

 list-style-position: outside;
//text-indent: -1.5em;
  }
`;

function NationwideCoverage(props: Styleable) {
  return (
    <Container className={props.className} title="nationwide coverage">
      <p>
        Whether it's around the country or around the corner, we'll deliver your
        consignment with the additional peace of mind
      </p>
      <ul>
        <li>
          Volumes covered with our own fleet 95% + of all deliveries, covered on
          our own fleet, allowing greater control and improved service
        </li>
        <li>
          Multiple strategically placed hubs in West Midlands (HQ), Essex,
          Yorkshire, Lanarkshire, and Nottinghamshire
        </li>
        <li>
          Centrally manned operational control tower with group support
          comprising of an experienced team within the construction transport
          sector
        </li>
      </ul>
    </Container>
  );
}

export default styled(NationwideCoverage)``;
