import styled from "styled-components";
import { useState, useEffect } from "react";
import { Styleable, colours } from "@bjsdistribution/components";
import MoreInfoHeader from "./MoreInfoHeader";
import ReactDOM from "react-dom";
import { useSetShowingBackground } from "components/util/modal/modal-store";
import MoreInfoContent from "./MoreInfoContent";

function MoreInfo(props: Styleable) {
  return (
    <Container className={props.className}>
      <MoreInfoHeader />
      <MoreInfoContent />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 680px) {
    height: 100%;
    width: 100% !important;
  }
  ${MoreInfoHeader} {
    border-radius: 20px 20px 0px 0px;
  }
`;

const MoreInfoModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent linear-gradient(1deg, #1c2121 0%, #30373a 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  z-index: 5000;

  display: flex;
  align-items: center;
  justify-content: center;

  ${Container} {
    width: fit-content;
  }

  @media only screen and (max-width: 680px) {
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
  }
`;

function MoreInfoIndex() {
  const [isBrowser, setIsBrowser] = useState(false);
  const hideBackground = useSetShowingBackground();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return ReactDOM.createPortal(
    <MoreInfoModal>
      <MoreInfo />
    </MoreInfoModal>,
    document.body
  );
}

export default MoreInfoIndex;
