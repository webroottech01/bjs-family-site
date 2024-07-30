import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import Title from "./Title";
import AddYourFilesPrompt from "./AddYourFilesPrompt";
import UploadedFileList from "../common/file-related/uploaded-file/UploadedFileList";
import useSupportingDocuments from "./useSupportingDocuments";
import { down } from "styled-breakpoints";

function SupportingDocuments(props: Styleable) {
  const { fields, append, remove } = useSupportingDocuments();
  return (
    <Container className={props.className}>
      <Title />
      <UploadedFileList
        fields={fields}
        delete={(index: number) => remove(index)}
      >
        <AddYourFilesPrompt onUpload={append} hasUploaded={false} />
      </UploadedFileList>
    </Container>
  );
}

const Container = styled.div`
  background: #f7b42f;

  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 20px;
  }

  align-items: center;
  justify-content: center;

  padding: 50px 0px 60px 0px;
  ${down("sm")} {
    align-items: flex-start;
    padding: 50px 0px 60px 50px;
  }
`;
export default SupportingDocuments;
