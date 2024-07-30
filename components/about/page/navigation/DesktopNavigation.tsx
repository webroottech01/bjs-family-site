import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import NavigationButton from "./NavigationButton";
import Props from "./Props";

import { useNavigateTo } from "components/about/page/AboutPage";
import { getSiblings } from "./pages";

function DesktopNavigation(props: Props & Styleable) {
  const [left, right] = getSiblings(props.page);

  return (
    <Container className={props.className}>
      {left && <NavigationButton direction="left" page={left} id={left}/>}
      {!left && <div />}
      <Title>{props.page}</Title>
      {right && <NavigationButton direction="right" page={right} id={right}/>}
      {!right && <div />}
    </Container>
  );
}

const Title = styled.h1`
  font-family: "Eveleth";
  font-size: 44px;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin:0px;
  @media only screen and (min-width: 992px) and (max-width: 1300px) {
    font-size: 22px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default styled(DesktopNavigation)``;
