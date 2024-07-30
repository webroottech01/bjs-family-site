import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Image from "next/image";
import man from "public/images/about/charity-and-community/training.png";

function SupportingImage(props: Styleable) {
  return (
    <Container className={props.className}>
      <Image src={man} />
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: -10px;
  left: 80px;
  z-index: 5;
`;
export default SupportingImage;
