import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import {up, down} from "styled-breakpoints";
import { motion } from "framer-motion";

import Header from "./Header";
import Content from "./Content";

function TalkToUsLanding(props: Styleable) {
  return (
    <Container className={props.className}>
      <Header />
      <Content />
    </Container>
  );
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  width: 100%;


//  height: 100vh;
  box-shadow: 0px 3px 20px #0000001a;

  ${Header} {
    border-radius: 12px 12px 0px 0px;
  }

  ${down("sm")} {
    height: 100%;
  }
`;

export default TalkToUsLanding;
