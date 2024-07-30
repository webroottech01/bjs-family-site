import styled from "styled-components";
import Image from "next/image";
import WeBok from "public/images/about/our-technology/Graphics/Book_Emails@2x.jpg";
import MobileImg from "public/images/about/our-technology/Graphics/TrackerPhone.png";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lottie from "react-lottie-player";
import { down } from "styled-breakpoints";
function WeBook() {
  const [animationData, setAnimationData] = useState();
  const [animationCallAgent, setAnimationCallAgent] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets6.lottiefiles.com/private_files/lf30_odpgrfgn.json"
    );
    const json = await result.json();
    setAnimationData(json);
    const CallAgent = await fetch(
      "https://assets10.lottiefiles.com/private_files/lf30_cb8hflo5.json"
    );
    const jsonC = await CallAgent.json();
    setAnimationCallAgent(jsonC);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);

  return (
    <Container>
      <LottieAnimMobile loop animationData={animationData} play />
      <BG>
        <Image src={WeBok} layout="fill" />
      </BG>
      <AnimationMan loop animationData={animationCallAgent} play />
      <Mobile>
        <Image src={MobileImg} layout="fill" />
      </Mobile>
    </Container>
  );
}
const BG = styled.div`
  height: 331px;
  width: 514px;
  position: relative;
  margin-left: 172px;
  @media only screen and (max-width: 1650px) and (min-width: 1420px) {
    width: 400px;
    height: 258px;
    margin-left: 70px;
  }
  @media only screen and (max-width: 1420px) and (min-width: 1200px) {
    width: 350px;
    height: 225px;
    margin-left: 55px;
  }
  ${down("md")} {
    height: 331px;
    width: 514px;
    position: relative;
    margin-left: 85px;
  }
  ${down("sm")} {
    margin-left: 60px;
    height: 162px;
    width: 189px;
  }
`;
const Mobile = styled.div`
  position: relative;
  height: 331px;
  width: 120px;
  @media only screen and (max-width: 1650px) and (min-width: 1420px) {
    width: 94px;
    height: 258px;
  }
  @media only screen and (max-width: 1420px) and (min-width: 1200px) {
    width: 82px;
    height: 225px;
  }
  ${down("sm")} {
    height: 160px;
    width: 58px;
  }
`;
const LottieAnimMobile = styled(Lottie)`
  position: absolute;
  width: 360px;
  height: 360px;
  z-index: 1;
  left: -75px;
  @media only screen and (max-width: 1650px) and (min-width: 1420px) {
    width: 300px;
    top: -40px;
  }
  @media only screen and (max-width: 1420px) and (min-width: 1200px) {
    width: 260px;
    top: unset;
    bottom: unset;
  }
  @media only screen and (max-width: 1200px) {
    // width: 260px;
    // top:30px;
  }
  ${down("sm")} {
    height: 178px;
    left: -35px;
    width: auto;
  }
`;
const AnimationMan = styled(LottieAnimMobile)`
  width: 583px;
  height: 328px;
  left: 410px;
  bottom: -70px;
  top: unset;
  @media only screen and (max-width: 1650px) and (min-width: 1400px) {
    width: 400px;
    bottom: unset;
    left: 310px;
    top: 28px;
  }
  @media only screen and (max-width: 1420px) and (min-width: 1200px) {
    width: 375px;
    bottom: unset;
    left: 195px;
    top: 0px;
  }
  @media only screen and (max-width: 1200px) {
    width: 450px;
    bottom: -60px;
    left: 340px;
  }
  ${down("md")} {
    bottom: -90px;
  }
  ${down("sm")} {
    width: 267px;
    height: 161px;
    right: -30px;
    left: unset;
    bottom: -36px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  gap: 121px;
  @media only screen and (max-width: 1420px) and (min-width: 1200px) {
    gap: 40px;
  }
  ${down("md")} {
    gap: 20px;
    margin: 0 auto;
  }
  ${down("sm")} {
    gap: 30px;
    justify-content: flex-end;
    margin: unset;
    margin: 0 auto;
  }
`;
export default WeBook;
