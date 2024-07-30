import { useEffect, useState } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { WithChildren, Styleable } from "@bjsdistribution/components";
import { motion } from "framer-motion";
import { useSetShowingBackground } from "./modal-store";

interface Props extends WithChildren, Styleable {
  showing: boolean;
  hideBackground?: boolean;
}

function Modal(props: Props) {
  const [isBrowser, setIsBrowser] = useState(false);
  const setShowingBackground = useSetShowingBackground();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (props.hideBackground) {
      setShowingBackground(false);
    }
    return () => setShowingBackground(true);
  }, [props.hideBackground]);

  const modalContent = props.showing ? (
    <StyledModalOverlay
      className={props.className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
}

const StyledModalOverlay = styled(motion.div)`
  display: flex;
  background: white;
  z-index: 10000;
`;

export default Modal;
