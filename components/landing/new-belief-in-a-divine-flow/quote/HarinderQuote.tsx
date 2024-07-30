import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";

import LargeQuote, {
  Text,
} from "components/services/case-study/blueprint/LargeQuote";

function HarinderQuote(props: WithChildren & Styleable) {
  return (
    <Quote
      className={props.className}
      text="Who we are as people, our values and emotional needs, shouldn’t be ignored
within the world of work. There is no division in our hearts before you
start work and after you sit at your desk or the cab of a truck. By
respecting my team and treating them with compassion and kindness they are
better able to continue that conduct to the benefit of everyone they
encounter, including our customers. It is what has set us apart as a
business."
    >
      {props.children}
    </Quote>
  );
}

const Quote = styled(LargeQuote)`
  ${Text} {
    font-size: 14px;
  }
`;

export default styled(HarinderQuote)``;
