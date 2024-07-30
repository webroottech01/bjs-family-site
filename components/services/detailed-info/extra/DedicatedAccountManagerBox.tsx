import styled from "styled-components";
import ExtraBox from "./ExtraBox";
import { ImageContainer } from "components/services/detailed-info/blueprint/Box";

import dedicatedAccountManager from "public/images/services/extra/dedicated-account-manager.svg";

function DedicatedAccountManagerBox() {
  return (
    <Box text="dedicated account manager" image={dedicatedAccountManager} />
  );
}

const Box = styled(ExtraBox)`
  ${ImageContainer} {
    min-height: 62px;
    width: 108px;
  }

`;

export default DedicatedAccountManagerBox;
