import { faTimes } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useSetOpen } from "./mobile-navigation-state";

import { motion } from "framer-motion";
function CloseIcon() {
  const setOpen = useSetOpen();
  const close = () => setOpen(false);
  return (
      <FontAwesomeIcon icon={faTimes} height={25} onClick={close} />
  );
}

const Container = styled(motion.div)``;

export default CloseIcon;
