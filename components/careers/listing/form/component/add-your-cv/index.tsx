import styled from "styled-components";
import { Styleable, Form, colours } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";
import { useRef } from "react";
import InvisibleFileUpload from "../common/file-related/InvisibleFileUpload";
import AddYourCvPrompt from "./AddYourCvPrompt";
import UploadedFileSmall from "../common/file-related/uploaded-file/item/UploadedFileSmall";
import AddYourCoverPrompt from "./AddYourCoverPrompt";
import { down } from "styled-breakpoints";

function AddYourCv(props: Styleable) {
  const form = Form.useForm();

  const uploadRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => uploadRef.current?.click();

  const cv = form.watch("cv")?.file;
  const cover = form.watch("cover")?.file;

  console.log(cv);
  console.log(cover);
  return (
    <Container className={props.className} onClick={onClick}>
      {!cv && <AddYourCvPrompt />}
      {cv && (
        <UploadedFileSmall
          title={cv.name}
          fileType={cv.type}
          fileSize={cv.size}
          onDelete={() => {
            form.setValue("cv", undefined);
          }}
        />
      )}
      {!cover && <AddYourCoverPrompt />}
      {cover && (
        <UploadedFileSmall
          title={cover.name}
          fileType={cover.type}
          fileSize={cover.size}
          onDelete={() => {
            form.setValue("cover", undefined);
          }}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 45px;
  background: url("/images/careers/cv.svg") repeat center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${down("sm")} {
    flex-direction: column;
    gap: 50px;
    padding-bottom: 0px;
    align-items: flex-start;
  }
`;

export default AddYourCv;
