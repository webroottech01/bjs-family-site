import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import TrustpilotProps from "./what-customers-think/TrustpilotProps";

import WhatOurCustomersThink from "components/feedback/what-customers-think";
import WhatClientsThink from "./what-clients-think";
import { useRouter } from "next/router";

interface Props {
  trustpilot: TrustpilotProps;
}

function CustomerFeedback({ trustpilot, className }: Props & Styleable) {
  return (
    <Container className={className}>
      <FeedbackComponent trustpilot={trustpilot} />
    </Container>
  );
}

function FeedbackComponent({ trustpilot }: Props) {
  const router = useRouter();
  const path = router.asPath;
  if (path === "/services/construct-it") {
    return <WhatClientsThink />;
  }
  return <WhatOurCustomersThink {...trustpilot} />;
}

const Container = styled.div`
  min-height: 100%;
  width: 100%;
`;

export default styled(CustomerFeedback)``;
