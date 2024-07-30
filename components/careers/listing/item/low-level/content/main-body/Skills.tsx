import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import useListingItem from "components/careers/listing/item/useListingItem";
import CmsInformationPiece from "../CmsInformationPiece";

function Skills(props: Styleable) {
  const listing = useListingItem();
  const skills = listing?.skills;

  if (!skills) {
    return null;
  }

  return (
    <CmsInformationPiece
      className={props.className}
      informationPiece={skills}
    />
  );
}

export default styled(Skills)``;
