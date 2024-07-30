import { Button } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";
import styled from "styled-components";

import DetailedInfo, {
  Title,
} from "components/subsidiary-showcase/detailed-info/blueprint/DetailedInfo";

import { Highlight } from "components/subsidiary-showcase/detailed-info/blueprint/points/mobile/header/Entry";
import { ListItem } from "components/subsidiary-showcase/detailed-info/blueprint/points/List";
import Background from "./Background";

import constructITConfig from "subsidiary-config/construct-it-config";

const constructITColour = constructITConfig.primaryColour;
const Screen = styled(DetailedInfo)`
  /*background: black url("/images/services/construct-it/background.png")
    no-repeat right bottom !important;
  background-size: cover !important;*/
  background: black;
  
  color: white;

  ${Title} {
    ${up("lg")} {
      white-space: nowrap;
    }
  }
  ${Highlight} {
    background: white;
  }

  ${ListItem} {
    ::after {
      background: ${constructITColour};
    }
  }

  ${Button.PlainButton} {
    color: black;
  }

/*
  ${down("md")} {
    background: #14191E url("/images/showcase/constructit_tablet.jpg") no-repeat center bottom !important;
    background-size: 100% !important;
    background-repeat: no-repeat !important;
    color: white;
  }*/


  @media only screen and (max-width: 300px) {
    background: black !important;
  }
`;

const PhraseText = () => {
  const it = <span style={{ color: constructITColour }}>IT</span>;
  return (
    <span>
      If you can build with {it}, we can shift {it}.
    </span>
  );
};

function ConstructITInfo() {
  return (
    <Screen
      subsidiary="constructit"
      footerText={<PhraseText />}
      backgroundColour="inherit"
      description="<a href='/services/construct-it'>Construct IT</a> provides a safe and reliable service for market-leading construction product manufacturers. An impressive modern fleet delivers outstanding service and specialist haulage for the construction industry, backed by a first-class IT system and DVS compliance as standard."
    ><Background/></Screen>
  );
}

export default ConstructITInfo;
