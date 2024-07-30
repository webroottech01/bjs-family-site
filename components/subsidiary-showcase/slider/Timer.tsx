import styled from "styled-components";
import { useMemo, useEffect } from "react";
import { Styleable, colours } from "@bjsdistribution/components";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { AnimationControls, motion, useAnimation } from "framer-motion";

import useMove from "./useMove";
import { down } from "styled-breakpoints";

const timerDuration = 25;

interface Props extends Styleable {}

const variants = {
  initial: {
    width: "0%",
  },
  animate: {
    width: "100%",
    transition: {
      duration: timerDuration,
    },
  },
};

const elapsedControlsState = atom<AnimationControls | undefined>({
  key: "subsidiary_showcase_animation_controls",
  default: undefined,
});

export function useTimerAnimation() {
  return useRecoilValue(elapsedControlsState);
}

function Timer({ className }: Props) {
  const move = useMove();
  const elapsedControls = useAnimation();
  const [_, setElapsedControls] = useRecoilState(elapsedControlsState);

  useEffect(() => {
    const performAnimation = async () => {
      if (!elapsedControls) {
        return;
      }
      await elapsedControls.start("animate");
      await move("right", elapsedControls);
    };

    performAnimation();
  }, []);

  useEffect(() => {
    setElapsedControls(elapsedControls);
  }, [elapsedControls]);

  return (
    <Root className={className}>
      <Bar />
      <Elapsed animate={elapsedControls} variants={variants} />
    </Root>
  );
}

const Root = styled.div`
  position: relative;
  flex: 1;
  min-height: 10px;
  margin-right: 40px;
`;

const Elapsed = styled(motion.div)`
  position: absolute;
  left: 0;

  background: #3a3630 0% 0% no-repeat padding-box;
  border-radius: 66px;
  opacity: 0.1;
  height: 10px;
`;

const Bar = styled.div`
  position: absolute;
  left: 0;

  background: transparent
    radial-gradient(closest-side at 50% 50%, #ffffff00 0%, #3a3630 100%) 0% 0%
    no-repeat padding-box;
  opacity: 0.1;
  width: 100%;
  height: 10px;
  border-radius: 66px;
`;

export default styled(Timer)``;
