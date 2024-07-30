import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import useListingItem from "components/careers/listing/item/useListingItem";

import CmsInformationPiece from "../CmsInformationPiece";

function Responsibilities(props: Styleable) {
  const listing = useListingItem();
  const responsibilities = listing?.responsibilities;

  if (!responsibilities) {
    return null;
  }

  return (
    <CmsInformationPiece
      className={props.className}
      informationPiece={responsibilities}
    />
  );
}

export default styled(Responsibilities)``;
