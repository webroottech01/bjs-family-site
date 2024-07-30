import styled from "styled-components";

import { up, only, down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

import { Abstract } from "components/services/expectancy/entry";

import BuildItShiftIt from "./BuildItShiftIt";

const Container = styled(Abstract)`

  position: relative;

  ${BuildItShiftIt} {
    margin-top: 40px;

    ${only("md")} {
      position: absolute;
      top: 40%;
      right: 50px;
    }
  }

  li:not(:last-child) {
    margin-bottom: 4px;

    ${down("md")} {
        margin-bottom: 13px !important;
      }
  }

  p {
    margin: 0;
    ${up("lg")} {
      padding: 30px 0px;
    }
  }
`;

const covering = ["Bricks", "Blocks", "Insulation", "Metal", "and more..."];

function SectorsCovered(props: Styleable) {
  return (
    <Container className={props.className} title="sectors covered">
      <p>
        We are proud to work some of the biggest construction material
        manufacturers in the UK delivering:
      </p>
      <ul>
        {covering.map((entry) => (
          <li key={entry}>{entry}</li>
        ))}
      </ul>
      <BuildItShiftIt />
    </Container>
  );
}

export default styled(SectorsCovered)``;
