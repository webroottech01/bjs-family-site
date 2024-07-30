import styled from "styled-components";
import { up, down } from "styled-breakpoints";

import { AnimationControls, HTMLMotionProps, motion } from "framer-motion";
import { Styleable, colours } from "@bjsdistribution/components";
import FeedbackStars from "./FeedbackStars";
import TrustpilotReview from "./TrustpilotReview";
import { Direction } from "./WhatCustomersThink";
import { HTMLAttributes, PropsWithoutRef } from "react";

interface Props {
  review: TrustpilotReview;
  direction: Direction;
}

type AllProps = Props & HTMLMotionProps<"div">;

function CustomerReview(props: AllProps) {
  const { review, direction } = props;
  const { title, reviewer, rating, id } = review;
  const details = review.review;

  const navigateToEntry = () =>
    window.open(`https://uk.trustpilot.com/reviews/${id}`, "_blank");

  return (
    <Container
      {...props}
      initial={{ opacity: 0, x: direction === "back" ? 40 : -40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction === "back" ? -40 : 40 }}
      onClick={navigateToEntry}
      // whileHover={{ color: colours.yellow }}
      layout
    >
      <Title>{title}</Title>
      <FeedbackStars />
      <Details>{details}</Details>
      <Reviewer>{reviewer}</Reviewer>
    </Container>
  );
}

const Title = styled.span`
  font-size: 20px;
`;

const Details = styled.span`
  font-style: italic;

  @media only screen and (max-width: 1600px) {
    font-size: 14px;
    max-width: 70ch;
  }

  // ${up("lg")} {
  //   min-height: 130px;
  // }
`;

const Reviewer = styled.span`
  color: rgba(58, 54, 48, 0.65);
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  cursor: pointer;

  // ${FeedbackStars} {
  //   // margin-bottom: 30px;
  // }

  ${Title} {
    margin-bottom: 22px;
  }

  ${Details} {
    margin-bottom: 30px;

    ${down("md")} {
      margin-bottom: 40px;
    }
  }

  ${down("sm")} {
    // ${FeedbackStars} {
    //   margin-bottom: 30px;
    // }

    ${Title} {
      order: -1;
      margin-bottom: 24px;
    }
  }
`;

export default styled(CustomerReview)``;
