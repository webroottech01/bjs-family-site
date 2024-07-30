import { AverageStats } from "./fetchReviews";
import TrustpilotReview from "./TrustpilotReview";

interface TrustpilotProps {
  average: AverageStats;
  reviews: TrustpilotReview[];
}

export default TrustpilotProps;
