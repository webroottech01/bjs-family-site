import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import TimelineEntry, {
  SupportingMedia,
  ClientLogos,
} from "components/about/timeline/entry";

import path from "components/about/timeline/path";
import { down } from "styled-breakpoints";

function WinnerYear(props: Styleable) {
  return (
    <TimelineEntry
      className={props.className}
      year={2021}
      image={<Image />}
      right
      partnership
    >
      <p>
        Adding another string to our logistics bow – we built Construct IT from
        the ground up to provide a safe pair of hands for industry leading
        construction material manufacturers.
      </p>
      <p>
        A water-shed moment as Wienerberger choose Construct IT as a key
        delivery partner, based upon our stringent approach to safety and
        innovative IT sytems.
      </p>
      <p>
        Construct IT continues to make waves in the construction haulage
        industry as another world-renowned brand in Tarmac also chooses to
        partner with us.
      </p>
      <p>
        Rounding off a challenging but amazing year, both BJS Haulage and
        Construct IT are finalists in the MTA Livery of the Year Awards – which
        we’re happy to say was won by Construct IT!
      </p>
    </TimelineEntry>
  );
}

const Van = styled.img``;

const Warehouse = styled.img``;

const TarmacLogo = styled.img`
  ${down("md")} {
    margin-left: auto;
    width: 60% !important;
  }
  @media only screen and (min-width: 1450px) {
    margin-left: auto;
    width: 60% !important;
  }
`;

const WienerbergerLogo = styled.img`
  ${down("md")} {
    width: 80% !important;
  }
  @media only screen and (min-width: 1450px) {
    width: 80% !important;
  }
`;

const ConstructITLogo = styled.img`
  ${down("md")} {
    margin-right: auto;
    width: 60% !important;
  }
  @media only screen and (min-width: 1450px) {
    margin-right: auto;
    width: 60% !important;
  }
`;

const Award = styled.img`
  @media only screen and (min-width: 1450px) {
    width: 80% !important;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WienerbergerContainer = styled.div`
  display: flex;
`;

const AwardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled(SupportingMedia)`
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }

  img {
    padding: 0px !important;
    object-fit: scale-down;
  }

  ${Van} {
    align-self: flex-start;
  }
  ${Warehouse} {
    align-self: flex-end;
    position: relative;
    top: -20px;
    left: -30px;
  }
  ${ClientLogos} {
    align-self: center;
    max-width: 250px;
  }
`;

function Image() {
  return (
    <Container>
      <LogosContainer>
        <ConstructITLogo src={`${path}/ConstructIT_Logo.svg`} height={80} />
        <TarmacLogo src={`${path}/Logos_Tarmac.png`} />
      </LogosContainer>
      <WienerbergerContainer>
        <WienerbergerLogo src={`${path}/Logos_Wienerberger.png`} height={120} />
      </WienerbergerContainer>
      <AwardContainer>
        <Award src={`${path}/LiveryOfTheYearAward.png`} />
      </AwardContainer>
    </Container>
  );
}

export default styled(WinnerYear)``;
