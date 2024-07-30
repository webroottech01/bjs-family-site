import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import { Abstract } from "components/services/expectancy/entry";

import Entry from "./Entry";

import clientPortal from "/public/images/services/extra/customers-expect/client.png";
import roomOfChoice from "/public/images/services/extra/customers-expect/room-of-choice.png";
import furniture from "/public/images/services/extra/customers-expect/furniture.png";
import assembly from "/public/images/services/extra/customers-expect/assembly.png";
import dedicated from "/public/images/services/extra/customers-expect/dedicated.png";
import collections from "/public/images/services/extra/customers-expect/collections.png";

function YourCustomersCanExpect(props: Styleable) {
  return (
    <Abstract title="Your customers can expect" className={props.className}>
      <Entries>
        <Entry
          title="client portal with tracking functionality"
          image={clientPortal}
        />
        <Entry title="room of choice delivery" image={roomOfChoice} />
        <Entry title="furniture disposal" image={furniture} />
        <Entry title="assembly" image={assembly} />
        <Entry
          title="dedicated customer service and customer care departments"
          image={dedicated}
        />
        <Entry title="collections and exchanges" image={collections} />
      </Entries>
    </Abstract>
  );
}

const Entries = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  justify-content: space-between;


  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default styled(YourCustomersCanExpect)``;
