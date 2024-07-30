import TalkToUsButton from "/components/talk-to-us/button";
import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";
import Notice, { Text } from "./Notice";

function TalkToUsWithNotice(props: Styleable) {
  return (
    <Container text="Ready to get in touch?" className={props.className}>
      <TalkToUsButton />
    </Container>
  );
}

const Container = styled(Notice)`
  background: transparent linear-gradient(270deg, #cccccc 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;

  ${Text} {
    color: #695f50;
  }
`;

export default styled(TalkToUsWithNotice)``;
