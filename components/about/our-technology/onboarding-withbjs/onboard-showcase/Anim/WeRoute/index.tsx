import styled from "styled-components";
import Image from "next/image";
import Route from "public/images/about/our-technology/Graphics/Route.jpg";
import RouteTracking from "public/images/about/our-technology/Graphics/Route_TrackerPhone.png";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { down, up } from "styled-breakpoints";
import Lottie from "react-lottie-player";
function WeRoute() {
  const [animationData, setAnimationData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets1.lottiefiles.com/private_files/lf30_odksdxsq.json"
    );
    const json = await result.json();
    setAnimationData(json);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);

  return (
    <Container>
      <Anim
        loop
        animationData={animationData}
        play
      />
      <ImageContainer>
        <Image src={Route} objectFit="contain" />
      </ImageContainer>
      <RouteTrackImg src={RouteTracking.src} />
    </Container>
  );
}
const Anim = styled(Lottie)`
  position: absolute;
  width: 86px;
  height: 86px;
  left: 172px;
  bottom: 98px;
  z-index: 1;
  @media only screen and (max-width: 1600px) and (min-width: 1400px) {
    left: 123px;
    bottom: 76px;
  }
  @media only screen and (max-width: 1900px) and (min-width: 1600px) {
    left: 123px;
    bottom: 150px;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1200px) {
    width: 60px;
    height: 60px;
    left: 81px;
    bottom: 56px;
  }
  @media only screen and (max-width: 1200px) {
    bottom: 95px;
  }
  ${down("md")} {
    bottom: 142px;
    left: 128px;
  }
  ${down("sm")} {
    width: 42px;
    height: 42px;
    top: 40px;
    bottom: unset;
    left: 52px;
  }
`;
const RouteTrackImg = styled.img`
  position: absolute;
  right: 50px;
  bottom: 0px;
  @media only screen and (max-width: 1600px) and (min-width: 1400px) {
    height: 250px;
    top: 10px;
  }
  @media only screen and (max-width: 1900px) and (min-width: 1600px) {
    height: 250px;
    top: 10px;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1200px) {
    height: 175px;
    top: 10px;
  }
  ${down("md")} {
    right: 50px;
    bottom: 0px;
    height: 270px;
    top: 0px;
  }
  ${down("sm")} {
    position: absolute;
    right: 15px;
    bottom: 0px;
    height: 118px;
    top: 0px;
  }
`;
const ImageContainer = styled.div`
  height: 331px;
  width: 880px;
  @media only screen and (max-width: 1600px) and (min-width: 1400px) {
    width: 680px;
    height: 260px;
  }
  @media only screen and (max-width: 1900px) and (min-width: 1600px) {
    width: 680px;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1200px) {
    width: 455px;
    height: 179px;
  }
  ${down("md")} {
    height: 331px;
    width: 700px;
  }
  ${down("sm")} {
    width: 300px;
    height: 128px;
  }
`;
const Container = styled.div`
  // display: flex;
  position: relative;
  // margin: 0 auto;
  ${down("sm")} {
    margin 0 auto;
  }
`;
export default WeRoute;
