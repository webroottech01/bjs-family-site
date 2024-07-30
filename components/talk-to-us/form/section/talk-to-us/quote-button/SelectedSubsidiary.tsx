import styled from "styled-components";
import { motion } from "framer-motion";
import { Styleable, colours } from "@bjsdistribution/components";

function SelectedSubsidiary(props: Styleable) {
  return <Container className={props.className} layoutId="quote">Your quote</Container>;
}

const Container = styled(motion.div)`
  background: white;
  border-radius: 66px 0px 0px 66px;
  padding: 15px 0px 15px 25px;
  font-weight: bold;
  text-transform: capitalize;
  min-width: 134px;
  max-width: 134px;
`;

export default styled(SelectedSubsidiary)``;
