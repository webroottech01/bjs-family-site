import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import TimelineEntry, {
  SupportingMedia,
  ClientLogos,
} from "components/about/timeline/entry";

import path from "components/about/timeline/path";
import { down } from "styled-breakpoints";
import getClientLogo from "components/util/getClientLogo";

function Wayfair(props: Styleable) {
  return (
    <TimelineEntry
      className={props.className}
      year={2016}
      image={<Image />}
      right
      partnership
    >
      <p>Our fleet of delivery vans increased again to 125.</p>
      <p>
        <b>Wayfair</b> and <b>Richer Sounds</b> come on-board.
      </p>
      <p>
        We launched our new warehouse in Scotland, employing local people, to
        improve our service to customers in The Highlands.
      </p>
    </TimelineEntry>
  );
}

const Van = styled.img``;

const Warehouse = styled.img``;

const WayfairLogo = styled.img`
  padding: 0px !important;
  width: 80% !important;
  ${down("md")} {
    width: 60% !important;
    margin-right: auto;
  }
  @media only screen and (min-width: 1450px) {
    width: 60% !important;
    margin-right: auto;
  }
`;

const RicherSoundsLogo = styled.img`
  padding: 0px !important;
  width: 80% !important;
  ${down("md")} {
    width: 60% !important;
    margin-left: auto;
  }
  @media only screen and (min-width: 1450px) {
    width: 60% !important;
    margin-left: auto;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClientLogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Container = styled(SupportingMedia)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 25px;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }

  ${Van} {
    // align-self: flex-start;
    padding: 0px;
    width: 60% !important;
    ${down("md")} {
      margin-right: auto;
    }
    @media only screen and (min-width: 1450px) {
      margin-right: auto;
    }
  }
  ${Warehouse} {
    // align-self: flex-end;
    // position: relative;
    top: -20px;
    left: -30px;
    ${down("sm")} {
      height: 100px;
    }
    padding: 0px;
    width: 60% !important;
    ${down("md")} {
      margin-left: auto;
    }
    @media only screen and (min-width: 1450px) {
      margin-left: auto;
    }
  }
  ${ClientLogos} {
    align-self: center;
    max-width: 250px;
    // padding: 10px;
    ${down("sm")} {
      max-width: 120px;
    }
  }
`;

function Image() {
  return (
    <Container>
      <ImageContainer>
        <Van src={`${path}/125-vans.svg`} height={80} />
        <Warehouse src={`${path}/warehouse-scotland.svg`} height={120} />
      </ImageContainer>
      <ClientLogosContainer>
        <WayfairLogo src={getClientLogo("wayfair")} />
        <RicherSoundsLogo src={getClientLogo("richerSounds")} />
        {/* <ClientLogos clients={["richerSounds"]} /> */}
      </ClientLogosContainer>
    </Container>
  );
}

export default styled(Wayfair)``;
