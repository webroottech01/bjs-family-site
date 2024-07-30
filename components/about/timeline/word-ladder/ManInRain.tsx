import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import Image from "next/image";
import manInRainTablet from "public/images/about/man-in-rain-mid.png";
import useIsTabletOrSmaller from 'components/util/useIsTabletOrSmaller';
import useWindowDimensions from 'components/util/useWindowDimensions';

function ManInRain(props: Styleable) {
  const isTabletOrSmaller = useIsTabletOrSmaller();
  const {width} = useWindowDimensions();

  return (
    <Root>
      <Container className={props.className}>
        {width <= 1400 && <LargerImage/>}

      </Container>
    </Root>
  );
}

function LargerImage() {
  return <Image src={manInRainTablet} layout="fill" />;
}

const Root = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 6;

  ${down("md")} {
    right: 0;
    width: auto;
  }
`;
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  width: 570px;
  top: 35px;

  ${down("md")} {
    width: 655px;
    height: 1050px;
    right: -80px;
    top: -40px;
  }

  ${down("sm")} {
    width: 515px;
    height: 810px;
    right: -80px;
    top: 110px;
  }

  @media only screen and (max-width: 450px) {
    top: 200px;
    height: 700px;
    width: 440px;
    right: -80px;
  }

  @media only screen and (max-width: 355px) {
    height: 640px;
    width: 390px;
  }
`;

export default ManInRain;
