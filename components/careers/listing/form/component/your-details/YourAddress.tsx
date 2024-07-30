import { Styleable, Form, Button, Page } from "@bjsdistribution/components";
import Container, {AddressInput} from "./Styles";
import styled from "styled-components";

function YourAddress(props: Styleable) {
  return (
  /*  <Form.Inputs.Label.Container
      label="your address"
      name="your address"
      for="your address"
      inline={false}
    >*/
      <Container className={props.className}>
        <AddressInput
          name={"address line 1"}
          width={400}
          required="Please provide an address line"
        />
        <AddressInput
          name={"address line 2"}
          width={400}
        />
        <Form.Inputs.Input
          name={"city"}
          placeholder="City"
          width={350}
          required="Please provide a city"
        />
        <PostcodeInput
          name={"postcode"}
          placeholder="Postcode"
          required="Please provide a postcode"
        />
      </Container>
   // </Form.Inputs.Label.Container>
  );
}

const PostcodeInput = styled(Form.Inputs.Input)`
  flex: 1;
  input {
    width: 100%;
  }
`;

function SmartLookup() {
  //Currently not in use
  return (
    <>
      <Form.Inputs.Input
        name={"your address"}
        placeholder="Enter post code"
        label={false}
        width={200}
      />
      <Button wide>Search</Button>
      <Page.Link>Enter your address manually</Page.Link>
    </>
  );
}

export default YourAddress;
