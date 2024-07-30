import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

import AcronymExplanation from "./AcronymExplanation";
import OutlookExplanation from "./OutlookExplanation";

const Container = styled.div`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 40px;
  }

  ${down("md")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 60px;
    }
  }
  ${down("sm")} {
    > :not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

function Header(props: Styleable) {
  return (
    <Container className={props.className}>
      <AcronymExplanation />
      <OutlookExplanation />
    </Container>
  );
}

export default styled(Header)``;
