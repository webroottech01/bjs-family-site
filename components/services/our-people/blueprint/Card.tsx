import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { forwardRef } from "react";

interface Props {
  title: string;
  description: string;
  image?: StaticImageData;
}

type AllProps = Props & Styleable;

const Card = forwardRef<HTMLDivElement, AllProps>((props, ref) => {
  return (
    <Container className={props.className} ref={ref}>
      {!props.image && <FakeImage />}
      {props.image && <img src={props.image.src} height={200} />}
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Container>
  );
});

const Title = styled.span`
  font-family: "Eveleth";
  white-space: nowrap;
`;

const Description = styled.span``;
const FakeImage = styled.div`
  min-height: 200px;
  min-width: 282px;
  width: 100%;
  border: 1px solid black;
  opacity: 0.8;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  flex-direction: column;
  padding: 25px 25px 40px 25px;
  border-radius: 12px;
  background: white;;
  box-shadow: 0px 3px 20px 0px #00000014;
  font-size: 14px;
  text-align: center;
  > :not(:last-child) {
    margin-bottom: 15px;
  }
  max-width: fit-content;
  max-height: 390px;
`;

export default styled(Card)``;
