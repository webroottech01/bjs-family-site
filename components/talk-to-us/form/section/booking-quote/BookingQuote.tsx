import { useMemo } from "react";
import styled from "styled-components";
import { only, down } from "styled-breakpoints";
import { useShowHeader } from "./header-store";
import { Styleable, WithChildren, Form } from "@bjsdistribution/components";
import { motion } from "framer-motion";
import InputValidationMessage from "/components/util/InputValidationMessage";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

import Submission from "./submission";

type Props = {
  subsidiary: Subsidiary;
} & Styleable &
  WithChildren;

const MOBILE_NUMBER_PATTERN = /^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$/;
const LANDLINE_NUMBER_PATTERN = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/;
const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

function BookingQuote({ subsidiary, className, children }: Props) {
  const showHeader = useShowHeader();
  const form = Form.useForm();
  const { "email address": emailAddressErr, "telephone number": telephoneNumberErr } = form.formState.errors;
  const subsidiaryName = useMemo(() => {
    if (subsidiary === "constructit") {
      return "Construct IT";
    }
    return subsidiary;
  }, [subsidiary]);

  return (
    <Container
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {showHeader && (
        <Header>
          <Title>{subsidiaryName} booking quote</Title>
          <Subtitle>
            We know forms can be tedious but the more you tell us the faster
            we’ll be able to help – it’ll be worth it, we promise!
          </Subtitle>
        </Header>
      )}
      <FormContainer>
        <Form.Inputs.Input
          name="name"
          label="your name"
          width={300}
          required="Please provide a name"
        />
        <Form.Inputs.Input
          name="company"
          label="company name"
          width={300}
          required="Please provide your company name"
        />
        <InputFieldWrapper>
          <Form.Inputs.Input
            name="telephone number"
            label="telephone number"
            width={300}
            required="Please provide a contact number"
            validate={isValidContactNumber}
          />
          {telephoneNumberErr?.type === "validate" && <InputValidationMessage>Please provide a valid phone number</InputValidationMessage>}
        </InputFieldWrapper>
        <InputFieldWrapper>
          <EmailInput
            name="email address"
            label="email address"
            required="Please provide a contact email"
            type="email"
            pattern={{
              value: EMAIL_PATTERN,
              message: "Please provide a valid email address",
            }}
          />
          {emailAddressErr?.type === "pattern" && <InputValidationMessage>{emailAddressErr?.message}</InputValidationMessage>}
        </InputFieldWrapper>
        {children}
        <Submission />
      </FormContainer>
    </Container>
  );
}

const isValidContactNumber = (input: string): string | boolean => {
  const success =
    MOBILE_NUMBER_PATTERN.test(input) || LANDLINE_NUMBER_PATTERN.test(input);
  if (!success) {
    return "Please provide a valid contact number";
  }
  return true;
};

const InputFieldWrapper = styled.div``;

const EmailInput = styled(Form.Inputs.Input)`
  width: 600px;

  @media only screen and (max-width: 1200px) {
    width: 400px;
  }
  ${only("md")} {
    width: 300px;
  }

  ${down("sm")} {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  display: flex;

  ${down("sm")} {
    flex-direction: column;
  }
  > :not(:last-child) {
    margin-right: 40px;

    ${down("sm")} {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  ${down("sm")} {
    ${Form.Inputs.Label.Container} {
      width: 100%;
    }
  }

  flex-wrap: wrap;
`;

const Title = styled.span`
  font-family: "Eveleth";
  font-size: 20px;
`;

const Subtitle = styled.span`
  font-size: 14px;
  max-width: 130ch;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;

  ${Header} {
    margin-bottom: 55px;
  }

  ${Submission} {
    margin-top: 15px;
    padding-bottom: 135px;

    @media only screen and (max-width: 1200px) {
      padding-bottom: 30px;
    }
  }

  ${down("md")} {
    padding: 40px;
  }
`;

export { FormContainer };
export default BookingQuote;
