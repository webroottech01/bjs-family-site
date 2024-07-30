import FormSection from "components/careers/listing/form/section";
import AlterHistoryItemMiniForm from "./alter-form";
import EducationHistoryItem from "./EducationHistoryItem";
import ListedEducationItem from "./ListedEducationItem";
import useEducationHistoryList from "./useEducationHistoryList";
import ExistingItems from '../common/ExistingItems';

function EducationHistorySection() {
  const { alter, selected } = useEducationHistoryList();

  return (
    <FormSection title={{ title: "Education history" }}>
      {!selected && <HistoryItems />}
      {selected && (
        <AlterHistoryItemMiniForm
          mode={selected.mode}
          onAlter={(item: EducationHistoryItem) => alter(item)}
        />
      )}
    </FormSection>
  );
}

function HistoryItems() {
  const { items, setEditing, remove, addAnother } = useEducationHistoryList();

  return (
    <ExistingItems onAddAnother={addAnother}>
      {items.map((item, index) => (
        <ListedEducationItem
          item={item}
          key={index}
          edit={() => setEditing(index)}
          delete={() => remove(index)}
        />
      ))}
    </ExistingItems>
  );
}

export default EducationHistorySection;
