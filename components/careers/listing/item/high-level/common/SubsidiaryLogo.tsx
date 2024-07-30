import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import getSubsidiary from "subsidiary-config";
import useIsMobile from "/components/util/useIsMobile";

type StaticDimension = [number, number];
type DimensionForSubsidiary = (subsidiary: Subsidiary) => StaticDimension;
type DimensionType = StaticDimension | DimensionForSubsidiary;

const getDimensions = (
  input: DimensionType | undefined,
  subsidiary: Subsidiary
): [number, number] => {
  if (!input) {
    return getStaticDimensions(subsidiary);
  }
  if (Array.isArray(input)) {
    return input as StaticDimension;
  }
  const getDimension = input as DimensionForSubsidiary;
  return getDimension(subsidiary);
};

type Props = {
  subsidiary: Subsidiary;
  dimensions?: DimensionType;
} & Styleable;

function SubsidiaryLogo({ subsidiary, className, dimensions }: Props) {
  const isMobile = useIsMobile();
  let [height, width] = getDimensions(dimensions, subsidiary);
  const source = getSubsidiary(subsidiary);

  if (isMobile) {
    height = getMobileHeight(subsidiary);
  }
  return (
    <Image
      className={className}
      src={source.logoUrl}
      height={height}
      width={width}
    />
  );
}

const Image = styled.img<{ height?: number; width?: number }>`
  height: ${(props) => (props.height === -1 ? "auto" : props.height + "px")};
  width: ${(props) => (props.width === -1 ? "auto" : props.width + "px")};
`;

const getMobileHeight = (input: Subsidiary): number => {
  switch (input) {
    case "home delivery":
      return 96;
    case "extra":
      return 90;
    case "haulage":
      return 73;
    case "constructit":
      return 38;
  }
};

const getStaticDimensions = (input: Subsidiary): [number, number] => {
  switch (input) {
    case "home delivery":
      return [90, 140];
    case "constructit":
      return [36, 168];
    case "haulage":
      return [73, 114];
    case "extra":
      return [111, 136];
    default:
      throw new Error(`Unknown dimensions for subsidiary for ${input}`);
  }
};

export default styled(SubsidiaryLogo)``;
