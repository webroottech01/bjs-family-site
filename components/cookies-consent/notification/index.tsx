import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import LearnMoreButton from "./LearnMoreButton";
import AcceptButton from "./AcceptButton";

import { motion } from "framer-motion";

function CookiesConsent(props: Styleable) {
  return (
    <Container className={props.className} initial={false} exit={{ height: 0 }}>
      <Text>We use cookies to make your experience the best it can be.</Text>
      <Buttons>
        <LearnMoreButton />
        <AcceptButton />
      </Buttons>
    </Container>
  );
}

const Buttons = styled.div`
  display: flex;
`;

const Text = styled.span`
  color: white;
  font-size: 16px;
  text-align: center;

  @media only screen and (min-width: 790px) {
    white-space: nowrap;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;

  ${Text} {
    margin-right: 15px;
  }
  ${LearnMoreButton} {
    margin-right: 10px;
  }

  padding: 15px 40px;
  z-index: 500000;
  background: linear-gradient(96deg, #758588 0%, #677578 21%, #30373a 100%);
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 20px 20px 0px 0px;

  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  @media only screen and (max-width: 790px) {
    width: 100%;
    ${Text} {
      margin-right: 0px;
      margin-bottom: 10px;
    }

    flex-direction: column;
  }
`;

export default styled(CookiesConsent)``;
