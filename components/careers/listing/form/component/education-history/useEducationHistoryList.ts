import { atom, useRecoilState } from "recoil";
import { Form } from "@bjsdistribution/components";
import { useFieldArray } from "react-hook-form";

import SelectedItem from "components/careers/listing/form/component/common/item/SelectedItem";
import EducationHistoryItem from "./EducationHistoryItem";
import {
  usePopulate,
  useClear,
} from "./alter-form/useAlterEducationHistoryItem";

const ADD_MODE: SelectedItem = {
  mode: "add",
  index: -1,
};

const selectedState = atom<SelectedItem | undefined>({
  key: "education_history_selected",
  default: ADD_MODE,
});

function useEducationHistoryList() {
  const [selected, setSelected] = useRecoilState(selectedState);
  const populate = usePopulate();
  const clear = useClear();

  const form = Form.useForm();

  const { fields, append, update, remove } = useFieldArray({
    control: form.control as any,
    name: "education history" as const,
    //  keyName: "title",
  });

  const add = (item: EducationHistoryItem) => {
    append(item);
  };

  const addAnother = () => {
    setSelected(ADD_MODE);
  };

  const setEditing = (index: number) => {
    setSelected({
      mode: "edit",
      index,
    });

    populate((fields[index] as any) as EducationHistoryItem);
  };

  const edit = (index: number, item: EducationHistoryItem) => {
    update(index, item);
  };

  const alter = (item: EducationHistoryItem) => {
    const index = selected?.index ?? -1;
    if (index === -1) {
      add(item);
    } else {
      edit(index, item);
    }
    setSelected(undefined);
    clear();
  };

  return {
    items: (fields as any[]) as EducationHistoryItem[],
    alter,
    selected,
    setEditing,
    remove,
    addAnother,
  };
}

export default useEducationHistoryList;
