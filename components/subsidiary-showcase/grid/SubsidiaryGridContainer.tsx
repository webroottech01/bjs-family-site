import styled, { css } from "styled-components";

import { down, only } from "styled-breakpoints";
import { motion } from "framer-motion";

const SeperatorStyling = css`
  position: absolute;
  right: 0px;
  margin: 0 auto;
  height: 50%;
  top: 25%;
  width: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: RGBA(0, 0, 0, 0.2);

  content: "";
`;

const Container = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 300px);

  ${only("md")} {
    grid-template-columns: repeat(4, 248px);
  }

  ${down("sm")} {
    grid-template-columns: repeat(4, 190px);
  }

  box-sizing: border-box;
  cursor: pointer;
//  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  > div {
    position: relative;
    ::after {
      ${SeperatorStyling};
    }
  }
`;

export default Container