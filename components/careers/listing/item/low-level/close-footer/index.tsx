import styled from "styled-components";
import { Styleable, Button, colours } from "@bjsdistribution/components";

import { motion } from "framer-motion";
type Props = {
  close: () => void;
  apply: () => void;
} & Styleable;

function CloseFooter(props: Props) {
  return (
    <Container className={props.className} layout>
      <LessInfo id="item-go-to-less-info" onClick={props.close}>Less info</LessInfo>
      <Button id="item-go-to-apply-now" onClick={props.apply} colors="secondary">Apply now</Button>
    </Container>
  );
}

const LessInfo = styled(Button)`
  background: transparent;
  color: white;
  border: 1px solid white;
`;

const Container = styled(motion.div)`
  display: flex;
  background: ${colours.black};
  padding: 22px 40px;
  width: 100%;
  justify-content: space-between;
`;
export default styled(CloseFooter)``;
