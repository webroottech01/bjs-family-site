import styled from "styled-components";
import { motion, HTMLMotionProps } from "framer-motion";
import { colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

type Props = React.PropsWithChildren<HTMLMotionProps<"button">>;

function AnimationButton(props: Props) {
  return (
    <AnimationButtonInternal
      whileHover={{
        color: colours.black,
        backgroundColor: colours.yellow,
        borderColor: colours.yellow,
      }}
      {...props}
    />
  );
}

const AnimationButtonInternal = styled(motion.button)`
  border: 2px solid #ffffff;
  border-radius: 666px;
  cursor: pointer;
  font-family: "Eveleth";
  font-size: 18px;

  ${up("md")} {
    min-width: 240px;
  }

  ${down("sm")} {
    min-width: 300px;
  }
  min-height: 66px;
`;

export default styled(AnimationButton)``;
