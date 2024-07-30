import styled from "styled-components";
import Image from "next/image";
import WeDeliverImg from "public/images/about/our-technology/Graphics/Deliver.svg";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lottie from "react-lottie-player";
import { down } from "styled-breakpoints";
function WeDeliver() {
  const [animationData, setAnimationData] = useState();
  const [movingManData, setMovingManData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets6.lottiefiles.com/packages/lf20_xvvxl51g.json"
    );
    const json = await result.json();
    setAnimationData(json);

    const movingResult = await fetch(
      "https://assets8.lottiefiles.com/private_files/lf30_badymsvh.json"
    );
    const mJson = await movingResult.json();
    setMovingManData(mJson);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);

  return (
    <Container>
      <LottieAnim loop animationData={animationData} play />
      <ImageContainer>
        <Image src={WeDeliverImg} layout="responsive" />
        <LottieAnimMan loop animationData={movingManData} play />
      </ImageContainer>
    </Container>
  );
}
const LottieAnim = styled(Lottie)`
  position: absolute;
  width: 317px;
  height: 317px;
  left: -35px;
  top: -18px;
  z-index: 0;
  @media only screen and (max-width: 1200px) {
    left: -85px;
    top: -10px;
  }
  ${down("sm")} {
    width: 240px;
    height: 240px;
    left: -83px;
    top: -30px;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  // height: 350px;
  width: 555px;
  @media only screen and (max-width: 1430px) and (min-width: 1200px) {
    width: 400px;
  }
  ${down("sm")} {
    width: 270px;
  }
`
const LottieAnimMan = styled(Lottie)`
    position: absolute;
    width: 158px;
    height: 77px;
    left: 323px;
    bottom: 11px;
    z-index: 1;
    @media only screen and (max-width: 1610px) and (min-width: 1430px) {
      bottom: 20px;
    }
    @media only screen and (max-width: 1430px) and (min-width: 1200px) {
      height: 60px;
      left: 215px;
      bottom: 9px;
    }
    ${down("sm")} {
      width: 102px;
      height: 40px;
      left: unset;
      right: 20px;
      bottom: 5px;
    }
`;
const Container = styled.div`
  // display: flex;
  position: relative;
  padding-left: 50px;
  @media only screen and (max-width: 1200px) {
    align-self: center;
    padding-left: unset;
  }
  ${down("md")} {
    margin: 0 auto;
  }
  ${down("sm")} {
    margin: 0 auto;
  }
`;
export default WeDeliver;
