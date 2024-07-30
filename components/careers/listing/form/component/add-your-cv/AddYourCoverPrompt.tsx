import styled from "styled-components";
import { Styleable, Form, colours } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";
import { useRef } from "react";
import InvisibleFileUpload from "../common/file-related/InvisibleFileUpload";
import { Notifications } from "@bjsdistribution/components";
import { useIsDesktop } from "components/util/useIsTabletOrSmaller";
import UploadTitle from "./UploadTitle";
import { down } from "styled-breakpoints";

function AddYourCoverPrompt(props: Styleable) {
  const form = Form.useForm();
  const uploadRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => uploadRef.current?.click();

  const notifications = Notifications.useNotifications();
  const isDesktop = useIsDesktop();

  const upload = (cv: any) => {
    const fileExtension = cv.file.name.split('.').pop();
    if (fileExtension === "pdf" || fileExtension === "doc" || fileExtension === "docx") {
      form.setValue("cover", cv);
    } else {
      const notificationTitle = isDesktop ? "Unsupported media type file" : "Unsupported media type file. Please upload DOCX / DOC / PDF file";
      const notificationDesc = isDesktop ? "Please upload DOCX / DOC / PDF file" : "";
      notifications.add({
        title: notificationTitle,
        description: notificationDesc,
        id: "cv-file-type",
        type: "failure"
      })
    }
  }

  return (
    <Container className={props.className} onClick={onClick}>
      <UploadTitle title="Cover Letter" required={false} />
      <SelectFile>
        <IconContainer>
          <Icon icon={faPlus} />
        </IconContainer>
        <Text>Select File</Text>
      </SelectFile>
      <InvisibleFileUpload
        ref={uploadRef}
        onChange={(event: any) => {
          const file = event.target.files[0];
          upload({ file });
        }}
      />
    </Container>
  );
}

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  width: 37px;
  border: 1px solid ${colours.black};
  border-radius: 50%;
`;
const Icon = styled(FontAwesomeIcon)``;

const SelectFile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;
const Text = styled.span`
  font-size: 18px;
  font-weight: medium;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > :not(:last-child) {
    margin-right: 10px;
  }
  cursor: pointer;

  :hover {
    ${IconContainer} {
      border-color: white;
    }
    ${SelectFile} {
      color: white;
    }
  }
  flex-direction: column;
  gap: 20px;
  
  ${down("sm")} {
    align-items: flex-start;
  }
`;

export default styled(AddYourCoverPrompt)``;
