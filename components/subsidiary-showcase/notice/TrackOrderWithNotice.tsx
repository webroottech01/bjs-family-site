import styled from "styled-components";
import { Button, Styleable } from "@bjsdistribution/components";

import useNavigateToTracker, { orderTrackingUri } from "./useNavigateToTracker";
import Notice from "./Notice";
import { down } from "styled-breakpoints";

function TrackOrderWithNotice(props: Styleable) {
  return (
    <Container text="Looking to track your order?" className={props.className}>
      <Button 
        id="subsidiary-showcase-go-to-track-order"
        colors="dark"
      >
        <a href={orderTrackingUri} target="_blank">
          Track order
        </a>
      </Button>
    </Container>
  );
}

const Container = styled(Notice)`
  ${Button.PlainButton} {
    a {
      text-decoration: none;
      color: white;
    }
    ${down("sm")} {
      font-size: 12px;
      padding: 10px 15px;
    }
  }
`;

export default styled(TrackOrderWithNotice)``;
