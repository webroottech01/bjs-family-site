import styled from "styled-components";
import { useState, useMemo, useRef, useEffect } from "react";
import { up, down, only } from "styled-breakpoints";

import { Styleable } from "@bjsdistribution/components";
import DoubleArrow from "./DoubleArrow";

import CustomerReview from "./CustomerReview";
import FeedbackStars from "./FeedbackStars";
import TrustpilotReview from "./TrustpilotReview";
import CurrentReviewIndicator from "./CurrentReviewIndicator";
import TrustPilotReviews from "./trustpilot";
import { AverageStats } from "./fetchReviews";
import TrustpilotProps from "./TrustpilotProps";
import { AnimatePresence, useAnimation } from "framer-motion";

export const TRUSTPILOT_DISPLAY_COUNT = 7;
const TIMER_DURATION = 15;

export type Direction = "back" | "forward";
export type Status = "playing" | "paused";

type Props = {
  hideTrustPilot?: boolean;
} & TrustpilotProps &
  Styleable;

function WhatCustomersThink({
  className,
  reviews,
  average,
  hideTrustPilot,
}: Props) {
  const [index, setIndex] = useState(0);
  const direction = useRef<Direction>("forward");

  const timerStatus = useRef<Status>("playing");
  const timer = useRef<number>(0);

  const showTrustPilot = !hideTrustPilot ?? true;

  const tick = () => {
    const status = timerStatus.current;
    if (status === "paused") {
      return;
    }
    let newTimer = timer.current + 1;
    if (newTimer >= TIMER_DURATION) {
      goForward();
      return;
    }
    timer.current = newTimer;
  };

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);
    return () => clearTimeout(intervalId);
  }, []);

  const currentReview = useMemo(() => {
    if (!reviews || reviews.length === 0) {
      return undefined;
    }
    return reviews[index];
  }, [reviews, index]);

  const resetTimer = () => timer.current = 0;
  const pauseTimer = () => timerStatus.current = "paused";
  const resumeTimer = () => timerStatus.current = "playing";

  const goBack = () => {
    direction.current = "back";
    resetTimer();
    setIndex((old) => {
      let newIndex = old - 1;
      if (newIndex < 0) {
        newIndex = reviews.length - 1;
      }
      return newIndex;
    });
  };

  const goForward = () => {
    direction.current = "forward";
    resetTimer();
    setIndex((old) => {
      let newIndex = old + 1;
      if (newIndex > reviews.length - 1) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  /* if (1 === 1) {
    return (
      <Container className={props.className}>
        <TrustPilotWidget />
      </Container>
    );
  }*/
  return (
    <Container className={className}>
      <Header>
        <Title>What our customer's think</Title>
        <DoubleArrow onClickLeft={goBack} onClickRight={goForward} />
      </Header>
      <AnimatePresence exitBeforeEnter>
        {currentReview && (
          <CustomerReview
            review={currentReview}
            key={currentReview.title}
            direction={direction.current}
            onMouseEnter={pauseTimer}
            onMouseLeave={resumeTimer}
          />
        )}
      </AnimatePresence>
      <CurrentReviewIndicator
        selected={index}
        onSelect={(number) => setIndex(number)}
        total={TRUSTPILOT_DISPLAY_COUNT}
      />
      <TrustPilotReviews
        total={average.total}
        trustScore={average.trustScore}
        starRating={average.starRating}
      />
    </Container>
  );
}

export const Title = styled.h3`
  font-family: "Eveleth";
  font-size: 22px;
  margin:0px;

  ${down("sm")} {
    font-size: 21px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${DoubleArrow} {
    font-size: 35px !important;
    color: #8d8b87;
  }

  position: relative;
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: -9px;
    height: 1px;
    background: rgba(58, 54, 48, 0.15);
  }
`;

export const ContainerStyling = styled.div`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  padding: 90px 100px;

  @media only screen and (max-width: 1600px) {
    padding: 100px 60px;
  }

  @media only screen and (max-width: 1400px) {
    padding: 80px 40px;
  }
`;

export const Container = styled(ContainerStyling)`
  display: flex;
  flex-direction: column;
  min-height: 100%;

  ${TrustPilotReviews} {
    margin-top: 75px;
  }

  ${Header} {
    margin-bottom: 70px;
  }

  ${CustomerReview} {
    margin-bottom: 60px;
  }

  ${only("md")} {
    padding: 42px 40px;
    ${Header} {
      margin-bottom: 40px;
    }
    ${CustomerReview} {
      margin-bottom: 30px;
    }
  }

  ${down("sm")} {
    padding: 65px 20px;

    ${CustomerReview} {
      margin-bottom: 60px;
    }

    ${Header} {
      margin-bottom: 50px;
    }
  }
`;

export { DoubleArrow };
export default styled(WhatCustomersThink)``;
