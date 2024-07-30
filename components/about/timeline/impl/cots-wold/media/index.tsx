import styled from "styled-components";
import { SupportingMedia } from "components/about/timeline/entry";

import Header from "./Header";
import Footer from "./Footer";

const MediaContainer = styled(SupportingMedia)`
  flex-direction: column;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }
`;

function Media() {
  return (
    <MediaContainer>
      <Header />
      <Footer />
    </MediaContainer>
  );
}

export default Media;
