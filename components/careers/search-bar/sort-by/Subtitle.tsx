import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

function Subtitle(props: Styleable) {
  return <Container className={props.className}>
      <Text>Filter by</Text>
  </Container>;
}

const Text = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const Container = styled.div``;
export default styled(Subtitle)``;
