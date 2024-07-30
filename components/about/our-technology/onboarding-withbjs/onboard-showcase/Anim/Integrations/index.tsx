import styled from "styled-components";
import Image from "next/image";
import DataRow from "public/images/about/our-technology/Graphics/Integrations_DataRow.svg";
import Intigration from "public/images/about/our-technology/Graphics/Integrations_Dispatch.png";
import Product from "public/images/about/our-technology/Graphics/graphics_Technology_Integrations_Products.png";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lottie from "react-lottie-player";
import { down } from "styled-breakpoints";
function Integrations() {
  const [animationData, setAnimationData] = useState();

  const fetchAndSet = async () => {
    const result = await fetch(
      "https://assets10.lottiefiles.com/private_files/lf30_anuifbwj.json"
    );
    const json = await result.json();
    setAnimationData(json);
  };

  useEffect(() => {
    fetchAndSet();
  }, []);

  return (
    <Container>
      <Image src={DataRow} />
      <MainContent>
        <LeftImg>
            <Image src={Intigration} />
        </LeftImg>
        <Anim loop animationData={animationData} play />
        <RightImg>
            <Image src={Product} />
        </RightImg>
      </MainContent>
    </Container>
  );
}
const Container = styled.div`
  // display: flex;
  position: relative;
  min-height: 340px;
  ${down("sm")} {
    min-height: 150px;
  }
`;
const Anim = styled(Lottie)`
  flex: 0.9;
  z-index: 1;
  margin-top: 15px;
  padding-left: 45px;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  align-items: center;
  position: absolute;
  top: 37px;
  left: 13px;
`;
const LeftImg = styled.div`
    position: relative;
    flex: 1;
`;
const RightImg = styled.div`
    position: relative;
    margin-left: 50px;
    flex: 1;
`;

export default Integrations;
