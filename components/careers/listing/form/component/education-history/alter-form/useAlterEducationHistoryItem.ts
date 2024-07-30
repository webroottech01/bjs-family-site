import { Notifications, Form } from "@bjsdistribution/components";

import EducationHistoryItem from "components/careers/listing/form/component/education-history/EducationHistoryItem";

const toDate = (input: string) => {
  if (!input) {
    return undefined;
  }
  const result = new Date(Date.parse(input));
  return result;
};

function useAlterEducationHistoryItem(
  onAlter: (item: EducationHistoryItem) => void
) {
  const form = Form.useForm();
  const notifications = Notifications.useNotifications();

  const error = (name: string, title = name) => {
    notifications.add({
      title: `Please add a ${title}`,
      id: "add education history",
      type: "failure",
    });
    form.setFocus(name);
  };

  const add = () => {
    const values = form.getValues();

    const qualification = values["qualification"];
    const grade = values["grade"];
    const from = toDate(values["from"]);
    const to = toDate(values["to"]);
    const description = values["education description"];
    const institution = values["institution"];

    if (!qualification) {
      error("qualification", "qualification name");
    } else if (!grade) {
      error("grade");
    } else if (!institution) {
      error("institution");
    } else if (!from) {
      error("from", "duration from");
    } else if (!to) {
      error("to", "duration till");
    } else if (!description) {
      error("education description", "brief description");
    } else {
      const entry = {
        qualification,
        grade,
        institution,
        from,
        to,
        description,
      };
      onAlter(entry);
    }
  };

  return add;
}

function usePopulate() {
  const form = Form.useForm();

  const populate = (item: EducationHistoryItem): void => {
    for (let [key, value] of Object.entries(item)) {
      if (key === "description") {
        key = "education description";
      }
      form.setValue(key, value);
    }
  };
  return populate;
}

function useClear() {
  const form = Form.useForm();
  const keys: string[] = [
    "education description",
    "from",
    "grade",
    "institution",
    "qualification",
    "to",
  ];
  const clear = () => {
    for (const key of keys) {
      form.setValue(key, "");
    }
  };

  return clear;
}

export { usePopulate, useClear };
export default useAlterEducationHistoryItem;
