import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import Text from "./Text";

function History(props: Styleable) {
  return (
    <Text className={props.className}>
      From the very inception of BJS, spiritual guidance was sought from Baba
      Jaswant Singh Ji – whom the company is named after. Before his death in
      2020, Baba Jaswant Singh Ji was based in Punjab and had a trust that ran
      projects for the welfare of humanity; providing health care facilities,
      higher medical education and to show ‘the path of spiritual
      righteousness’, to ‘foster human values and welfare with esteemed devotion
      indeed’.
    </Text>
  );
}

function BeliefText({ className }: Styleable) {
  return (
    <Text className={className}>
      Harinder, BJS Managing Director, explains that he believes in a divine
      flow and his team;
    </Text>
  );
}

export const Belief = styled(BeliefText)``;

export default styled(History)``;
