import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Image from "next/image";

type Props = {
  image: StaticImageData; 
} & Styleable
function VanSplash(props: Props) {
  return <Container className={props.className}>
      <Image src={props.image} layout="fill"/>
  </Container>;
}

const Container = styled.div`
  height: 204px;
  position: relative;
`;

export default VanSplash;
