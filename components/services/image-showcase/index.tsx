import styled from "styled-components";

import SubsidiaryComponentProps from "components/services/SubsidiaryComponentProps";
import ConstructITImageShowcase from "./ConstructITImageShowcase";
import HaulageImageShowcase from "./HaulageImageShowcase";
import HomeDeliveryImageShowcase from "./HomeDeliveryImageShowcase";

function ImageShowcase({ subsidiary, className }: SubsidiaryComponentProps) {
  if (subsidiary === "haulage") {
    return <HaulageImageShowcase className={className} />;
  } else if (subsidiary === "constructit") {
    return <ConstructITImageShowcase className={className} />;
  }
  return <HomeDeliveryImageShowcase className={className} />;
}

export default styled(ImageShowcase)``;
