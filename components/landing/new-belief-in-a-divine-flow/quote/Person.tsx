import Image from "next/image";
import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Text from "../Text";

function Person(props: Styleable) {
  return (
    <Container className={props.className}>
      <ImageContainer>
        <Image src="/images/landing/harinder.png" layout="fill" />
      </ImageContainer>
      <PersonInfo>
        <Name>Harinder Singh</Name>
        <Text>Managing Director</Text>
      </PersonInfo>
    </Container>
  );
}

const Name = styled(Text)`
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const ImageContainer = styled.div`
  position: relative;
  height: 140px;
  width: 140px;

  @media only screen and (max-width: 350px) {
    height: 80px;
    width: 80px;
  }
`;

const PersonInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  white-space: nowrap;
`;

export default styled(Person)``;
