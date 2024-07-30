import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import {up, down, only} from "styled-breakpoints";

import SubsidiaryGrid from "./grid/SubsidiaryGrid";
import { TalkToUsWithNotice, TrackOrderWithNotice } from "./notice";
import useIsMobile from "components/util/useIsMobile";

interface Props extends Styleable {
  right: "track order" | "talk to us";
}

function SubsidiaryBar(props: Props) {
  const isMobile = useIsMobile();
  let right: JSX.Element | undefined =
    props.right === "track order" ? (
      <TrackOrderWithNotice />
    ) : (
      <TalkToUsWithNotice />
    );
  // if (isMobile) {
  //   right = undefined;
  // }

  return (
    <Root>
      <Container className={props.className}>
        <SubsidiaryGrid />
        {right}
      </Container>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #cccccc;

  overflow-x: scroll;
  //  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  box-shadow: 0px 3px 20px #00000014;

  ${only("md")} {
    max-height: 112px;
  }

  ${down("sm")} {
    height: 90px;
  }
`;

export default styled(SubsidiaryBar)``;
