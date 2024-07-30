import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import WhatCustomersThink, { ContainerStyling } from "./WhatCustomersThink";
import TrustPilotReviews from "./trustpilot";
import TrustpilotProps from './TrustpilotProps';

interface Props {
  trustpilot: TrustpilotProps;
}

function WhatCustomersThinkExtended({trustpilot, className}: Props & Styleable) {
  return (
    <Container className={className}>
      <WhatCustomersThink {...trustpilot} hideTrustPilot/>
      <TrustPilotReviews {...trustpilot.average} />
    </Container>
  );
}

const Container = styled(ContainerStyling)`
  display: flex;
  justify-content: space-between;

  ${WhatCustomersThink} {
    max-width: 70%;
  }
`;
export default WhatCustomersThinkExtended;
