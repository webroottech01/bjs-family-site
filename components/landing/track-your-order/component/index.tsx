import styled from "styled-components";

import Container from "./Container";

import OrderBody from "./OrderBody";
import Close from "./Close";

import { useTrackOrderVisible } from "components/landing/track-your-order/useOrderTrackPreferences";
import OrderIllustration from "./OrderIllustration";

function TrackYourOrder() {
  const isTrackOrderVisible = useTrackOrderVisible();
  if (!isTrackOrderVisible) {
    return null;
  }

  return (
    <Container>
      <OrderBody />
      <Close />
    </Container>
  );
}

export default TrackYourOrder;
