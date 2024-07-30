import { SetStateAction, useEffect, useRef, useState } from "react";
import { Styleable, Form } from "@bjsdistribution/components";
import FormSection from "components/careers/listing/form/section";
import YourAddress from "./YourAddress";
import InputValidationMessage from "/components/util/InputValidationMessage";
import styled from "styled-components";
import { down } from "styled-breakpoints";

function YourDetailsSection(props: Styleable) {

  const scrollToContainer = useRef<HTMLDivElement | null>(null);
  const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const PHON_PATTERN = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const form = Form.useForm();
  const { emailAddress: emailAddressErr } = form.formState.errors;
  useEffect(() => {
    if (scrollToContainer) {
      scrollToContainer?.current?.scrollIntoView(true)
    }
  }, [])

  return (
    <Container ref={scrollToContainer}>
      <FormSection
        title={{
          title: "Your details",
        }}
        className={props.className}
      >
        <Input
          name="first name"
          width={300}
          required="please provide a first name"
        />
        <Input
          name="last name"
          width={300}
          required="Please provide a last name"
        />
        <Input
          name="telephone number"
          width={300}
          type="text"
          label="telephone number"
          pattern={{
            value: PHON_PATTERN,
            message: "Please provide a valid contact number",
          }}
          required="Please provide a contact number"
        />
        <InputFieldWrapper>
          <EmailInput
            name="emailAddress"
            label="email address"
            type="email"
            required="Please provide a contact email address"
            pattern={{
              value: EMAIL_PATTERN,
              message: "Please provide a valid email address",
            }}
          />
          {emailAddressErr?.type === "pattern" && <InputValidationMessage>{emailAddressErr?.message}</InputValidationMessage>}
        </InputFieldWrapper>
        {/* <YourAddress /> */}
      </FormSection>
    </Container>
  );
}

const InputFieldWrapper = styled.div``;

const Input = Form.Inputs.Input;

const Container = styled.div``;

const EmailInput = styled(Input)`
  flex: 1;
  margin-right: 0 !important;
  input {
    width: 300px;
    ${down("sm")} {
      width: 100%;
    }
  }
`;

export default YourDetailsSection;
