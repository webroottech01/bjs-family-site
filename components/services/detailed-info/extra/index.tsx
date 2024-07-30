import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

import {
  Container as Root,
  Text,
  Boxes,
  Box,
} from "components/services/detailed-info/blueprint";

import { Year, Logo } from "../blueprint/DetailedHeader";

import config from "subsidiary-config/extra-config";
import SubsidiaryHeader from "../blueprint/SubsidiaryHeader";

import DedicatedAccountManagerBox from "./DedicatedAccountManagerBox";
import NoMinimumVolume from "./NoMinimumVolumeRequirements";

function Extra(props: Styleable) {
  const htmlDesc = config.description.join(" ");
  const htmlText = { __html: htmlDesc };
  return (
    <Container className={props.className} subsidiary="extra">
      <SubsidiaryHeader subsidiary="extra" />
      <Text dangerouslySetInnerHTML={htmlText} />      
      <Boxes>
        <DedicatedAccountManagerBox />
        <NoMinimumVolume />
      </Boxes>
      <VanImage src={"/images/services/extra/van.png"} />
    </Container>
  );
}

const VanImage = styled.img`
  position: absolute;
  height: 580px;
  right: 0px;

  ${down("md")} {
    bottom: 0px !important;
    height: 350px !important;
    top: auto !important;
    width: auto !important;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 0);
  }

  ${down("sm")} {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    width: 800px;
    right: -100px;
    z-index: 1;
  }

  @media only screen and (max-width: 1400px) {
    width: 700px;
    top: 100px;
    right: -86px;
    
  }

  @media only screen and (max-width: 1200px) {
    height: 550px;
    width: 800px;
    right: -315px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    right: -180px;
    top: 160px;
  }
`;

const Container = styled(Root)`
  background: ${config.primaryColour};
  background-size: cover;
  overflow: hidden !important; //May need to remove this
  color: white;
  
  ${up("lg")} {
    height: 706px !important;
  }

  ${up("md")} {
    height: 887px;
  }

  ${SubsidiaryHeader} {
    z-index: 5;
    ${Year} {
      color: rgba(255, 255, 255, 0.65);
    }
    ${Logo} {
      width: 151px;
      height: 118px;
    }
  }

  ${Boxes} {
    z-index: 5;
  }
  ${down("md")} {
    padding: 50px 40px 350px 40px !important;

    ${Boxes} {
      width: 100%;
      gap: 40px;
      ${Box} {
        max-width: 50%;
      }
    }
  }

  ${down("sm")} {
    padding: 50px 20px !important;
    ${Boxes} {
      width: 100%;
    }
    ${Box} {
      max-width: 100% !important;
    }
  }

  ${Text} {
    z-index: 5;
    width: 40%;

    @media only screen and (max-width: 1600px) {
      width: 90ch;
    }

    @media only screen and (max-width: 1400px) {
      width: 80ch;
    }

    @media only screen and (max-width: 1200px) {
      width: 56ch;
    }

    ${down("md")} {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1000px) {
  }
`;

export default styled(Extra)``;
