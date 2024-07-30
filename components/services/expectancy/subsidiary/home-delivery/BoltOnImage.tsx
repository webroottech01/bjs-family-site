import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
};

/*
const Image = styled.div`
  min-height: 100px;
  min-width: 100px;
  border: 1px solid black;
  border-radius: 50%;
`;*/

const Container = styled.div`
  display: flex;

  align-items: center;
  > :not(:last-child) {
    margin-right: 25px;
  }
  max-width: 100%;
`;

const Title = styled.span`
  font-family: "Eveleth";
  font-size: 15px;
`;
const Text = styled.span`
  font-size: 14px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column; > :not(:last-child) {
    margin-bottom: 15px;
  }
`;

function BoltOnImage(props: Props & Styleable) {
  return (
    <Container className={props.className}>
      <img src={props.image.src} height={100} width={100} />
      <Body>
        <Title>{props.title}</Title>
        <Text>{props.description}</Text>
      </Body>
    </Container>
  );
}

export default styled(BoltOnImage)``;
