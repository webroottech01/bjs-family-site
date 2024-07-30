import styled from "styled-components";
import { down } from "styled-breakpoints";

import vanImage from "public/images/landing/track-your-order/van.png";
import icon from "public/images/landing/track-your-order/icon.svg";

import Image from "next/image";

import { Styleable } from '@bjsdistribution/components';
import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
const height = 38.77;
const width = 70.83;

const Lottie = dynamic(() => import("react-lottie-player"));

function OrderIllustration({className} : Styleable) {
  const [animationData, setAnimationData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets2.lottiefiles.com/packages/lf20_0x2ezbaj.json"
    );
    const json = await result.json();
    setAnimationData(json);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);

  return (
    <Container className={className}>
      <IconContainer>
        <Lottie
          loop
          animationData={animationData}
          play
          style={{ position: "absolute", top: "-6px", left: "-3px" }}
        />
        <Icon src={icon.src} />
      </IconContainer>
      <VanContainer>
        <VanImage
          src={vanImage}
          width={width}
          height={height}
          layout="fixed"
          placeholder="blur"
        />
      </VanContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  min-width: 70px;
  max-height: 39px;
  max-width: 70px;
  position: relative;

`;

const IconContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 0;
  left: -10px;
  top: -5px;
`;

const Icon = styled.img``;

const VanContainer = styled.div`position:absolute;P`;

const VanImage = styled(Image)`
  position: absolute;
`;

export default styled(OrderIllustration)``;
