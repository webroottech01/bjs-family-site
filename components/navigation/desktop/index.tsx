import styled from "styled-components";

import Container from "./Container";

import NavigationEntries from "./DesktopNavigationItems";
import BjsFamilyLogo from "components/util/BjsFamilyLogoDesktop";
import TalkToUsButton from "components/talk-to-us/button";

import useGoToHome from "components/navigation/useGoToHome";

function DesktopNavigationBar() {
  const goToHome = useGoToHome();

  return (
    <Container>
      <BjsFamilyLogo onClick={goToHome} />
      <NavigationEntries />
      <TalkToUsButton />
    </Container>
  );
}

export default DesktopNavigationBar;
