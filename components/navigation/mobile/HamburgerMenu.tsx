import styled from "styled-components";
import { motion } from "framer-motion";
import { Styleable } from "@bjsdistribution/components";

import { useToggle } from "./mobile-navigation-state";

function HamburgerMenu(props: Styleable) {
  const toggle = useToggle();
  return (
    <Container
      className={props.className}
      onClick={toggle}

    >
      <Top />
      <Middle />
      <Bottom />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;


  > :not(:last-child) {
    margin-bottom: 6px;
  }
`;

const Line = styled.div`
  min-height: 4px;
  border-radius: 66px;
  background: black;
  content: "";
`;

const Top = styled(Line)`
  width: 32px;
`;

const Middle = styled(Line)`
  width: 22px;
`;

const Bottom = styled(Line)`
  width: 26px;
`;

export default styled(HamburgerMenu)``;
