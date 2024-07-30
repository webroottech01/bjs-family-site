import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

function Partnership(props: Styleable) {
  return <Container className={props.className}>Partnership</Container>;
}

const Container = styled.div`
  display: flex;
  padding: 7px 10px;
  font-family: "Eveleth";
  font-size: 10px;
  background: ${colours.yellow};
  border-radius: 6px;
  align-items: center;

`;

export default styled(Partnership)``;
