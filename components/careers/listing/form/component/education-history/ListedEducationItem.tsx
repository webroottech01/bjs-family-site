import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import EducationHistoryItem from "components/careers/listing/form/component/education-history/EducationHistoryItem";
import ListedItem from "components/careers/listing/form/component/common/item/ListedItem";

type Action = () => void;
interface Props {
  item: EducationHistoryItem;
  edit: Action;
  delete: Action;
}

function ListedEducationItem(props: Props & Styleable) {
  const item = props.item;
  return (
    <ListedItem
      item={{
        title: item.qualification,
        subtitle: item.description,
        from: item.from,
        to: item.to,
      }}
      edit={props.edit}
      delete={props.delete}
    ></ListedItem>
  );
}

const Container = styled.div``;
export default ListedEducationItem;
