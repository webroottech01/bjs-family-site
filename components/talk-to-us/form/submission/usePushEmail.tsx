import { formBody } from "components/careers/listing/form/response/usePushEmail";
import TalkToUsSubmissionView from "./TalkToUsSubmissionView";
import renderToString from "preact-render-to-string";

const endpoint = `${process.env.NEXT_PUBLIC_EMAIL_ENDPOINT}/v1/website/talk-to-us`;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;

function usePushEmail() {
  const push = async (
    values: any,
    token: string
  ): Promise<boolean | string> => {
    const html = generateHtml(values);
    const body = formBody(html, [], token, "Talk to us enquiry");

    const response = await fetch(endpoint, {
      method: "POST",
      // mode: "no-cors",
      headers: {
        Key: API_KEY,
        Accept: "application/json",
      },
      body,
    });

    if (response.ok) {
      return true;
    }
    const json = await response.json();
    const message = await json.message;
    return message;
  };
  return push;
}

const generateHtml = (values: any): string => {
  const htmlString = renderToString(<TalkToUsSubmissionView values={values} />);
  return htmlString;
};

export default usePushEmail;
