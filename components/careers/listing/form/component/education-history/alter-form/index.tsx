import { useMemo } from "react";
import { Form, Button } from "@bjsdistribution/components";

import Container, {
  MetadataContainer,
  DateContainer,
  Header,
  Content,
  DescriptionLabelContainer,
} from "./Styles";
import TextArea from "components/careers/listing/form/section/TextArea";
import AddEntryButton from "components/careers/listing/form/component/common/add-entry-button";
import EducationHistoryItem from "../EducationHistoryItem";
import useAlterEducationHistoryItem from "./useAlterEducationHistoryItem";
import { AlterMode } from "components/careers/listing/form/component/common/item/SelectedItem";

const gradeOptions = Form.Options.create(["BA (Hons)", "BTEC"]);

interface Props {
  onAlter: (item: EducationHistoryItem) => void;
  mode: AlterMode;
}

function AlterHistoryItemMiniForm(props: Props) {
  const attemptAlter = useAlterEducationHistoryItem(props.onAlter);
  const form = Form.useForm();
  const id = "education-history-go-to-add-education-entry"

  const title = useMemo(() => {
    return `${props.mode} education entry`;
  }, [props.mode]);

  const isDevelopment = process.env.NODE_ENV === "development";

  const prefill = () => {
    form.setValue("qualification", "Computer Science");
    form.setValue("grade", "btec");
    form.setValue("institution", "bcu");
    form.setValue("from", new Date());
    form.setValue("to", new Date());
    form.setValue(
      "education description",
      "sadiojaidosioajsdiojadsiojasdiojdsaioadsoijioasd"
    );
  };

  return (
    <Container>
      {isDevelopment && <Button id="education-history-go-to-prefill" onClick={prefill}>Prefill</Button>}
      <Header>
        <MetadataContainer>
          <Form.Inputs.Input name="qualification" width={400} />
          <Form.Inputs.Select name="grade" options={gradeOptions} width={150} />
          <Form.Inputs.Input name="institution" width={330} />
        </MetadataContainer>
        <DateContainer>
          <Form.Inputs.Input name="from" type="date" />
          <Form.Inputs.Input name="to" type="date" />
        </DateContainer>
      </Header>
      <DescriptionLabelContainer
        name="education description"
        label="description"
        for="description"
        inline={false}
      >
        <Content>
          <TextArea {...form.register("education description")} />
          <AddEntryButton id={id} title={title} onClick={attemptAlter} />
        </Content>
      </DescriptionLabelContainer>
    </Container>
  );
}

export default AlterHistoryItemMiniForm;
