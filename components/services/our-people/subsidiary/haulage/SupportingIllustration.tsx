import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Image from "next/image";

import man from "public/images/services/haulage/our-people/man-holding-fastener.png";

function SupportingIllustration(props: Styleable) {
  return (
    <Container className={props.className}>
      <MiniContainer>
        <Image src={man} layout="fill" />
      </MiniContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  height: 100%;
  right: 150px;
  top: 0px;
  overflow: hidden;

  @media only screen and (max-width: 1550px) {
    right: 0px;
  }

  @media only screen and (max-width: 994px) {
    display: none;
  }

`;

const MiniContainer = styled.div`
  height: 1330px;
  width: 850px;
  top: -400px;
  position: relative;
`;
export default SupportingIllustration;
