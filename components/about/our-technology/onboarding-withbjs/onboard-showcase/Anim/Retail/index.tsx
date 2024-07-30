import styled from "styled-components";
import Image from "next/image";
import RetailImg from "public/images/about/our-technology/Graphics/RetailerTracking_Feature.svg";
import Parcell from "public/images/about/our-technology/Graphics/logos_ParcelPerform.png";
import Airship from "public/images/about/our-technology/Graphics/logos_Aftership.svg";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lottie from "react-lottie-player";
import { down } from "styled-breakpoints";
function Retail() {
  const [animationData, setAnimationData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets6.lottiefiles.com/private_files/lf30_wv1omwvf.json"
    );
    const json = await result.json();
    setAnimationData(json);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);
  return (
    <Container>
      <LeftImg>
        <Image src={RetailImg} layout="fill" objectPosition="left bottom" />
      </LeftImg>
      <LottieAnimMobile loop animationData={animationData} play />
      <LogoContainer>
        <LogoParcell>
          <Image src={Parcell} layout="fill" />
        </LogoParcell>
        <LogoImage>
          <Image src={Airship} layout="fill" />
        </LogoImage>
      </LogoContainer>
    </Container>
  );
}
const LogoImage = styled.div`
  position: relative;
  height: 64px;
  width: 246px;
  @media only screen and (max-width: 1450px) and (min-width: 1200px) {
    height: 26px;
    width: 160px;
  }
  @media only screen and (max-width: 1550px) and (min-width: 1450px) {
    height: 32px;
    width: 198px;
  }
  ${down("md")} {
    height: 26px;
    width: 160px;
  }
  ${down("sm")} {
    height: 18px;
    width: 111px;
  }
`
const LogoParcell = styled.div`
  position: relative;
  height: 43px;
  width: 270px;
  @media only screen and (max-width: 1450px) and (min-width: 1200px) {
    height: 26px;
    width: 160px;
  }
  @media only screen and (max-width: 1550px) and (min-width: 1450px) {
    height: 32px;
    width: 198px;
  }
  ${down("md")} {
    height: 26px;
    width: 160px;
  }
  ${down("sm")} {
    height: 18px;
    width: 111px;
  }
`;
const LottieAnimMobile = styled(Lottie)`
  width: 414px;
  z-index: 1;
  flex: 1;
  @media only screen and (max-width: 1450px) and (min-width: 1260px) {
    width: 300px;
  }
  @media only screen and (max-width: 1550px) and (min-width: 1450px) {
    width: 300px;
  }
  @media only screen and (max-width: 1260px) and (min-width: 1200px) {
    width: 200px;
  }
  @media only screen and (min-width: 1900px) {
    width: 414px;
    z-index: 1;
    position: absolute;
    left: calc(33% - 40px);
    top: unset;
    bottom: -80px;
  }
  ${down("md")} {
    height: 200px;
    width: 300px;
  }
  ${down("sm")} {
    height: 120px;
  }
`;
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    flex: 1;
    @media only screen and (max-width: 1450px) and (min-width: 1200px) {
      height: 200px;
      width: 200px;
    }
    @media only screen and (max-width: 1550px) and (min-width: 1450px) {
      height: 250px;
      width: 250px;
    }
    @media only screen and (min-width: 1900px) {
      flex: unset;
    }
    ${down("md")} {
      height: 200px;
      width: 170px;
      flex: unset;
    }
    ${down("sm")} {
      height: 115px;
      width: unset;
    }
`;
const LeftImg = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  @media only screen and (max-width: 1450px) and (min-width: 1200px) {
    height: 200px;
    width: 200px;
  }
  @media only screen and (max-width: 1550px) and (min-width: 1450px) {
    height: 250px;
    width: 250px;
  }
  ${down("md")} {
    height: 200px;
    width: 200px;
  }
  ${down("sm")} {
    height: 90px;
    width: 90px;
  }
`;
const Container = styled.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  flex:1;
  justify-content: space-between;
  padding-right: 40px;
  width: 100%;
  max-width: 1300px;
  ${down("md")} {
    padding-right: unset;
  }
  ${down("sm")} {
    align-items: center;
    padding-right: unset;
  }
`;
export default Retail;
