import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import getSubsidiary from "subsidiary-config";
type Props = {
  subsidiary: Subsidiary;
} & Styleable;

function SubsidiaryLogo({ subsidiary, className }: Props) {
  let [height, width] = getDimensions(subsidiary);
  let usedWidth = width === -1 ? "auto" : width;

  const source = getSubsidiary(subsidiary);
  return (
    <img
      className={className}
      src={source.logoUrl}
      height={height}
      width={usedWidth}
    />
  );
}

const getDimensions = (input: Subsidiary): [number, number] => {
  switch (input) {
    case "home delivery":
      return [54, 78];
    case "constructit":
      return [22, 108];
    case "haulage":
      return [47, 78];
    case "extra":
      return [61, 78];
    default:
      throw new Error(`Unknown dimensions for subsidiary for ${input}`);
  }
};

export default styled(SubsidiaryLogo)``;
