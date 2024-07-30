import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

function ContinuousImprovementText(props: Styleable) {
  return (
    <Container className={props.className}>
      <Text>Continuous</Text>
      <Text>Improvement</Text>
    </Container>
  );
}

const Text = styled.span`
  font-size: 140px;
  font-family: "Eveleth";
`;
const Container = styled.div`
  position: absolute;
  z-index: 2;
  top: 40px;
  left: 15%;
  color: ${colours.black};
  transform: rotate(-6deg);
  display: flex;
  flex-direction: column;
  ${down("md")} {
    top: unset;
    right: 5%;
    left: unset;
    ${Text} {
      font-size: 80px;
    }
  }
  ${down("sm")} {
    top: 20%;
    ${Text} {
      font-size: 40px;
    }
  }
`;
export default ContinuousImprovementText;
