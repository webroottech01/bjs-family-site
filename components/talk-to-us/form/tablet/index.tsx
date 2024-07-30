import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import Header from "./Header";
import { up, down, only } from "styled-breakpoints";
import TalkToUs from "../section/talk-to-us";
import { useGetSelected } from "./selected-header-store";
import RequestCallback from '../section/request-callback/index';

function TalkToUsTablet(props: Styleable) {
  const currentSelected = useGetSelected();
  return (
    <Container className={props.className}>
      <Header />
      {currentSelected === "talk to us" && <TalkToUs />}
      {currentSelected === "request quote" && <RequestCallback/>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  
  ${Header} {
    margin-bottom: 50px;

    ${down("sm")} {
      margin-bottom: 45px;
    }
  }
`;

export default styled(TalkToUsTablet)``;
