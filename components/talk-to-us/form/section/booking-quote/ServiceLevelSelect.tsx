import styled from "styled-components";
import { Form } from "@bjsdistribution/components";
import { StandardOptions } from "@bjsdistribution/components/dist/util/options/Option";

const oldServiceTypes = [
  "Hallway delivery",
  "Room of Choice",
  "Assembly",
  "Packaging Removal",
  "Packaging Disposal",
  "Collection",
  "Other",
  "Unsure"
];

const serviceTypes = ["1 Man", "2 Man", "collections", "next day", "assembly", "recycle", "unpack", "packaging disposal", "let's chat first"];

const serviceOptions = Form.Options.create(serviceTypes);

const name = "service";

function ServiceLevelSelect() {
  const form = Form.useForm();

  const value = form.watch(name) ?? [];

return  <Form.Options.Dropdown
name={name}
selected={{
  value: value,
  setValue: (options: any) => {
    form.setValue(name, options);
  },
}}
allOptions={serviceOptions}
noneSelected="Select a service"
width={250}
/>
  /*
  return (
    <Form.Inputs.Select
    name={name}
    options={serviceOptions}
    />
    <Form.Options.Dropdown
      name={name}
      selected={{
        value: value,
        setValue: (options: any) => {
          form.setValue(name, options);
        },
      }}
      allOptions={productOptions}
      resolver={resolver}
      noneSelected="Select a service level"
      width={380}
    />
  );*/
}

export default ServiceLevelSelect;
