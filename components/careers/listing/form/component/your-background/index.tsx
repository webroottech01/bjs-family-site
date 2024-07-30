import styled from "styled-components";
import { Styleable, Form } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import FormSection from "components/careers/listing/form/section";
import TextArea from "components/careers/listing/form/section/TextArea";
function YourBackground(props: Styleable) {
  const form = Form.useForm();

  return (
    <FormSection
      title={{
        title: "Your background",
      }}
      className={props.className}
    >
      <BackgroundTextArea
        {...form.register("background", {
          required: "Please provide a brief background about yourself",
        })}
        whileFocus={{ height: "500px" }}
      />
    </FormSection>
  );
}

const BackgroundTextArea = styled(TextArea)`
  height: 100px;
  ${down("sm")} {
    height: 200px;
  }
`;

export default YourBackground;
