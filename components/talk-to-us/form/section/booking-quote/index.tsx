import { useEffect } from "react";
import { Styleable, Form, Notifications } from "@bjsdistribution/components";
import { useSelectedSubsidiaryValue } from "components/talk-to-us/store";
import GenericBookingQuote from "./GenericBookingQuote";
import HaulageBookingQuote from "./HaulageBookingQuote";
import ConstructITBookingQuote from "./ConstructITBookingQuote";
import usePushError from "components/careers/listing/form/response/usePushError";
import usePushEmail from "components/talk-to-us/form/submission/usePushEmail";
import { useToken } from "/components/careers/listing/form/response/token-store";
import useSubmitState from "./submission/submitting-store";
import { useSetOpen } from "components/talk-to-us/store";
import styled from "styled-components";

function BookingQuote({ className }: Styleable) {
  const selected = useSelectedSubsidiaryValue();
  const form = Form.useForm();
  const date = new Date();
  const currentDate = date.toLocaleDateString("en-GB").split('/').reverse().join('-'); // required format :- yyyy-mm-dd eg-> 2022-10-31

  const getMinDeliveryDate = (collectionDate: string) => {
    const formattedCollectionDate = new Date(collectionDate);
    const deliveryDate = new Date(formattedCollectionDate);
    deliveryDate.setDate(formattedCollectionDate.getDate() + 1);
    const minDeliveryDate = deliveryDate.toLocaleDateString("en-GB").split('/').reverse().join('-');
    return minDeliveryDate;
  }

  const compareDates = (d1: number, d2: number) => {
    if ((d1 - d2) === 0) {
      return "* Collection and Delivery dates can not be same";
    } else if (d1 > d2) {
      return "* Delivery date must not be in past";
    } else {
      return "";
    }
  }

  useEffect(() => {
    if (!selected) {
      return;
    }
    form.setValue("subsidiary", selected);

  }, [selected]);

  if (!selected) {
    return null;
  }
  switch (selected) {
    case "home delivery":
    case "extra":
      return (
        <GenericBookingQuote subsidiary={selected} className={className} />
      );
    case "haulage":
      return <HaulageBookingQuote className={className} todayDate={currentDate} getMinDeliveryDate={getMinDeliveryDate} compareDates={compareDates} />;
    case "constructit":
      return <ConstructITBookingQuote className={className} todayDate={currentDate} getMinDeliveryDate={getMinDeliveryDate} compareDates={compareDates} />;
    default:
      return <div>Cannot find subsisidary {selected}</div>;
  }
}

const id = "talk_to_us";
function BookingQuoteWrapper({ className }: Styleable) {
  const pushError = usePushError();
  const pushEmail = usePushEmail();
  const notifications = Notifications.useNotifications();
  const token = useToken();
  const setTalkToUsOpen = useSetOpen();

  const [, setSubmitting] = useSubmitState();

  const onSubmit = async (values: any) => {
    const clone = { ...values };
    const newValues = {
      ...clone,
      service: clone["service"] === undefined ? [] : clone["service"],
      "product types":
        clone["product types"] === undefined ? [] : clone["product types"],
    };
    if (!token) {
      notifications.add({
        id,
        title: "An error occurred",
        description: "Cannot find token",
        type: "failure",
      });
      return;
    }

    const subsidiary = newValues.subsidiary;

    try {
      setSubmitting(true);
      await pushEmail(newValues, token);
      await notifications.add({
        id,
        title: "Submitted quote",
        description: `Your ${subsidiary} quote has been submitted! Please allow up to 7 working days for us to get back to you!`,
        type: "success",
        duration: 10,
      });

      await setTalkToUsOpen(false);
    } catch (error) {
      const message = (error as any).message;
      notifications.add({
        id,
        title: "An error occurred",
        description: message,
        type: "failure",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const onError = (error: any) => {
    pushError("booking_quote", error);
  };

  return (
    <Form onCancel={() => { }} onSubmit={onSubmit} onError={onError}>
      <BookingQuote className={className} />
    </Form>
  );
}


export default styled(BookingQuoteWrapper)``;
