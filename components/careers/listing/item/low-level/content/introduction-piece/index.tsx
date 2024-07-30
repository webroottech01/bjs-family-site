import styled, { css } from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";
import WhatWeAreLookingFor from "./WhatWeAreLookingFor";
import FurtherIntroduction from "./FurtherIntroduction";

import { Title } from "components/careers/listing/item/low-level/content/CmsInformationPiece";

import TwinContainer from "../TwinContainer";

import useListingItem from "components/careers/listing/item/useListingItem";

function IntroductionPiece(props: Styleable) {
  const listing = useListingItem();
  const further = listing?.furtherIntroduction;

  return (
    <Container className={props.className} layout fullWidth={!!!further}>
      <WhatWeAreLookingFor />
      <FurtherIntroduction />
    </Container>
  );
}

const FullWidthStyling = css`
  grid-template-columns: repeat(1, 1fr);
  ${up("lg")} {
    > div {
      max-width: unset;
    }
  }
`;

const Container = styled(TwinContainer)<{ fullWidth: boolean }>`
  ${up("md")} {
    padding-top: 200px;
  }
  ${down("sm")} {
    padding: 65px 20px;
  }
  ${(props) => props.fullWidth && FullWidthStyling};

  ${Title} {
    font-family: "Eveleth";
    font-size: 20px;
  }
`;

export default IntroductionPiece;
