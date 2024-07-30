import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import {
  Made,
  RicherSounds,
  Cotswold,
  HappyBeds,
  TvBedStore,
  JulianBowen,
} from "./client-affirmation/impl";

function ClientAffirmationList(props: Styleable) {
  return (
    <Container className={props.className}>
      {/* <Made /> */}
      <Cotswold />
      <RicherSounds />
      <JulianBowen />
      <HappyBeds />
      <TvBedStore />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 80px;
  }

  @media only screen and (min-width: 1650px) {
    display: grid;

    grid-template-columns: repeat(6, 1fr);
    justify-content: space-between;
    gap: 110px;

    ${Cotswold}, ${RicherSounds} {
      grid-column: span 3;
    }

    ${TvBedStore}, ${HappyBeds}, ${JulianBowen} {
      grid-column: span 2;
    }
  }
`;

export default ClientAffirmationList;
