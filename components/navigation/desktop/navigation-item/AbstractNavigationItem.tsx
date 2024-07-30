import styled from "styled-components";
import { motion } from "framer-motion";
import { Styleable, WithChildren, colours } from "@bjsdistribution/components";

interface Props extends Styleable, WithChildren {
  isSelected: boolean;
}

function AbstractNavigationItem({ isSelected, className, children }: Props) {
  return (
    <Container className={className}>
      {children}
      {isSelected && (
        <HighlightedItem
          layoutId="underline"
          animate={{
            background: isSelected ? colours.yellow : "transparent",
          }}
        />
      )}
      {!isSelected && <NonHighlightedItem />}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const HighlightedItem = styled(motion.div)`
  min-height: 2px;
  width: 100%;
`;

const NonHighlightedItem = styled(motion.div)`
  min-height: 2px;
  width: 100%;
`;

export default styled(AbstractNavigationItem)``;
