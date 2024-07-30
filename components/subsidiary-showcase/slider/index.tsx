import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import Timer from "./Timer";
import Slider from "./Slider";

import useIsMobile from "components/util/useIsMobile";
import { only, down } from "styled-breakpoints";
import useSubsidiary from 'components/subsidiary-showcase/grid/SubsidiaryContext';
import Subsidiary from 'components/subsidiary-showcase/Subsidiary';

function TimerSlider(props: Styleable) {
  const isMobile = useIsMobile();
  const [subsidiary] = useSubsidiary();

  if (isMobile) {
    return null;
  }

  return (
    <Root>
      <Container className={props.className} subsidiary={subsidiary}>
        <Timer />
        <Slider />
      </Container>
    </Root>
  );
}

const Root = styled.div`
  position: absolute;

  width: 100%;
  bottom: 65px;
  z-index: 100;
  ${down("md")} {
    bottom: 10px;
  }
`;

const Container = styled.div<{subsidiary: Subsidiary}>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0px 40px;

  ${only("md")} {
    ${props => props.subsidiary === "home delivery" && "padding-right: 60px;"}; 
    //Men holding sofa blocks the arrow
  }
`;
export default styled(TimerSlider)``;
