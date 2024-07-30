import JobApplication from "./JobApplication";

import renderToString from "preact-render-to-string";
import EmailView from "./email-view";

import { useSetSubmittingState } from "./submission-store";

const endpoint = `${process.env.NEXT_PUBLIC_EMAIL_ENDPOINT}/v1/website/careers/email`;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

function usePushEmail() {
  const setSubmitting = useSetSubmittingState();

  const push = async (input: JobApplication, token: string) : Promise<boolean | string> => {
    setSubmitting(true);
    const html = generateHtml(input);
    const senderName = `${input.firstName} ${input.surname}`;

    const files = [...input.documents];
    if (input.cv) {
      files.push(input.cv);
    }
    const body = formBody(html, files, token, senderName);

    const response = await fetch(endpoint, {
      method: "POST",
      // mode: "no-cors",
      headers: {
        Key: API_KEY,
        Accept: "application/json",
      },
      body,
    });

    setSubmitting(false);

    if (response.ok) {
      return true;
    }
    const json = await response.json();
    const message = await json.message;
    if (message.toLowerCase() === "unauthorised.") {
      return "You have already submitted an application.";
    }
    return message;
  };
  return push;
}

const RECAPTCHA_PUBLIC_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY!;

export const formBody = (rawHtml: string, files: File[], token: string, senderName: string): FormData => {
  const data = new FormData();
  for (const file of files) {
    data.append("files", file, file.name);
  }
  data.append("Message", rawHtml);
  data.append("SenderName", senderName); 
  data.append("VerificationToken", token);
  data.append("PublicKey", RECAPTCHA_PUBLIC_KEY);
  return data;
};

const generateHtml = (input: JobApplication): string => {
  const htmlString = renderToString(
    <EmailView application={input} />
  );
  return htmlString;
};

export default usePushEmail;
