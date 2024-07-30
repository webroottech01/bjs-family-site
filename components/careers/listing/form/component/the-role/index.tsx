import styled from "styled-components";
import { up, down, only } from "styled-breakpoints";
import { Styleable, Form } from "@bjsdistribution/components";
import InputValidationMessage from "/components/util/InputValidationMessage";
import FormSection from "../../section";
import ReasonableAdjustments from "./ReasonableAdjustments";

const possibleOptions = Form.Options.create(["google", "indeed", "other"]);
const yesNo = Form.Options.create(["yes", "no"]);
const availablilityOptions = Form.Options.create(["days", "weeks", "months"]);

function TheRoleSection(props: Styleable) {
  const form = Form.useForm();
  const { salary: salaryErr } = form.formState.errors;
  const isValidSalaryExp = (input: number): string | boolean => (input >= 0) ? true : "Please provide a valid expected salary";
  return (
    <FormSection
      title={{
        title: "The role",
      }}
      className={props.className}
    >
      <HeardAboutRole
        name="heard"
        label="how did you hear about the role?"
        options={possibleOptions}
        defaultValue={possibleOptions[0]}
      />
      <Form.Inputs.RadioGroup
        name="authorised"
        label="Are you authorised to work in the UK?"
        options={yesNo}
        defaultValue={yesNo[0]}
      />
        <Form.Inputs.Input
          name="salary"
          label="salary expectation"
          type="number"
          min={0}
          required="Please provide a valid expected salary" validate={isValidSalaryExp}
          defaultValue={0}
        />
        {salaryErr?.type === "required" ? <InputValidationMessage>{salaryErr?.message}</InputValidationMessage> : salaryErr?.type === "min" && <InputValidationMessage>Salary cannot be negative</InputValidationMessage>}

      <Form.Inputs.Label.Container
        label="availability duration"
        name="availability"
        for="availability"
        inline={false}
      >
        <AvailabilityContainer>
          <Form.Inputs.Input
            name="availability"
            label={false}
            defaultValue="0"
            min={0}
            type="number"
            width={100}
            onClick={(e) => e.currentTarget.select()}
          />

          <AvailabilityDurationUnit
            name="availabilityUnit"
            label={false}
            options={availablilityOptions}
            defaultValue={availablilityOptions[0]}
            width={300}
          />
        </AvailabilityContainer>
      </Form.Inputs.Label.Container>

      <ReasonableAdjustments />
    </FormSection>
  );
}

const AvailabilityDurationUnit = styled(Form.Inputs.Select)``

const AvailabilityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${AvailabilityDurationUnit} {
    .select__value-container {
      position: initial;
    }
  }
`;

const HeardAboutRole = styled(Form.Inputs.Select)`
  width: 420px;
  ${only("md")} {
    width: 320px;
  }
  ${down("sm")} {
    width: 100%;
  }
`;

export default TheRoleSection;
