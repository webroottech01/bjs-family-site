import styled from "styled-components";
import { up, only, down } from "styled-breakpoints";
import { motion } from "framer-motion";
import Page from "./Page";

import ContentPiece from "./ContentPiece";

export { default as ReadMore } from "./ReadMore";
export { default as ExplanativeQuote } from "./ExplanativeQuote";

const Header = styled(motion.div)`
  display: flex;
  width: 100%;
  position: relative;
  font-size: 16px;

  ${only("md")} {
    > :not(:last-child) {
      margin-bottom: 40px;
    }
  }

  ${up("lg")} {
    justify-content: space-between;
  }

  ${down("md")} {
    flex-direction: column;
  }

  margin-bottom: 60px;
`;

export { Header, ContentPiece };

export default Page;
