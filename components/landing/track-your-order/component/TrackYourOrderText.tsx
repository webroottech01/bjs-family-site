import { Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import { up, down } from "styled-breakpoints";

import useIsMobile from "components/util/useIsMobile";

const orderTrackingUri = process.env.NEXT_PUBLIC_ORDER_TRACKING_ENDPOINT;

function TrackYourOrderText(props: Styleable) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return (
      <Text>
        Looking to <a href={orderTrackingUri} target="_blank">Track Your Order?</a>
      </Text>
    );
  }
  return (
    <Text className={props.className}>
      Looking to track your order? Head over to our{" "}
      <a href={orderTrackingUri} target="_blank">Tracking Service</a>
    </Text>
  );
}

const Text = styled.span`
  color: white;
  transition: color 0.3s;
  a {
    color: white;
    text-decoration: underline;
  }

  ${up("md")} {
    font-size: 16px;
  }
  ${down("sm")} {
    font-size: 14px;
    white-space: nowrap;
  }
`;

export default styled(TrackYourOrderText)``;
