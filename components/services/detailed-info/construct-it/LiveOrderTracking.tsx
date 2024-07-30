import styled from "styled-components";
import { Box as InternalBox } from "components/services/detailed-info/blueprint";

import image from "public/images/services/construct-it/live-order-tracking.svg";

function LiveOrderTracking() {
  return <Box text="live order tracking" image={image} />;
}

const Box = styled(InternalBox)`
  img {
    height: 58px;
    width: 66px;
  }
`;

export default styled(LiveOrderTracking)``;
