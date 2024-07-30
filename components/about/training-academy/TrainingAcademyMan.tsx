import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import Image from "next/image";
import man from "public/images/about/training-academy/man-in-back.png";

function TrainingAcademyMan(props: Styleable) {
  return (
    <Container className={props.className}>
      <Image src={man} layout="fill" />
    </Container>
  );
}

const Container = styled.div`
`;

export default TrainingAcademyMan;
