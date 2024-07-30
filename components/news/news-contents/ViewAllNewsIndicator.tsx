import { useMemo } from "react";
import { motion } from "framer-motion";
import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";

import { useNewsContent } from "pages/api/store/newsStore";

const TOTAL_WIDTH = 258;

const Indicator = styled(motion.div)`
  height: 100%;
  background: #5181CC;
  border-radius: 66px;
`;

const Container = styled.div`
  border-radius: 66px;
  width: ${TOTAL_WIDTH}px;
  height: 16px;
  background: rgba(48, 144, 254, 0.1);
  display: flex;
`;

function ViewAllNewsIndicator({ className }: Styleable) {
  const newsList = useNewsContent();
  const percentage = useMemo(() => {
    if (!newsList) {
      return 0;
    }
    const length = newsList.length;
    return (5 / length) * 100;
  }, [newsList]);

  if (!newsList) {
    return null;
  }

  return (
    <Container className={className}>
      <Indicator
        animate={{
          width: `${percentage}%`,
        }}
        transition={{
          duration: 0.8,
        }}
      />
    </Container>
  );
}

export default styled(ViewAllNewsIndicator)``;
