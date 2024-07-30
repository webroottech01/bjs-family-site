import { WithChildren, Styleable } from "@bjsdistribution/components";
import { motion } from "framer-motion";
import styled from "styled-components";

type Props = Styleable & WithChildren;

function ExpandedMenu(props: Props) {
  return (
    <Container
      className={props.className}
      layout
      initial={{ height: 0 }}
      animate={{ height: "auto" }}
      exit={{ height: 0 }}
    >
      {props.children}
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  margin: 0px 30px;

  > :not(:last-child) {
    margin-bottom: 25px;
  }
  border-top: 1px solid rgba(58, 54, 48, 0.1);
`;

export default styled(ExpandedMenu)``;
