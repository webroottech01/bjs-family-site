import styled, { css } from "styled-components";
import {up, down, only} from "styled-breakpoints";
import { colours } from "@bjsdistribution/components";
import DirectionProps from "./DirectionProps";

function Connector(props: DirectionProps) {
  return (
    <Container {...props}>
      <Line {...props} />
      <Dot />
    </Container>
  );
}

const Container = styled.div<DirectionProps>`
  // position: absolute;
  z-index: 2;

  height: 100%;
  right: -24px;
  display: flex;
  ${up("lg")} {
    right: -37px;
  }
  ${(props) => props.direction === "right" && RightPositionStyling};
  align-items: center;

  ${down("md")} {
 //   left: 55%;
    right: -7px;
  }
  @media only screen and (max-width: 1300px) {
    right: -7px;
  }
`;

const RightPositionStyling = css`
  flex-direction: row-reverse;
  right: auto;
  left: -17px;
  ${up("lg")} {
    left: -31px;
    right: unset;
  }
`;

const Line = styled.div<DirectionProps>`
  background: transparent linear-gradient(${props => getDirection(props)}, #3a3630 0%, #e4e2de00 100%) 0%
    0% no-repeat padding-box;
  width: 200px;
  height: 6px;
  content: "";
  @media only screen and (max-width: 1775px) and (min-width: 1400px) {
    width: 100px;
  }
  @media only screen and (max-width: 1400px) and (min-width: 1300px) {
    width: 75px;
  }
  ${down('sm')} {
    width: 100px;
  }
`;

const getDirection = (input: DirectionProps) => {
  const value = input.direction === "left" ? 270 : 90;
  return `${value}deg`;
}


const Dot = styled.div`
  box-sizing: content-box;
  height: 8px;
  width: 8px;
  background: ${colours.yellow};
  border: 6px solid ${colours.black};
  border-radius: 50%;
`;

export default Connector;
