import styled from "styled-components";
import { Styleable, Form } from "@bjsdistribution/components";

import FormSection from "components/careers/listing/form/section";

import TextArea from "components/careers/listing/form/section/TextArea";

function AdditionalInformation(props: Styleable) {
  const form = Form.useForm();
  return (
    <FormSection
      title={{
        title: "Additional information",
      }}
      className={props.className}
    >
      <AdditionalInfoTextArea
        {...form.register("additional information", {
          required:
            "Please provide some additional information regarding your application",
        })}
        whileFocus={{ height: "500px" }}
      />
    </FormSection>
  );
}


const AdditionalInfoTextArea = styled(TextArea)`
  height: 100px;
`;


export default AdditionalInformation;
