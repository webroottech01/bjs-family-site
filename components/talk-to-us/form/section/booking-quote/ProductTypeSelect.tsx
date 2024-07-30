import { Form } from "@bjsdistribution/components";
import { StandardOptions } from "@bjsdistribution/components/dist/util/options/Option";

const productTypes = [
  "Home furniture",
  "Home Entertainment & Electronics",
  "Garden Furniture",
  "White Goods",
  "Lighting",
  "Mirrors",
  "Gym equipment",
  "Other",
];

const productOptions = Form.Options.create(productTypes);

const name = "product types";

function ProductTypeSelect() {
  const form = Form.useForm();

  const value = form.watch(name) ?? [];

  return (
    <Form.Options.Dropdown
      name={name}
      label="type of product(s)"
      isMulti
      selected={{
        value: value,
        setValue: (options: any) => {
          form.setValue(name, options);
        },
      }}
      allOptions={productOptions}
      resolver={resolver}
      noneSelected="Select some products"
      allSelected="All products"
      width={380}
    />
  );
}

const resolver = (selected: StandardOptions): string => {
  return selected.length + " products";
};

export { productOptions };
export default ProductTypeSelect;
