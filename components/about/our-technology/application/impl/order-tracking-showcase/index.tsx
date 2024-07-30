import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";
import ApplicationShowcase from "components/about/our-technology/application";
import TrackingImage from "./TrackingImage";

function OrderTrackingApplicationShowcase(props: Styleable) {
  return (
    <ApplicationShowcase
      title="order tracking"
      type="Web App"
      className={props.className}
      image={<TrackingImage />}
    >
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Content>
    </ApplicationShowcase>
  );
}

const Content = styled.div`
  display: flex;

  flex-direction: column;
  ${down("md")} {
  }
`;

export default OrderTrackingApplicationShowcase;
