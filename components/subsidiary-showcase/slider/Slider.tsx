import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { useSelectedSubsidiary } from "components/subsidiary-showcase/grid/SubsidiaryContext";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-regular-svg-icons";
import useMove from "./useMove";
import { useTimerAnimation } from "./Timer";
import { down } from "styled-breakpoints";

function Slider({ className }: Styleable) {
  const move = useMove();
  const subsidiary = useSelectedSubsidiary();
  const elapsedControls = useTimerAnimation();

  if (!elapsedControls) {
    return null;
  }

  return (
    <Container className={className}>
      <Arrow
        subsidiary={subsidiary}
        icon={faChevronLeft}
        onClick={() => move("left", elapsedControls)}
      />
      <Arrow
        subsidiary={subsidiary}
        icon={faChevronRight}
        onClick={() => move("right", elapsedControls)}
      />
    </Container>
  );
}

const getColour = (input: Subsidiary) => {
  if (input === "home delivery") {
    return "#706c66";
  }
  return "white";
};

const Arrow = styled(FontAwesomeIcon)<{ subsidiary: Subsidiary }>`
  font-size: 60px !important;
  color: ${(props) => getColour(props.subsidiary)};
  cursor: pointer;

  :hover {
    color: ${colours.yellow};
  }
  ${down("md")} {
    font-size: 45px !important;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  > :first-child {
    margin-right: 30px;
  }
`;
export default styled(Slider)``;
