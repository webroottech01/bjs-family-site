import { useState, useMemo } from "react";
import { Styleable, Form, Notifications } from "@bjsdistribution/components";

import FormSection from "components/careers/listing/form/section";
import AlterWorkHistoryItem from "./item/alter/AlterWorkHistoryItem";
import { useFieldArray } from "react-hook-form";

import WorkHistoryItem from "./item";
import WorkHistoryItemEntry from "./item/WorkHistoryItem";
import { usePopulate } from "./item/alter/useAdd";
import SelectedItem from "components/careers/listing/form/component/common/item/SelectedItem";
import ExistingItems from "../common/ExistingItems";

function WorkHistory(props: Styleable) {
  const { control } = Form.useForm();

  const { fields, append, insert, remove, update } = useFieldArray({
    control,
    name: "work history",
    //  keyName: "title",
  });

  const populate = usePopulate();

  const [selected, setSelected] = useState<SelectedItem | undefined>({
    mode: "add",
    index: -1,
  });
  const showItems = useMemo(() => selected === undefined, [selected]);

  return (
    <FormSection
      title={{
        title: "Work history",
      }}
      className={props.className}
    >
      <>
        {showItems && (
          <ExistingItems
            onAddAnother={() => setSelected({ mode: "add", index: -1 })}
          >
            {fields.map((entry: any, index: number) => {
              return (
                <WorkHistoryItem
                  item={entry}
                  key={entry.title}
                  edit={() => {
                    setSelected({ mode: "edit", index });
                    populate(entry);
                  }}
                  delete={() => remove(index)}
                />
              );
            })}
          </ExistingItems>
        )}
        {selected && (
          <AlterWorkHistoryItem
            mode={selected.mode}
            onSubmit={(item: WorkHistoryItemEntry) => {
              if (selected.mode === "add") {
                append(item);
              } else if (selected.mode === "edit") {
                update(selected.index, item);
              }
              setSelected(undefined);
            }}
          />
        )}
      </>
    </FormSection>
  );
}

export default WorkHistory;
