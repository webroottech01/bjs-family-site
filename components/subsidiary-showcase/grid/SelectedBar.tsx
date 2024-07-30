import styled from "styled-components";
import { motion } from "framer-motion";
import { Styleable, colours } from "@bjsdistribution/components";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import useSubsidiary from "./SubsidiaryContext";

const ELEMENT_WIDTH = 190;
const TOTAL_ELEMENT_WIDTH = ELEMENT_WIDTH * 4;

const subsidiaries: Subsidiary[] = [
  "home delivery",
  "extra",
  "haulage",
  "constructit",
];

function SelectedBar(props: Styleable) {
  const [selected, setSelected] = useSubsidiary();
  const index = subsidiaries.indexOf(selected);

  return (
    <Container className={props.className} layout>
      <SelectedElement
        index={index}
        animate={{
          left: index * ELEMENT_WIDTH,
        }}
        transition={{
          type: "tween",
         // duration: 0.5,
        }}
      />
    </Container>
  );
}

const SelectedElement = styled(motion.div)<{ index: number }>`
  min-width: ${ELEMENT_WIDTH}px;
  max-width: ${ELEMENT_WIDTH}px;
  min-height: 5px;
  background: #ffc805;
  border-radius: 66px 66px 0px 0px;
  position: absolute;
  top: -5px !important;
  z-index: 5;
`;

const Container = styled(motion.div)`
  min-width: ${TOTAL_ELEMENT_WIDTH}px;
  max-width: ${TOTAL_ELEMENT_WIDTH}px;
  top: 0px;
  position: absolute;
`;
export default SelectedBar;
