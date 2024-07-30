import styled, { css } from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

function Title(props: Styleable) {
  return (
    <Container className={props.className}>
      <Seperator position="left" />
      <Text>Our partners</Text>
      <Seperator position="right" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > :not(:last-child) {
    margin-right: 33px;
  }
`;

type Position = "left" | "right";
const Seperator = styled.div<{ position: Position }>`
  background: transparent linear-gradient(90deg, #ffffff 0%, #000000 100%) 0% 0%
    no-repeat padding-box;

  ${(props) =>
    props.position === "right" &&
    "background: transparent linear-gradient(270deg, #FFFFFF 0%, #000000 100%) 0% 0% no-repeat padding-box;"}

  opacity: 0.2;

  height: 1px;
  content: "";


  //This will depend on viewport! Need to make this responsive
  // min-width: 680px;
  // max-width: 680px;
  flex: 1;
`;

const Text = styled.h3`
  font-family: "Eveleth";
  font-size: 20px;
  color: #615e59;
  position: relative;
  white-space: nowrap;
  margin:0px;
`;
export default Title;
