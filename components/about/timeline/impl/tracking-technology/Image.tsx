import styled from "styled-components";
import { down } from "styled-breakpoints";

import { SupportingMedia } from "components/about/timeline/entry";
import path from "components/about/timeline/path";

function Image() {
  return (
    <Container>
      <Fleet src={`${path}/tracking.svg`} />
    </Container>
  );
}

const Fleet = styled.img`
  ${down("md")} {
    width: 250px;
  }
  padding: 0px !important;
`;

const Container = styled(SupportingMedia)`
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }
`;

export default Image;
