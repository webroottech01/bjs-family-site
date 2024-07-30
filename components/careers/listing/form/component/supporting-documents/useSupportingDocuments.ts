import { useFieldArray } from "react-hook-form";
import { Form } from "@bjsdistribution/components";

function useSupportingDocuments() {
  const form = Form.useForm();
  const { fields, append, remove } = useFieldArray({
    control: form.control as any,
    name: "supporting documents",
  });

  return { fields, append, remove };
}

export default useSupportingDocuments;
