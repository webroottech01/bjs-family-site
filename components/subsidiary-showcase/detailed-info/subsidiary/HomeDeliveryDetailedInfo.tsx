import { colours, Button } from "@bjsdistribution/components";
import styled from "styled-components";

import DetailedInfo, {
  Text,
} from "components/subsidiary-showcase/detailed-info/blueprint/DetailedInfo";
import { up, down, only } from "styled-breakpoints";
import Image from "next/image";
const SofaContainer = styled.div`
  position: absolute;
  overflow: hidden;
  z-index: 50;
  bottom: -20px;

  height: 900px;
  width: 900px;
  right: 200px;

  @media only screen and (min-width: 1920px) {
    height: 1015px;
    width: 1015px;
    right: 240px;
  }

  @media only screen and (max-width: 1650px) {
    right: 5%;
  }

  @media only screen and (max-width: 1500px) {
    right: -120px;
  }

  @media only screen and (max-width: 1355px) {
    right: -250px;
  }

  @media only screen and (max-width: 1200px) {
    right: -100px;
    height: 700px;
    width: 760px;
  }

  ${down("md")} {
    height: 504px;
    width: 527px;

    right: 0px;
    bottom: 0px;
  }
  ${down("sm")} {
    z-index: 3;
    height: 326px;
    width: 342px;
    right: -48px;
    bottom: 15px;
  }

  /*@media only screen and (max-width: 1130px) {
    height: 600px;
  }*/

  @media only screen and (max-width: 415px) {
    height: 315px;
    width: 335px;
    right: -89px;
  }
  @media only screen and (max-width: 385px) {
    height: 240px;
    width: 255px;
    right: -47px;
  }
  @media only screen and (max-width: 370px) {
    right: -75px;
  }

  @media only screen and (max-width: 345px) {
    display: none;
  }

  /*
  ${down("xs")} {
    height: 255px;
    right: -65px;
  }*/
`;

const SofaMiniContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  ${down("md")} {
    height: 90%;
    width: 90%;
  }
`;

const Screen = styled(DetailedInfo)`
  overflow: hidden;

  ${only("md")} {
    padding-bottom: 140px;
  }

  color: ${colours.black};

  ${up("lg")} {
    ${Text} {
      max-width: 72ch;
    }
  }

  ${down("sm")} {
    ${Button.PlainButton} {
      z-index: 5;
    }
  }
`;

function HomeDeliveryDetailedInfo() {
  return (
    <Screen
      subsidiary="home delivery"
      footerText="and much more.."
      backgroundColour="#e3e0de"
      description="Award winning <a href='/services/home-delivery' style='color:#3A3630'>two-man home delivery</a> teams, trained in excellence and trusted by leading brands. With an enviable track record of more than a decade the BJS family offer a range of flexible services to keep you and your customers happy."
    >
      <OptimisedSofaImage />
    </Screen>
  );
}

function OptimisedSofaImage() {
  return (
    <SofaContainer>
      <SofaMiniContainer>
        <Image
          src={"/images/showcase/menholdingsofa.png"}
          layout="fill"
          priority
          alt="2 men carrying a sofa"
        />
      </SofaMiniContainer>
    </SofaContainer>
  );
}

export default HomeDeliveryDetailedInfo;
