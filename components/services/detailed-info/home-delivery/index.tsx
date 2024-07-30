import styled from "styled-components";
import { up, only, down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

import {
  Container as Root,
  Text,
  Boxes,
} from "components/services/detailed-info/blueprint";
import {
  Logo,
  Title as HeaderTitle,
} from "components/services/detailed-info/blueprint/DetailedHeader";

import Box from "./box";
import { faCalendarDay, faTruck } from "@fortawesome/pro-solid-svg-icons";
import SubsidiaryHeader from "../blueprint/SubsidiaryHeader";
import MenHoldingSofa from "./MenHoldingSofa";

import config from "subsidiary-config/home-delivery";

function HomeDeliveryDetailedInfo(props: Styleable) {
  return (
    <Container className={props.className} subsidiary="home delivery">
      <SubsidiaryHeader subsidiary="home delivery" />
      <Text>{config.description[0]}</Text>
      <Boxes>
        <Box
          title="next day delivery"
          description={`Ensures the same high quality customer service standards, but with a really speedy turn around.`}
          icon={faTruck}
        />
        <Box
          title="choice-of-day delivery"
          description={`Allows maximum flexibility for your customers, helping them to manage their busy working lives much more easily.`}
          icon={faCalendarDay}
        />
      </Boxes>
      <MenHoldingSofa />
    </Container>
  );
}

const Container = styled(Root)`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box !important;

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      overflow: hidden;
    }
  }
  //overflow: hidden;
  //background: unset;
  ${down("md")} {
    padding: 50px 40px 510px 40px !important;
  }
  ${Logo} {
    width: 151px;
    height: 104px !important;

    @media only screen and (max-width: 375px) {
      height: 55px !important;
      width: 80px;
    }
  }

  ${up("lg")} {
    height: 706px !important;
    ${Text} {
      max-width: 120ch;
    }
  }

  ${up("md")} {
    height: 887px;
  }
  @media only screen and (max-width: 1850px) {    
    ${HeaderTitle} {      
      width: 45ch;
    }
  }
  @media only screen and (max-width: 1750px) {    
    ${HeaderTitle} {      
      width: 35ch;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 100px 60px;

    ${Text} {
      max-width: 88ch;
    }
  }
  @media only screen and (max-width: 1500px) {    
    ${HeaderTitle} {      
      width: 20ch;
    }
  }

  @media only screen and (max-width: 1200px) {
    ${HeaderTitle} {
      white-space: initial;
      line-height: 1em;
      width: 15ch;
    }

    ${Text} {
      max-width: 60ch;
    }
  }
  ${only("md")} {
    padding-bottom: 500px;
    ${HeaderTitle} {
      // white-space: nowrap;
      width:100%;
    }
    ${Text} {
      font-size: 16px;
      width: 100%;
      max-width: 100%;
    }
  }

  ${down("sm")} {
    padding: 50px 20px;
    padding-left: 20px !important;
    padding-right: 20px !important;
    padding-bottom: 50px !important;
    ${HeaderTitle} {
      width: auto;
    }
  }
`;

export default styled(HomeDeliveryDetailedInfo)``;
