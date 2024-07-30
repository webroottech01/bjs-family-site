import styled from "styled-components";
import Image from "next/image";
import WeStoreImg from "public/images/about/our-technology/Graphics/StoreMW.svg";
import WeStoreMan from "public/images/about/our-technology/Graphics/StoreWorker.svg";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lottie from "react-lottie-player";
import { down } from "styled-breakpoints";
function WeStore() {
  const [animationData, setAnimationData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets4.lottiefiles.com/packages/lf20_2yjq8a5m.json"
    );
    const json = await result.json();
    setAnimationData(json);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);

  return (
    <Container>
      <AnimContainer>
        <Image src={WeStoreMan} />
        <LottieAnim loop animationData={animationData} play />
      </AnimContainer>
      <ImageContainer>
        <Image src={WeStoreImg} layout="responsive" />
      </ImageContainer>
    </Container>
  );
}
const ImageContainer = styled.div`
  width: 500px;
  @media only screen and (max-width: 1400px) and (min-width: 1200px) {
    width: 400px;
  }
  ${down("sm")} {
    width: 270px;
  }
`;
const LottieAnim = styled(Lottie)`
    position: absolute;
    width: 118px;
    height: 118px;
    z-index: 0;
    top: -64px;
    left: 54px;
`;
const AnimContainer = styled.div`
  position: absolute;
  left: 3px;
  z-index: 1;
  bottom: 8px;
  @media only screen and (max-width: 1400px) and (min-width: 1200px) {
    left: 0px;
    bottom: -4px;
    transform: scale(0.7);
  }
  ${down("md")} {
    left: 3px;
    bottom: 8px;
  }
  ${down("sm")} {
    transform: scale(0.5);
    bottom: -31px;
    left: -13px;
  }
`;
const Container = styled.div`
  position: relative;
  @media only screen and (max-width: 1200px) {
    align-self: center;
  }
  ${down("md")} {
    margin: 0 auto;
  }
  ${down("sm")} {
    margin: 0 auto;
  }
`;
export default WeStore;
