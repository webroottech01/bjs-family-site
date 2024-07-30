import styled from "styled-components";

import { up, down, only } from "styled-breakpoints";

import Image from "next/image";
import useIsMobile from "components/util/useIsMobile";

function HandyMenImage() {
  const isMobile = useIsMobile();
  return (
    <ImageContainer>
      <TestImage src="/images/landing/handy-men.png" layout="fill" />
    </ImageContainer>
  );
}

const TestImage = styled(Image)``;

const ImageContainer = styled.div`
  position: absolute;
  z-index: 4;

  ${up("lg")} {
    height: 1400px;
    width: 1150px;
    left: 30px;
  }
  ${down("md")} {
    height: 800px;
    width: 690px;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -40%);
  }

  ${down("sm")} {
    height: 540px;
    width: 445px;
    transform: translate(-50%, 0%);
    top: auto;
    bottom: -140px;
  }

  ${down("xs")} {
    height: 440px;
    width: 345px;
  }
`;
export default HandyMenImage;
