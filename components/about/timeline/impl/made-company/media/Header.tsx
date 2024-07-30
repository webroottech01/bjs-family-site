import styled from "styled-components";
import { colours } from "@bjsdistribution/components";

import path from "components/about/timeline/path";
import { borderRadius } from "components/about/timeline/entry/SupportingMedia";

const Container = styled.div`
  background: url(${path}/warehouse.jpg) no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
  justify-content: flex-end;
  min-height: 250px;
  background-position: center;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
`;

const Number = styled.span`
  font-family: "Eveleth";
  font-size: 60px;
  color: ${colours.yellow};
  line-height: 0.5em;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const TopText = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Eveleth";
  height: 100%;
  gap: 2px;
  justify-content: space-between;
  align-items: center;
  text-align: left;
`;

const White = styled.span`
  font-family: "Eveleth";
  color: white;
  width: 100%;
  font-size: 18px;
`;

const Percentage = styled.span`
  font-family: "Eveleth";
  color: ${colours.yellow};
  font-size: 30px;
  line-height: 0.5em;
`;

const Arrow = styled.img`
  
`;

function Header() {
  return (
    <Container>
      <TextContainer>
        <TopText>
          <Number>700</Number>
          <Right>
            <Percentage>%</Percentage>
            <Arrow src={`${path}/arrow.svg`} />
          </Right>
        </TopText>
        <White>Sq ft increase</White>
      </TextContainer>
    </Container>
  );
}

export default styled(Header)``;
