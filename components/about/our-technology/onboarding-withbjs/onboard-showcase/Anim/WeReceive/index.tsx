import styled from "styled-components";
import Image from "next/image";
import WeRec from "public/images/about/our-technology/Graphics/Technology_Receive.svg";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lottie from "react-lottie-player";
import { down } from "styled-breakpoints";
function WeReceive() {
  const [animationData, setAnimationData] = useState();
  const [lightsAnimData, setLightsAnimData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets1.lottiefiles.com/packages/lf20_tgqspcbx.json"
    );
    const resultLight = await fetch(
      "https://assets7.lottiefiles.com/packages/lf20_4gdvwhlh.json"
    );
    const json = await result.json();
    setAnimationData(json);
    const jsonLight = await resultLight.json();
    setLightsAnimData(jsonLight);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);
  return (
    <Container>
      <LottieAnim loop animationData={animationData} play />
      <LightContainer>
        <LightAnim loop animationData={lightsAnimData} play />
        <LightAnim loop animationData={lightsAnimData} play />
        <LightAnim loop animationData={lightsAnimData} play />
      </LightContainer>
      <ImageContainer>
        <Image src={WeRec} layout="fill" objectPosition="" />
      </ImageContainer>
    </Container>
  );
}
const ImageContainer = styled.div`
  position: relative;
  height: 320px;
  width: 840px;
  object-position: left bottom;
  @media only screen and (max-width: 1599px) and (min-width: 1460px) {
    width: 700px;
  }
  @media only screen and (max-width: 1459px) and (min-width: 1200px) {
    width: 500px;
  }
  @media only screen and (max-width: 1200px) {
    width: 700px;
  }
  ${down("sm")} {
    height: 129px;
    width: 320px;
  }
`;
const LightContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 487px;
  top: 76px;
  width: 300px;
  justify-content: space-between;
  @media only screen and (max-width: 1599px) and (min-width: 1460px) {
    left: 412px;
    top: 94px;
    width: 244px;
  }
  @media only screen and (max-width: 1459px) and (min-width: 1200px) {
    left: 293px;
    top: 111px;
    width: 178px;
  }
  ${down("md")} {
    left: 406px;
    top: 90px;
    width: 256px;
  }
  ${down("sm")} {
    left: 184px;
    top: 29px;
    width: 122px;
  }
`;
const LightAnim = styled(Lottie)`
  width: 70px;
  height: 70px;
  @media only screen and (max-width: 1599px) and (min-width: 1460px) {
    width: 50px;
    height: 50px;
  }
  @media only screen and (max-width: 1459px) and (min-width: 1200px) {
    width: 40px;
    height: 40px;
  }
  ${down("md")} {
    width: 60px;
    height: 60px;
  }
  ${down("sm")} {
    width: 35px;
    height: 35px;
  }
`;
const LottieAnim = styled(Lottie)`
  position: absolute;
  width: 86px;
  height: 86px;
  left: 547px;
  top: 25%;
  z-index: 1;
  @media only screen and (max-width: 1599px) and (min-width: 1460px) {
    left: 450px;
  }
  @media only screen and (max-width: 1459px) and (min-width: 1200px) {
    left: 321px;
    width: 60px;
    height: 60px;
    top: 30%;
  }
  ${down("md")} {
    left: 450px;
  }
  ${down("sm")} {
    left: 205px;
    width: 40px;
    height: 40px;
  }
`;
const Container = styled.div`
  // display: flex;
  position: relative;
  ${down("sm")} {
    margin: 0 auto;
  }
`;
export default WeReceive;
