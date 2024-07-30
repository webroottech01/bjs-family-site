import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";

const getName = (input: Subsidiary): string => {
  switch (input) {
    case "home delivery":
      return "BJS Two-Man Home Delivery";
    case "extra":
      return "BJS Extra";
    case "haulage":
      return "BJS Haulage";
    case "constructit":
      return "ConstructIT";
    default:
      throw new Error(`Cannot find match for ${input}`);
  }
};

interface Props extends Styleable {
  subsidiary: Subsidiary;
}

const Text = styled.span`
  font-size: 14px;

  color: #888075;
`;

function SubsidiaryName(props: Props) {
  const name = getName(props.subsidiary);
  return <Text className={props.className}>{name}</Text>;
}


export default styled(SubsidiaryName)``;
