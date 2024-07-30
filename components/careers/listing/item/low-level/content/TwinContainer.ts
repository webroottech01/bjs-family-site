import Root from "components/careers/listing/item/Container";

import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable, WithChildren } from "@bjsdistribution/components";

const TwinContainer = styled(Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  grid-gap: 35px 120px;
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;

  ${up("lg")} {
    justify-content: space-between;
    > div {
      max-width: 800px;
    }
  }

  ${down("md")} {
    display: flex;
    flex-direction: column;
    grid-gap: 30px;
  }
`;

export default TwinContainer;
