import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import Image from "next/image";

interface Props {
  title: string;
  image?: StaticImageData;
}

function Entry(props: Props & Styleable) {
  return (
    <Container className={props.className}>
      {props.image && (
        <ImageContainer>
          <Image src={props.image} layout="fixed" width={100} height={100} />
        </ImageContainer>
      )}
      {!props.image && <Circle />}
      <Title>{props.title}</Title>
    </Container>
  );
}

const ImageContainer = styled.div`
  min-height: 100px;
  min-width: 100px;
  max-height: 100px;
  max-width: 100px;
  position: relative;
`;

const Circle = styled.div`
  height: 100px;
  min-width: 100px;
  border-radius: 50%;
  border: 1px solid black;
`;

const Title = styled.span`
  font-size: 15px;
  font-family: "Eveleth";
`;

const Container = styled.div`
  display: flex;
  align-items: center; > :not(:last-child) {
    margin-right: 25px;
  }
`;

export default styled(Entry)``;
