import { Styleable } from "@bjsdistribution/components";

import Metadata from "./WorkHistoryItem";
import ListedItem from "components/careers/listing/form/component/common/item/ListedItem";

interface Props {
  item: Metadata;
  edit: () => void;
  delete: () => void;
}

function WorkHistoryItem(props: Props & Styleable) {
  const item = props.item;
  const mappedItem = {
    title: item.company,
    subtitle: item.description,
    from: item.from,
    to: item.to,
  };
  return (
    <ListedItem item={mappedItem} edit={props.edit} delete={props.delete} />
  );
}

export default WorkHistoryItem;
