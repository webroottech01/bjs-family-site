import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import Image from "next/image";

interface Props extends Styleable {
  text: string;
  image?: StaticImageData;
}

function Box(props: Props) {
  return (
    <Container className={props.className}>
      {props.image && (
        <ImageContainer>
          <Image src={props.image} layout="fill" />
        </ImageContainer>
      )}
      <Title>{props.text}</Title>
    </Container>
  );
}

const ImageContainer = styled.div`
  width: 230px;
  height: 80px;
  position: relative;
`;

const Container = styled.div`
  padding: 12px 25px;
  box-shadow: 0px 3px 10px #0000000d;
  border: 2px solid #333333;
  background: #0d0d0d;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;

  align-items: center;
  justify-content: center;
  min-height: 150px;
  max-height: 150px;
`;

const Title = styled.h2`
  font-size: 16px;
  font-family: "Eveleth";
  color: white;
`;

export { Title, ImageContainer };
export default styled(Box)``;
