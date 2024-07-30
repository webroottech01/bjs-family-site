import { WithChildren, Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";

import RepeatedTextSplash, {
  Container,
  Text,
} from "components/word-ladder";

const entries = [
  ["Experience", "High standards"],
  ["Customer Service", "Heart"],
  ["Reputation", "Family Run"],
  ["Flexible"],
];

function AboutSplash(props: Styleable & WithChildren) {
  return (
    <Splash
      repeat={2}
      columns={40}
      entries={entries}
      className={props.className}
      type="checkered"
    >
      {props.children}
    </Splash>
  );
}
const Splash = styled(RepeatedTextSplash)`
  ${Container} {
    top: -10px;
    left: -30px;
    font-size: 6px;
    max-height: 442px;
    min-width: 320px;
  }

  ${Text} {
    color: ${colours.black};
  }
  height: 100%;
  max-width: 320px;
    border-radius: 12px 0px 0px 12px;
}


`;

export default styled(AboutSplash)``;
