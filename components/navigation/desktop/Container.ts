import styled from "styled-components";
import { up, down } from "styled-breakpoints";

import NavigationEntries from "./DesktopNavigationItems";
import BjsFamilyLogo from "components/util/BjsFamilyLogoDesktop";
import TalkToUsButton from "components/talk-to-us/button";

const Container = styled.div`
  display: flex;
  align-items: center;

  ${up("lg")} {
    padding: 18px 40px;
  }

  ${down("md")} {
    padding: 18px 30px;
  }

  background: white;
  box-shadow: 0px 3px 10px #0000001a;

  ${BjsFamilyLogo} {
    cursor: pointer;
  }

  ${TalkToUsButton} {
    margin-left: 30px;
  }
  ${NavigationEntries} {
    margin-left: auto;
  }
`;

export default Container;
