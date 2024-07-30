import styled from "styled-components";
import { Styleable, Button, Form } from "@bjsdistribution/components";
import { productOptions } from "./ProductTypeSelect";

function PrefillButton(props: Styleable) {
  const form = Form.useForm();

  const copiedOptions = [...productOptions].filter(option => option.label.includes("furniture"));

  const prefill = () => {
      form.setValue("first name", "Kaleem");
      form.setValue("surname", "Raja");
      form.setValue("company", "BJS");
      form.setValue("telephone number", "+44 7552338201");
      form.setValue("email address", "Kaleem_@outlook.com");
      form.setValue("company registration number", "123456");
      form.setValue("product types", copiedOptions);
      form.setValue("expected weekly volume", "5");
  };

  return (
    <Container className={props.className}>
      <Button wide onClick={prefill}>Prefill</Button>
    </Container>
  );
}

const Container = styled.div``;
export default PrefillButton;
