import { useMemo } from "react";
import { up, down } from "styled-breakpoints";
import styled from "styled-components";
import { Styleable, Form, Button } from "@bjsdistribution/components";

import TextArea from "components/careers/listing/form/section/TextArea";
import AddEntryButton from "components/careers/listing/form/component/common/add-entry-button";

import WorkHistoryItem from "components/careers/listing/form/component/work-history/item/WorkHistoryItem";
import useAdd from "./useAdd";

import { AlterMode } from "components/careers/listing/form/component/common/item/SelectedItem";

interface Props extends Styleable {
  onSubmit: (item: WorkHistoryItem) => void;
  mode: AlterMode;
}

function AddWorkHistoryItem(props: Props) {
  const form = Form.useForm();
  const onSubmit = useAdd(props.onSubmit);
  const id = 'work-history-go-to-add-work-entry';
  const isDevelopment = process.env.NODE_ENV === "development";

  const populate = () => {
    form.setValue("job title", "some job");
    form.setValue("company", "BJS");
    form.setValue("job from", new Date());
    form.setValue("job to", new Date());
    form.setValue("description", " blabla");
  };

  const title = useMemo(() => {
    if (props.mode === "add") {
      return "Add work entry";
    }
    return "Edit work entry";
  }, [props.mode]);

  return (
    <Container className={props.className}>
      {isDevelopment && <Button id="work-history-go-to-populate" onClick={populate}>Populate 😃</Button>}
      <Header>
        <EntryContainer>
          <Form.Inputs.Input name="job title" />
          <Form.Inputs.Input name="company" />
        </EntryContainer>
        <DateContainer>
          <Form.Inputs.Input name="job from" label="from" type="date" />
          <Form.Inputs.Input name="job to" label="to" type="date" />
        </DateContainer>
      </Header>
      <BodyContainer>
        <DescriptionLabelContainer
          name="description"
          label="description"
          for="description"
          inline={false}
        >
          <DescriptionContents>
            <TextArea {...form.register("description")} />
            <AddEntryButton id={id} title={title} onClick={onSubmit} />
          </DescriptionContents>
        </DescriptionLabelContainer>
      </BodyContainer>
    </Container>
  );
}

const EntryContainer = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 60px;
  }

  width: 100%;

  input {
    ${up("lg")} {
      width: 590px;
    }
  }

  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    ${Form.Inputs.Label.Container} {
      width: 100%;
    }
    input {
      width: 100% !important;
    }
  }
`;

const DateContainer = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 20px;
  }

  ${down("sm")} {
    > :not(:last-child) {
      margin-right: 0px;
    }

    justify-content: space-between;
    input {
      width: 200px;
    }
  }

  @media only screen and (max-width: 450px) {
    flex-direction: column;
    input {
      width: 100%;
    }
  }
`;

const DescriptionLabelContainer = styled(Form.Inputs.Label.Container)`
  width: 100%;
`;

const DescriptionContents = styled.div`
  display: flex;
  width: 100%;
  > :not(:last-child) {
    margin-right: 90px;
  }

  ${down("md")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 90px;
    }
  }
`;
const BodyContainer = styled.div`
  display: flex;

  ${TextArea} {
    border: none;
    height: 300px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 60px;
  }

  width: 100%;

  ${Button.PlainButton} {
    width: min-content;
  }
`;

const Header = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 60px;
  }
  @media only screen and (max-width: 1890px) {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 42px;
    }
  }
`;

export default AddWorkHistoryItem;
