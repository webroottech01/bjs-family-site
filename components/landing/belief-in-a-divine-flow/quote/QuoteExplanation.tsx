import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";

import Text from "../Text";

function QuoteExplanation(props: Styleable) {
  return (
    <Text className={props.className}>
      Harinder, BJS Managing Director, explains that he believes in a divine
      flow and his team;
    </Text>
  );
}

export default styled(QuoteExplanation)``;
