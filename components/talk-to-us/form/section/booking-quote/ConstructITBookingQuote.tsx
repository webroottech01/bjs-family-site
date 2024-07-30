import { Form } from "@bjsdistribution/components";
import BookingQuote from "./BookingQuote";
import InputValidationMessage from '/components/util/InputValidationMessage';
import { compareTodayAndCollectionDates, compareCollectionAndDeliveryDates, compareTodayAndDeliveryDates, compareAllDates } from "components/talk-to-us/utils";
import styled from "styled-components";

const vehicleTypeOptions = Form.Options.create([
  "articulated crane",
  "drawbar crane",
  "closed extender crane",
  "rigid crane",
  "articulated curtainsider/flatbed",
]);

function ConstructITBookingQuote(props: any) {
  const { className, todayDate, getMinDeliveryDate } = props;
  const form = Form.useForm();
  const collectionDate = form.watch("collection date");
  const deliveryDate = form.watch("delivery date");
  const { "collection date": collectionDateError, "delivery date": deliveryDateError } = form.formState.errors;
  const cd = new Date(collectionDate).valueOf();
  const dd = new Date(deliveryDate).valueOf();
  const td = new Date(todayDate).valueOf();
  const minDeliveryDate = getMinDeliveryDate(new Date(compareTodayAndCollectionDates(cd, td)).toLocaleDateString("en-GB").split('/').reverse().join('-'));
  const sameDateErrMsg = compareCollectionAndDeliveryDates(cd, dd);
  const currentDeliveryDateMsg = compareTodayAndDeliveryDates(td, dd);
  const futureDeliveryDateMsg = compareAllDates(td, cd, dd);
  return (
    <BookingQuote subsidiary="constructit" className={className}>
      <Form.Inputs.Input name="collection post code" width={160} />
      <Form.Inputs.Input name="delivery post code" width={160} />
      <InputFieldWrapper>
        <Form.Inputs.Input name="collection date" label="collection date" type="date" width={240} min={todayDate} max="9999-12-31" />
        {sameDateErrMsg ? <InputValidationMessage>{sameDateErrMsg}</InputValidationMessage> : collectionDateError && <InputValidationMessage>Collection date must not be in past</InputValidationMessage>}
      </InputFieldWrapper>
      <InputFieldWrapper>
        <Form.Inputs.Input name="delivery date" label="delivery date" type="date" width={240} min={minDeliveryDate} max="9999-12-31" disabled={collectionDate ? false : true} />
        {futureDeliveryDateMsg ? <InputValidationMessage>{futureDeliveryDateMsg}</InputValidationMessage> : sameDateErrMsg ? <InputValidationMessage>{sameDateErrMsg}</InputValidationMessage> : currentDeliveryDateMsg ? <InputValidationMessage>{currentDeliveryDateMsg}</InputValidationMessage> : deliveryDateError && <InputValidationMessage>Delivery date must not be in past</InputValidationMessage>}
      </InputFieldWrapper>
      <Form.Inputs.Select
        name="vehicle type required"
        options={vehicleTypeOptions}
      />
    </BookingQuote>
  );
}

const InputFieldWrapper = styled.div``;

export default styled(ConstructITBookingQuote)``;