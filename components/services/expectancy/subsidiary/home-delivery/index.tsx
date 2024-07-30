import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Bulletpoint } from "components/services/expectancy/entry";
import BoltOnOptions from "./BoltOnOptions";
import Warehousing from "./Warehousing";
import { Styleable } from "@bjsdistribution/components";

import Container from "components/services/expectancy/subsidiary/Container";

const Row = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  > :not(:last-child) {
    margin-bottom: 60px;
  }
  flex-basis: 33%;

  ${down("sm")} {
    > :not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;

function HomeDeliveryExpectancy(props: Styleable) {
  return (
    <Container className={props.className}>
      <Row>
        <Bulletpoint
          title="your customers can expect"
          entries={[
            "Call to arrange a suitable delivery time",
            "Three hour delivery window",
            "Pre-delivery courtesy call prior to arrival",
            "Place furniture in a room of their choice",
            "Build and install furniture",
            "Remove and dispose of packaging",
            "Recycle or dispose of old furniture",
            "Smiles on their doorstep, whatever the weather",
          ]}
        />
        <Bulletpoint
          title="we can offer you"
          entries={[
            "Products collected from your warehouse or supplier",
            "Store & manage your stock in our own warehouse",
            "Full delivery management system",
            "Ensure that we deliver your items without damage",
          ]}
        />
      </Row>
      <Row>
        <BoltOnOptions />
      </Row>
      <Row>
        <Warehousing />
      </Row>
    </Container>
  );
}

export default styled(HomeDeliveryExpectancy)``;
