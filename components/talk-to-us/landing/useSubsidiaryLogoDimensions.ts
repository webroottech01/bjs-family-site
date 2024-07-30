import useIsMobile from "components/util/useIsMobile";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";

function useSubsidiaryLogoDimensions() {
  const isMobile = useIsMobile();
  const getDimensions = (input: Subsidiary): [number, number] => {
      if (isMobile) {
          return getMobileDimensions(input);
      }
    return getDesktopDimensions(input);
  };
  return getDimensions;
}

const getMobileDimensions = (input: Subsidiary): [number, number] => {
    switch (input) {
      case "home delivery":
        return [80, -1];
      case "constructit":
        return [85, -1];
      case "haulage":
        return [76, -1];
      case "extra":
        return [40, 136];
      default:
        throw new Error(`Unknown dimensions for subsidiary for ${input}`);
    }
  };

const getDesktopDimensions = (input: Subsidiary): [number, number] => {
  switch (input) {
    case "home delivery":
      return [106, 140];
    case "constructit":
      return [47, -1];
    case "haulage":
      return [96, -1];
    case "extra":
      return [111, 136];
    default:
      throw new Error(`Unknown dimensions for subsidiary for ${input}`);
  }
};

export default useSubsidiaryLogoDimensions