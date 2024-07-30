import styled from "styled-components";
import Header from "./Header";
import {
  ClientLogos,
  SupportingMedia,
} from "components/about/timeline/entry";

function Media() {
  return (
    <Container>
      <Header />
      <ClientLogos clients={["julian bowen", "oliver bonas", "nectar sleep"]} />
    </Container>
  );
}

const Container = styled(SupportingMedia)`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }

  ${ClientLogos} {
    gap: 30px;
    padding: 40px 45px;
    @media only screen and (min-width: 1450px) {
      padding: 20px 0px;
    }
    align-items: center;

    img {
      padding: 0px !important;
      object-fit: scale-down;
      :nth-child(1) {
        // padding: 0px !important;
        width: 160px;
      }
      :nth-child(2) {
        //Make oliver bonas logo smaller
        width: 115px;
        @media only screen and (min-width: 1450px) {
          width: 135px;
        }
      }
      :nth-child(3) {
        //Same with nectar logo
        width: 160px;
        @media only screen and (min-width: 1450px) {
          width: 190px;
        }
      }
    }
  }
`;

export default Media;
