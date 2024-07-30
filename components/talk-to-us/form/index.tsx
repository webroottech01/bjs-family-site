import styled from "styled-components";
import { down } from "styled-breakpoints";
import { useSelectedSubsidiaryValue } from "components/talk-to-us/store";
import Modal from "../../util/modal";
import Desktop from "./desktop";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import TalkToUsLanding from "../landing";
import { useEffect } from "react";
import { useSetShowingBackground } from "components/util/modal/modal-store";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function TalkToUsForm() {
  const setShowBackground = useSetShowingBackground();

  useEffect(() => {
    setShowBackground(false);
    return () => setShowBackground(true);
  });
  return (
    <TalkToUsModal showing>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
      >
        <TalkToUsContent />
      </GoogleReCaptchaProvider>
    </TalkToUsModal>
  );
}

function TalkToUsContent() {
  const isTabletOrLower = useIsTabletOrSmaller();

  const selected = useSelectedSubsidiaryValue();

  if (!selected || isTabletOrLower) {
    return <TalkToUsLanding />;
  }
  return <Desktop />;
}

const TalkToUsModal = styled(Modal)`
  //position: fixed;
  left: 0;
  overflow-y: scroll;
  background-color: gba(255,255,255,0.95);
  width: 100%;

  ${down("md")} {
    height: 100%;
  }

  padding: 40px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1880px) {
    //This is where constructIT begins to get cut off, going to tablet padding helps this
    padding: 20px;
  }

  @media only screen and (max-width: 1225px) {
    //This is where constructIT begins to get cut off, going to tablet padding helps this
    padding: 0px;
  }

  ${down("sm")} {
    padding: 0px;
  }
`;

export default TalkToUsForm;
