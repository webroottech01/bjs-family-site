import styled from "styled-components";
import Image from "next/image";
import CustomerImg from "public/images/about/our-technology/Graphics/CustomerTracking_Map.jpg";
import Truck from "public/images/about/our-technology/Graphics/graphics_Technology_TwoManVan.png";
import Tracking from "public/images/about/our-technology/Graphics/CustomerTracking_Phone.png";
import { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { down } from "styled-breakpoints";
function Customer() {
  const [animationData, setAnimationData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets7.lottiefiles.com/packages/lf20_4gdvwhlh.json"
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
        <Anim loop animationData={animationData} play />
        <TruckImg>
          <Image src={Truck} layout="fill" />
        </TruckImg>
      </AnimContainer>
      <MapImg>
        <Image src={CustomerImg} layout="responsive" />
      </MapImg>
      <RouteTrackImg src={Tracking.src} />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  ${down("md")}  {
    margin: 0 auto;
  }
  ${down("sm")} {
    margin: 0 auto;
  }
`;
const Anim = styled(Lottie)`
  width: 177px;
  position: absolute;
  top: -51px;
  z-index: 0;
`;
const RouteTrackImg = styled.img`
  position: absolute;
  right: 50px;
  bottom: -25px;
  @media only screen and (max-width: 1900px) and (min-width: 1600px) {
    height: 250px;
    top: 25px;
    bottom: unset;
  }
  @media only screen and (max-width: 1600px) and (min-width: 1400px) {
    height: 250px;
    top: 20px;
    bottom: unset;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1200px) {
    height: 175px;
    top: 10px;
  }
  ${down("md")} {
    top: 10px;
    height: 265px;
  }
  ${down("sm")} {
    position: absolute;
    right: 15px;
    bottom: 0px;
    height: 120px;
    top: 0px;
  }
`;
const TruckImg = styled.div`
  position: relative;
  width: 280px;
  height: 256px;
`;
const AnimContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  left: 100px;
  align-items: center;
  bottom: -40px;
  transform: scale(0.9);
  @media only screen and (max-width: 1900px) and (min-width: 1600px) {
    bottom: -60px;
    transform: scale(0.7);
    left: 63px;
  }
  @media only screen and (max-width: 1600px) and (min-width: 1400px) {
    bottom: unset;
    transform: scale(0.7);
    top: 60px;
    left: 65px;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1200px) {
    bottom: unset;
    left: 4px;
    transform: scale(0.5);
  }
  @media only screen and (max-width: 1200px) {
    bottom: -50px;
    transform: scale(0.8);
    left: 120px;
  }
  ${down("sm")} {
    transform: scale(0.4);
    bottom: -80px;
    left: -35px;
  }
`;
const MapImg = styled.div`
  position: relative;
  width: 880px;
  @media only screen and (max-width: 1600px) and (min-width: 1400px) {
    width: 680px;
  }
  @media only screen and (max-width: 1900px) and (min-width: 1600px) {
    width: 680px;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1200px) {
    width: 455px;
  }
  ${down("md")} {
    width: 700px;
  }
  ${down("sm")} {
    height: 130px;
    width: 325px;
  }
`;
export default Customer;
