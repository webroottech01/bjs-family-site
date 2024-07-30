import styled from "styled-components";
import { down } from "styled-breakpoints";
import Image from "next/image";

// import trustPilotLogo from "public/images/feedback/trustpilot-logo.png";
import trustPilotLogo from "public/images/feedback/trustpilot-logo-new.svg";
import AverageReviewSection from "./AverageReviewSection";
import { Styleable } from "@bjsdistribution/components";
import { AverageStats } from "../fetchReviews";

function TrustPilotReviews({
  className,
  total,
  trustScore,
  starRating,
}: AverageStats & Styleable) {
  const navigateToTrustpilot = () =>
    window.open(
      "https://uk.trustpilot.com/review/bjshomedelivery.com",
      "_blank"
    );
  return (
    <Container className={className} onClick={navigateToTrustpilot}>
      <Logo src={trustPilotLogo} width={265} height={60} layout="fixed" />
      <AverageReviewSection score={trustScore} rating={starRating} />
      <ReviewText>
        <TrustScore>
          TrustScore <b>{trustScore}</b>
        </TrustScore>
        <Separator />
        <ReviewsScore>
          <b>{Number(total).toLocaleString()}</b>
        </ReviewsScore>{" "}
        reviews
      </ReviewText>
    </Container>
  );
}

const ReviewsScore = styled.span`
  margin-right: 10px;
`;

const Separator = styled.span`
  display: inline-block;
  height: 30px;
  width: 2px;
  background: #000032;
  margin-left: 10px;
  margin-right: 15px;
`;

const TrustScore = styled.span``;

const Reviews = styled.span``;

const Logo = styled(Image)``;

const ReviewText = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin-top: 30px;
  gap: 25px;

  // ${AverageReviewSection} {
  //   margin-top: 35px;
  //   margin-bottom: 30px;

  //   ${down("sm")} {
  //     margin-bottom: 43px;
  //   }
  // }
`;

export default styled(TrustPilotReviews)``;
