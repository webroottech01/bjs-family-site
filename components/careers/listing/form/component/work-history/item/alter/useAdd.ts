import { Notifications, Form } from "@bjsdistribution/components";
import WorkHistoryItem from "../WorkHistoryItem";

const toDate = (input: string) => {
  if (!input) {
    return undefined;
  }
  const result = new Date(Date.parse(input));
  return result;
};

function useAdd(onAdd: (item: WorkHistoryItem) => void) {
  const form = Form.useForm();
  const notifications = Notifications.useNotifications();

  const error = (name: string, title = name) => {
    notifications.add({
      title: `Please add a ${title}`,
      id: "add work history",
      type: "failure",
    });
    form.setFocus(name);
  };

  const clear = () => {
    form.setValue("job title", "");
    form.setValue("company", "");
    form.setValue("job from", undefined);
    form.setValue("job to", undefined);
    form.setValue("description", "");
  };

  const add = () => {
    const values = form.getValues();

    const title = values["job title"];
    const company = values["company"];
    const from = toDate(values["job from"]);
    const to = toDate(values["job to"]);
    const description = values["description"];

    if (!title) {
      error("job title");
    } else if (!company) {
      error("company");
    } else if (!from) {
      error("job from", "duration from");
    } else if (!to) {
      error("job to", "duration till");
    } else if (!description) {
      error("description", "brief description");
    } else {
      const entry = {
        title,
        company,
        from,
        to,
        description,
      };

      onAdd(entry);
      clear();
    }
  };

  return add;
}

function usePopulate() {
  const form = Form.useForm();

  const populate = (item: WorkHistoryItem): void => {
    for (let [key, value] of Object.entries(item)) {
      if (key === "from") {
        key = "job from";
      } else if (key === "to") {
        key = "job to";
      } else if (key === "title") {
        key = "job title";
      }
      form.setValue(key, value);
    }
  };

  return populate;
}

export { usePopulate };
export default useAdd;
