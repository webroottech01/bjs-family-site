import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

import StarRating from "./StarRating";

interface Props {
  score: number;
  rating: number;
}

function AverageReviewSection({ score, rating, className }: Props & Styleable) {
  return (
    <Container className={className}>
      <StarRating rating={rating} />
      {/* <TextContainer>
        <Average>
          <b>{score}</b> out of 5
        </Average>
        <Conclusion>Excellent</Conclusion>
      </TextContainer> */}
    </Container>
  );
}

const TextContainer = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 20px;
  }
  align-items: center;

  @media only screen and (max-width: 1125px) {
    flex-direction: column;

    > :not(:last-child) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;

const Conclusion = styled.span`
  font-size: 16px;
  font-family: "Eveleth";
`;
const Average = styled.span`
  font-size: 16px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: 20px;
  }

  ${down("sm")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 400px) {
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;

export default styled(AverageReviewSection)``;
