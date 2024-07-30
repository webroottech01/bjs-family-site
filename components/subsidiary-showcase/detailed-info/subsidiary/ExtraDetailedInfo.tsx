import { colours, Button } from "@bjsdistribution/components";
import { motion } from "framer-motion";
import styled from "styled-components";
import DetailedInfo, {
  TextContainer,
  Text,
  PhraseContainer,
} from "components/subsidiary-showcase/detailed-info/blueprint/DetailedInfo";

import { Highlight as MobilePointHighlight } from "components/subsidiary-showcase/detailed-info/blueprint/points/mobile/header/Entry";

import { up, down } from "styled-breakpoints";

import config from "subsidiary-config/extra-config";

const Screen = styled(DetailedInfo)`
  color: white;

  ${Button.PlainButton} {
    color: ${config.primaryColour};
    background: white;
    border: 1px solid white;

    :hover {
      color: white;
      background: ${colours.yellow};
      border: 1px solid ${config.primaryColour};
    }
  }

  @media screen and (max-width: 1600px) {
    ${PhraseContainer} {
      width: 70%;
    }
  }

  ${down("sm")} {
    ${PhraseContainer} {
      width: 50%;
    }
  }

  ${MobilePointHighlight} {
    background: white;
  }
`;

const ExtraVan = styled(motion.img)`
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1;
  height: 98%;

  @media screen and (max-width: 1855px) {
    height: 80%;
    bottom: 0px;
    top: auto;
  }

  @media screen and (max-width: 1600px) {
    height: 70%;
    right: -100px;
  }

  @media only screen and (max-width: 1220px) and (min-width: 980px) {
    height: 50%;
    right: 30px;
    bottom: 50px;
  }
  ${down("md")} {
    height: 55%;
    right: -60px;
    bottom: 30px;
  }
  ${down("sm")} {
    right: -230px;
    height: 280px;
    bottom: 10px;
  }

  @media only screen and (min-width: 590px) and (max-width: 767px) {
    height: 60%;
    right: -280px;
  }

  @media only screen and (max-width: 300px) {
    display: none;
  }
`;

function ExtraDetailedInfo() {
  return (
    <Screen
      subsidiary="extra"
      backgroundColour={config.primaryColour}
      footerText="so you can get from A to where you need to be..."
    >
      <ExtraVan
        src={"/images/services/extra/van.png"}
        alt="BJS Extra branded van"
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </Screen>
  );
}

export default ExtraDetailedInfo;
