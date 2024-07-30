import styled from "styled-components";
import ExtraBox from "./ExtraBox";
import { ImageContainer } from "components/services/detailed-info/blueprint/Box";

import noMinimumVolumes from "public/images/services/extra/stacked-boxes.png";

function NoMinimumVolume() {
  return (
    <Box text="no minimum volume requirements" image={noMinimumVolumes} />
  );
}

const Box = styled(ExtraBox)`
  ${ImageContainer} {
    min-height: 82px;
    width: 109px;
  }

`;

export default NoMinimumVolume;
