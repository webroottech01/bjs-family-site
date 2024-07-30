import { useMemo, useRef } from "react";
import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { faPlusCircle } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import InvisibleFileUpload from "components/careers/listing/form/component/common/file-related/InvisibleFileUpload";
import { faPlus } from "@fortawesome/pro-solid-svg-icons";
import { down } from "styled-breakpoints";

interface Props {
  onUpload: (file: any) => void;
  hasUploaded: boolean;
}

function AddYourFilesPrompt(props: Props & Styleable) {
  const uploadRef = useRef<HTMLInputElement | null>(null);

  const onClick = () => uploadRef.current?.click();

  const text = useMemo(() => {
    if (props.hasUploaded) {
      return "Select more files";
    }
    return "Select files";
  }, [props.hasUploaded]);

  return (
    <Container className={props.className} onClick={onClick}>
      <IconContainer>
      <Icon icon={faPlus} />
      </IconContainer>
      <Text>{text}</Text>
      <InvisibleFileUpload
        ref={uploadRef}
        onChange={(event: any) => {
          const file = event.target.files[0];
          props.onUpload({ file });
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

const Text = styled.span`
  font-size: 18px;
  font-weight: medium;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 10px;
  }
  cursor: pointer;

  :hover {
    ${Icon}, ${Text} {
      color: white;
    }
  }
`;

export default AddYourFilesPrompt;
