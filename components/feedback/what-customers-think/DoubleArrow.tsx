import styled from "styled-components";
import {down} from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/pro-regular-svg-icons";

export interface Props {
  onClickLeft?: () => void;
  onClickRight?: () => void;
}

function DoubleArrow(props: Props & Styleable) {
  return (
    <Container className={props.className}>
      <Arrow icon={faAngleLeft} onClick={props.onClickLeft} />
      <Arrow icon={faAngleRight} onClick={props.onClickRight} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 30px;
  }

  color: black;
`;

const Arrow = styled(FontAwesomeIcon)`
  font-size: 60px !important;
  cursor: pointer;

  :hover {
    color: ${colours.yellow};
  }

  ${down("sm")} {
    font-size: 40px;
  }
`;

export default styled(DoubleArrow)``;
