import styled from "styled-components";
import { Styleable, Form as FormInstance } from "@bjsdistribution/components";
import FormSection from "./section";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useSetTokenState } from "components/careers/listing/form/response/token-store";
import usePushSubmission from "./response/usePushSubmission";
import usePushError from "./response/usePushError";

import {
  YourDetails,
  TheRole,
  AddYourCV,
  YourBackground,
  WorkHistory,
  EducationHistory,
  AdditionalInformation,
  SupportingDocuments,
  Submission,
} from "./component";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useEffect } from 'react';
function Form(props: Styleable) {
  return (
    <Container className={props.className}>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
      >
        <FormSections />
      </GoogleReCaptchaProvider>
    </Container>
  );
}

function FormSections() {
  const submission = usePushSubmission();
  const pushError = usePushError();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const setToken = useSetTokenState();
  const setRecaptchaToken = async (e: any) => {
    if (!executeRecaptcha) {
      console.log(`Recaptcha not ready`);
      return;
    }
    const token = await executeRecaptcha("action");
    if (!token) {
      console.log("No token");
      return;
    }
    setToken(token);
    if (token) submission(e, token);
  }

  useEffect(() => {
    window.scrollTo();
  }, []);

  return (
    <FormInstance
      onCancel={() => { }}
      onSubmit={(e) => setRecaptchaToken(e)}
      onError={(errors) => {
        pushError("careers", errors)
      }}
    >
      <YourDetails />
      {/* <TheRole /> */}
      <AddYourCV />
      {/* <YourBackground />
      <WorkHistory />
      <EducationHistory /> */}
      <SupportingDocuments />
      <AdditionalInformation />
      <Submission />
    </FormInstance>
  );
}

function Info() {
  const form = FormInstance.useForm();
  const name = form.watch("first name");
  return <div>First name: {name}</div>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${FormSection}:nth-child(odd) {
    background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
      0% no-repeat padding-box;
    input {
      border: none;
    }
  }
`;
export default Form;
