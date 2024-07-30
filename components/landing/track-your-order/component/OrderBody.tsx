import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

import TrackYourOrderText from "./TrackYourOrderText";
import useNavigateToTracker from "components/subsidiary-showcase/notice/useNavigateToTracker";

import OrderIllustration from "./OrderIllustration";

function OrderBody(props: Styleable) {
  const navigateToTracker = useNavigateToTracker();

  return (
    <Container className={props.className} onClick={navigateToTracker}>
      <OrderIllustration />
      <TrackYourOrderText />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${down("xs")} {
    ${OrderIllustration} {
      display: none;
    }
  }

  > :not(:last-child) {
    margin-right: 14.5px;
  }

  :hover {
    ${TrackYourOrderText} {
      a {
        color: ${colours.yellow};
      }
    }
  }
`;

export default styled(OrderBody)``;
