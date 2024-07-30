import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";

import config from "subsidiary-config/construct-it-config";

const constructITColour = config.primaryColour;

function BuiltItShiftIt(props: Styleable) {
  return (
    <Container className={props.className}>
      <Left>
        <Build>If you can build with</Build>
        <Shift>We can shift</Shift>
      </Left>
      <It>It</It>
    </Container>
  );
}

const It = styled.span`
  color: ${constructITColour};
  content: "it";

  font-family: "Eveleth";
  font-size: 70px;
  position: relative;
  top: -20px;

  @media only screen and (max-width: 375px) {
    font-size: 50px;
  }
`;
const Build = styled.span`
  font-size: 27px;
  font-weight: medium;
  color: rgba(20, 25, 30, 0.5);

  @media only screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

const Shift = styled.span`
  font-size: 34px;
  color: #14191e;
  font-family: "Eveleth";

  @media only screen and (max-width: 375px) {
    font-size: 20px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
`;

const Container = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 22px;
  }
`;

export default styled(BuiltItShiftIt)``;
