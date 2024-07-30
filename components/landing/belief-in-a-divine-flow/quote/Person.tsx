import Image from "next/image";
import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";
import Text from "../Text";
import { useIsEnabled } from "./egg";
import { useMemo } from "react";
import decode from "./decode";

function Person(props: Styleable) {
  const isEgg = useIsEnabled();

  const details: [string, string] = useMemo(() => {
    if (isEgg) {
      return [
        decode("QW5pc2ggRGhhbmth"),
        decode("U29sdXRpb25zIEFyY2hpdGVjdA=="),
      ];
    }
    return ["Harinder Singh", "Managing Director"];
  }, [isEgg]);

  return (
    <Container className={props.className}>
      <ImageContainer>
        <Image
          alt="Headshot of Harinder Singh, Managing Director of BJS Home Delivery"
          src={
            isEgg
              ? decode(
                  "aHR0cHM6Ly9jYS5zbGFjay1lZGdlLmNvbS9UMzdENTZDUU4tVTRDSFpNOTlRLTg0YzMxNGMyNWJmMi01MTI="
                )
              : "/images/landing/harinder.png"
          }
          layout="fill"
        />
      </ImageContainer>
      <PersonInfo>
        <Name>{details[0]}</Name>
        <Text>{details[1]}</Text>
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

  > :not(:last-child) {
    margin-right: 30px;
  }
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
  // justify-content: space-around;
  white-space: nowrap;
  gap: 14px;
`;

export default styled(Person)``;
