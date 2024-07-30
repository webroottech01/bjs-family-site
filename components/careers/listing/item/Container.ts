import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, only, down } from "styled-breakpoints";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
  ${up("lg")} {
    padding: 60px;
  }
  ${only("md")} {
    padding: 40px;
  }
  ${down("sm")} {
    padding: 20px;
  }
`;

export default Container