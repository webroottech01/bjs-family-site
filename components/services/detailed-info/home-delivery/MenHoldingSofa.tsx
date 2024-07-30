import styled from "styled-components";
import { down } from "styled-breakpoints";

import Image from "next/image";

function MenHoldingSofa() {
  return (
    <ImageContainer>
      <Image src="/images/showcase/menholdingsofa.png" layout="fill" priority />
    </ImageContainer>
  );
}

const ImageContainer = styled.div`
  position: absolute;
  bottom: -50px;
  z-index: 5;
  mix-blend-mode: darken;
  right: -90px;
  width: 700px;

  ${down("md")} {
    bottom: 0px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }

  ${down("sm")} {
    display: none;
  }

  height:730px;
  @media only screen and (max-width: 1865px) {
   // height: 600px;
  }

  @media only screen and (max-width: 1600px) {
    height: 738px;
    width: 738px;
    right: -90px;
  }

  @media only screen and (max-width: 1200px) {
    z-index: 0;
    bottom: 40px;
  }

  ${down("md")} {
    height: 420px;
    width: 479px;
    bottom: 0px;
  }
`;

export default MenHoldingSofa;
