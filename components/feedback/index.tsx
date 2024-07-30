import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import ValuesSplash from "components/feedback/values-splash";
import TrustpilotReview from "./what-customers-think/TrustpilotReview";
import { AverageStats } from "./what-customers-think/fetchReviews";
import CustomerFeedback from "./CustomerFeedback";
import TrustpilotProps from './what-customers-think/TrustpilotProps';

interface Props {
  trustpilot: TrustpilotProps;
}

function FeedbackSection({ trustpilot }: Props) {
  return (
    <Container>
      <CustomerFeedback trustpilot={trustpilot} />
      <ValuesSplash />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  ${up("lg")} {
    ${CustomerFeedback}, ${ValuesSplash} {
      width: 50%;
    }
  }
  ${down("md")} {
    flex-direction: column;
  }
`;

export default FeedbackSection;
