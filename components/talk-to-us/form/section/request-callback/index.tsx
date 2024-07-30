import styled from "styled-components";
import {down} from "styled-breakpoints";
import { Form } from "@bjsdistribution/components";
import SubmissionSection from "./SubmissionSection";

const Input = Form.Inputs.Input;

function RequestCallback() {
  return (
    <Container>
      <Input name="first name" width={300} />
      <Input name="surname" width={300} />
      <Input name="company" width={300} />
      <Input name="email address" width={640} />
      <Input name="telephone number" width={300} />
      <Form.Inputs.Select
        name="interested"
        label="Service/s interested in"
        placeholder="Please select"
        options={Form.Options.create(["idk"])}
        width={300}
      />
      <Input name="date" label="date to contact you" type="date"/>
      <Input name="time" label="preferred time" type="time" />
      <SubmissionSection/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
 // justify-content:space-between ;
  gap: 60px 40px;
  padding-right: 140px;

  ${down("sm")} {
    gap: 0px;
    padding: 0px;
    flex-direction: column;
  }

`;

export default RequestCallback;
