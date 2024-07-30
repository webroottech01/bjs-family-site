import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Form } from "@bjsdistribution/components";
import SubsidiaryProps from "components/subsidiary-showcase/SubsidiaryProps";
import BookingQuote, { FormContainer } from "./BookingQuote";
import ProductTypeSelect from "./ProductTypeSelect";
import ServiceLevelSelect from "./ServiceLevelSelect";
import InputValidationMessage from "/components/util/InputValidationMessage";

const POSTCODE_PATTERN: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

function GenericBookingQuote({ className, subsidiary }: SubsidiaryProps) {

  const form = Form.useForm();
  const { "expected weekly volume": expectedWeeklyVolumeErr } = form.formState.errors;
  const isValidWeeklyVolume = (input: number): string | boolean => (input >= 0) ? true : "Please provide a valid weekly volume";
  return (
    <Container subsidiary={subsidiary} className={className}>
      <RegistrationInput
        name="location"
        label="location/postcode"
        width={300}
      />
      <ServiceLevelSelect />
      <ProductTypeSelect />
      <InputFieldWrapper>
        <Form.Inputs.Input name="expected weekly volume" label="expected weekly volume" type="number" min={0} required="Please provide a valid weekly volume" validate={isValidWeeklyVolume} defaultValue={0} />
        {expectedWeeklyVolumeErr?.type === "required" ? <InputValidationMessage>{expectedWeeklyVolumeErr?.message}</InputValidationMessage> : expectedWeeklyVolumeErr?.type === "min" && <InputValidationMessage>Weekly volume cannot be negative</InputValidationMessage>}
      </InputFieldWrapper>
    </Container>
  );
}

const InputFieldWrapper = styled.div``;

const RegistrationInput = styled(Form.Inputs.Input)`
  ${down("md")} {
    width: 640px;
  }
`;

const Container = styled(BookingQuote)`
  @media only screen and (max-width: 800px) {
    ${FormContainer} {
      flex-direction: column;
    }

    ${Form.Inputs.Label.Container} {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;

export default styled(GenericBookingQuote)``;
