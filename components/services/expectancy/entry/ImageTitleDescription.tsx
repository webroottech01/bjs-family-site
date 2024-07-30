import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";
import Image from "next/image";

export type Description = string | string[];

export interface Props extends WithChildren {
  title: string;
  description: Description;
  image?: StaticImageData;
}

function Entry(props: Props & Styleable) {
  const elements = getDescriptionAsArray(props.description);

  return (
    <Container className={props.className}>
      {props.image && (
        <ImageContainer>
          <Image src={props.image} layout="fill" draggable={false} />
        </ImageContainer>
      )}
      {props.children}
      <Body>
        <Title>{props.title}</Title>
        <DescriptionContainer>
          {elements.map((entry) => (
            <p key={entry}>{entry}</p>
          ))}
        </DescriptionContainer>
      </Body>
    </Container>
  );
}

function getDescriptionAsArray(input: Description): string[] {
  if (Array.isArray(input)) {
    return input;
  }
  return [input];
}

export const ImageContainer = styled.div`
  min-height: 75px;
  max-height: 75px;
  min-width: 75px;
  max-width: 75px;
  position: relative;
`;

const Circle = styled.div`
  height: 75px;
  min-width: 75px;
  background: black;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 25px;
  }
`;

const Title = styled.span`
  font-family: "Eveleth";
  font-size: 15px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 15px;
  }
`;

export { Container, Body };
export { Circle, Title };
export default styled(Entry)``;
