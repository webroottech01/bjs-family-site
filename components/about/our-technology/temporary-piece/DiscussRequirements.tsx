import styled from "styled-components";
import { Styleable, Button } from "@bjsdistribution/components";
import TalkToUsButton from 'components/talk-to-us/button';

function DiscussRequirements(props: Styleable) {
  return <Container className={props.className}>
      <Text>Discuss your requirements in further detail with our team...</Text>
      <TalkToUsButton desktop/>
  </Container>;
}

const Text = styled.span`
  font-size: 14px;
  color: #888075;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${Text} {
      margin-bottom: 20px;
  }

  ${Button.PlainButton} {
      width: min-content;
  }
`;

export default styled(DiscussRequirements)``;
