import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Section, { Text } from "./Section";
function TrackingService(props: Styleable) {
  return (
    <Section title="tracking for retailers" className={props.className}>
      <Text>
        We understand keeping an eye on your operation is an important part of
        delivering the best customer journey possible. BJS offers ready to go
        integrations to get data out of its systems and into yours - this way
        you're always up-to-date with what's happening. BJS is also integrated
        into leading tracking and shipping platforms such as Parcel Perform and
        Aftership.
      </Text>
    </Section>
  );
}

export default styled(TrackingService)``;
