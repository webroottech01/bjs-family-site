import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { motion } from "framer-motion";

interface Props {
  selected: number;
  onSelect: (index: number) => void;
  total: number;
}

function CurrentReviewIndicator({
  selected,
  onSelect,
  className,
  total,
}: Props & Styleable) {
  return (
    <Container className={className}>
      {Array.from({ length: total }).map((_, index) => {
        const isSelected = selected === index;
        const opacity = isSelected ? 1 : 0.25;
        return (
          <Part
            onClick={() => onSelect(index)}
            key={index}
            whileHover={{
              backgroundColor: "#5c5853",
            }}
            animate={{
              backgroundColor: `rgba(92, 88, 83, ${opacity})`,
            }}
          />
        );
      })}
    </Container>
  );
}

const Part = styled(motion.div)`
  border-radius: 66px;
  height: 10px;
  width: 50px;
  border-radius: 66px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 10px;
  }
`;

export default styled(CurrentReviewIndicator)``;
