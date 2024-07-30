import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

function Title({ className }: Styleable) {
  return (
    <Text className={className}>Belief in a divine flow and the team</Text>
  );
}

const Text = styled.span`
  font-family: "Eveleth";
  text-transform: uppercase;
  font-size: 36px;
`;

export default styled(Title)``;
