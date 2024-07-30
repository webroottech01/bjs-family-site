import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import List, {
  ListItem,
} from "components/subsidiary-showcase/detailed-info/blueprint/points/List";
import Section, { Text } from "./Section";

const points = [
  "Using ‘what3words’ to suggest a precise delivery location",
  "Tracking our vehicles in real time and letting you direct our team to a precise location and suggest parking spots",
  "Communicating directly with your delivery team and offering flexible order rescheduling and update options directly within our tracking service",
];

function TrackingService(props: Styleable) {
  return (
    <Section title="tracking service" className={props.className}>
      <List>
        {points.map((point) => (
          <ListItem>{point}</ListItem>
        ))}
      </List>
      <Text>
        As for tracking for our partners, we are integrated with leading
        shipping and carrier tracking platforms such as Aftership, Amazon and
        ParcelPerform and offer a suite of APIs to help our clients obtain
        real-time data about their delivery operation.
      </Text>
    </Section>
  );
}

export default styled(TrackingService)``;
