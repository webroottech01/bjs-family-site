import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Button, colours } from "@bjsdistribution/components";
import DetailedInfo, {
  Title,
  Text,
} from "components/subsidiary-showcase/detailed-info/blueprint/DetailedInfo";

import { Highlight } from "components/subsidiary-showcase/detailed-info/blueprint/points/mobile/header/Entry";
import HaulageVanImage from "./HaulageVanImage";

const Screen = styled(DetailedInfo)`
  color: white;

  ${Highlight} {
    background: white;
  }

  ${Button.PlainButton} {
    color: black;
  }
`;

function HaulageDetailedInfo() {
  return (
    <Screen
      subsidiary="haulage"
      backgroundColour="black"
      footerText="and much more.."
    >
      <HaulageVanImage />
    </Screen>
  );
}

export default HaulageDetailedInfo;
