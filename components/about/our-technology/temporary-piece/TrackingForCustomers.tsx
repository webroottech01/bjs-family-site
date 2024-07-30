import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import Section, { Text } from "./Section";
function TrackingForCustomers(props: Styleable) {
  return (
    <Section title="tracking for your customers" className={props.className}>
      <Text>
        BJS offers a class leading 'order tracking platform' for your customers.
        Built around the customer journey, BJS lets customers remain fully
        up-to-date and in control about what's happening with their order and
        products. From requesting rescheduling to tracking your delivery or
        collection arrival in real time, the customer can do it all on our
        tracking platform.
      </Text>
    </Section>
  );
}

export default styled(TrackingForCustomers)``;
