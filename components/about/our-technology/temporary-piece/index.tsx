import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Intro from "./Intro";
import OrderJourney from "./OrderJourney";
import TrackingService from "./TrackingService";
import Integrations from "./Integrations";
import DiscussRequirements from "./DiscussRequirements";

import SupportingImage from "./SupportingImage";
import { down } from "styled-breakpoints";

function TemporaryPiece(props: Styleable) {
  return (
    <Container className={props.className}>
      <Content>
        <Intro />
        <OrderJourney />
        <TrackingService />
        <Integrations />
        <DiscussRequirements />
      </Content>
      <SupportingImage />
    </Container>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;

  ${Intro} {
    margin-bottom: 40px;
  }
  ${OrderJourney}, ${TrackingService}, ${Integrations} {
    margin-bottom: 60px;
  }
  padding-bottom: 100px;
  ${down("md")} {
    ${Intro}, ${TrackingService}, ${Integrations}, ${DiscussRequirements} {
      padding: 0px 40px;
    }
  }
  ${down("sm")} {
    ${OrderJourney} {
      display: flex;
      flex-direction: column;
      border-radius: 0px;
      width: 100%;
    }
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 60px;
  justify-content: center;
  width: 100%;
  position: relative;
  @media only screen and (max-width: 1400px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    gap: 0px;

    ${SupportingImage} {
      text-align: center;
    }
    padding-bottom: 100px;
  }
`;
export default styled(TemporaryPiece)``;
