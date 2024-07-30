import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import Logo from "./Logo";

import twilio from "public/images/about/our-technology/twilio.png";
import whatThreeWords from "public/images/about/our-technology/what-3-words.png";
import lightFoot from "public/images/about/our-technology/lightfoot.png";

import webfleet from "public/images/about/our-technology/web-fleet.png";

import iCanProveIT from "public/images/about/our-technology/i-can-prove-it.png";

function PartnerLogos(props: Styleable) {
  return (
    <Container className={props.className}>
      <LogoImage src={twilio.src} />
      <LogoImage src={whatThreeWords.src} />
      <LogoImage src={lightFoot.src} />
      <LogoImage src={webfleet.src} />
      <LogoImage src={iCanProveIT.src} />
    </Container>
  );
}

const LogoImage = styled.img`
  mix-blend-mode: darken;
  height: auto;
  max-width: 180px;
  max-height: 67px;
  ${down("sm")} {
    max-width: 75px;
    max-height: 40px;
  }
`;
const Container = styled.div`
  // display: grid;
  align-items: center;
  overflow: scroll;
  grid-template-columns: repeat(5, auto);
  height: 80px;
  overflow: hidden;
  margin: 0 auto;
  ::-webkit-scrollbar {
    display: none;
  }
  > :not(:last-child) {
    margin-right: 75px;
  }

  ${down("md")} {
    > :not(:last-child) {
      margin-right: 25px;
    }
    grid-template-columns: repeat(3,auto);
    height: 78px;
    overflow: hidden;
    padding: 0px 10px;
    width: auto;
    text-align: center;
    gap: 70px;
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
  }
  ${down("sm")} {
    height: 40px;
    overflow: hidden;
    width: auto;
    text-align: center;
    padding: unset
  }
`;

export default PartnerLogos;
