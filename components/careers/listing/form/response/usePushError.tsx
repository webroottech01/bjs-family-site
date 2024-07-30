import { Form, Notifications } from "@bjsdistribution/components";

const ERROR_LIMIT = 4;

function usePushError() {
  const notifications = Notifications.useNotifications();

  function pushError(id: string, e: any) {
    const error = createError(id, e, "Missing required fields");
    notifications.add(error);
  }

  return pushError;
}

const createError = (id: string, errors: any, errorTitle?: string): any => {
  return {
    title: errorTitle ?? "Please amend the following errors",
    body: computeDescription(errors),
    type: "failure",
    id,
  };
};

const computeDescription = (errors: any): Record<string, string> => {
  const result: Record<string, string> = {};
  
  let count = 0;
  for (const key of Object.keys(errors)) {
    if (count === ERROR_LIMIT) {
      break;
    }
    const error = errors[key];
    let errorMessage = error.message ?? Object.keys(error)[0];
    errorMessage =
      errorMessage.substring(0, 1).toUpperCase() +
      errorMessage.substring(1) +
      ".";
    result[key] = errorMessage;
    count++;
  }
  return result;
};

export default usePushError;
