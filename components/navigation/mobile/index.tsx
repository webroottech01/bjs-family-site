import styled from "styled-components";
import { colours } from "@bjsdistribution/components";

import BjsFamilyLogo from "components/util/BjsFamilyLogoDesktop";
import TalkToUsButton from "/components/talk-to-us/button";

import OpenedNavigation from "./entries";
import NavigationProps from "../NavigationProps";
import LeftIcon from "./LeftIcon";

import useGoToHome from "components/navigation/useGoToHome";
import { useSetOpen } from "./mobile-navigation-state";

function MobileNavigationBar(props: NavigationProps) {
  const goToHome = useGoToHome();
  const setOpen = useSetOpen();
  const close = () => {
    setOpen(false);
    goToHome();
  }

  return (
    <>
      <BarContainer>
        <LeftIcon />
        <BjsFamilyLogo onClick={close} />
        <TalkToUsContainer>
          <TalkToUsButton />
        </TalkToUsContainer>
      </BarContainer>
      <OpenedNavigation entries={props.entries} />
    </>
  );
}

const TalkToUsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 11px 9px;
  background: ${colours.yellow};
  border-radius: 50%;
`;

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  box-shadow: 0px 3px 10px #0000001a;
  z-index: 50;
`;

export default MobileNavigationBar;
