import useIsOpen from "./mobile-navigation-state";
import styled from "styled-components";

import { AnimatePresence } from "framer-motion";

import HamburgerMenu from "./HamburgerMenu";
import CloseIcon from "./CloseIcon";

import { motion } from "framer-motion";

function LeftIcon() {
  const isOpened = useIsOpen();
  return (
    <AnimatePresence>
      {isOpened && (
        <Container  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.3}}>
          <CloseIcon />
        </Container>
      )}
      {!isOpened && (
        <Container  initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 0.3}}>
          <HamburgerMenu />
        </Container>
      )}
    </AnimatePresence>
  );
}

const Container = styled(motion.div)`
  height: 100%;
  min-width: 30px;
  content: "";
`;
export default LeftIcon;
