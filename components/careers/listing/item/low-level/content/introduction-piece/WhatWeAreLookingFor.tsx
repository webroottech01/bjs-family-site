import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import useListingItem from "components/careers/listing/item/useListingItem";
import CmsInformationPiece from "../CmsInformationPiece";

function WhatWeAreLookingFor(props: Styleable) {
  const listing = useListingItem();
  const introduction = listing?.introduction;

  if (!introduction) {
    return null;
  }

  return <CmsInformationPiece informationPiece={introduction} className={props.className} />;
}

function OldPiece() {
  return (
    <>
      <p>
        We are looking for a creative Digital Marketing Manager to help our
        brand stand out and set us further apart from other companies in the
        logistics industry.
      </p>{" "}
      <p>
        Reporting to both the Business Support & Project Manager and the
        Managing Director, you will be responsible for delivering successful
        digital campaigns to support the overall communications strategy and
        provide a strong presence across a range of channels.
      </p>{" "}
      <p>
        Although BJS Home Delivery is a 24/7 operation, this vacancy is for the{" "}
        <b>daytime shift</b>.
      </p>
    </>
  );
}

export default styled(WhatWeAreLookingFor)``;
