import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";

import InformationPiece from "./IntroductionPiece";
import useListingItem from "components/careers/listing/item/useListingItem";

import CmsInformationPiece from "../CmsInformationPiece";

function FurtherIntroduction(props: Styleable) {
  const listing = useListingItem();
  const further = listing?.furtherIntroduction;

  if (!further) {
    return null;
  }

  return (
    <CmsInformationPiece
      informationPiece={further}
      className={props.className}
    />
  );
}

export default styled(FurtherIntroduction)``;
