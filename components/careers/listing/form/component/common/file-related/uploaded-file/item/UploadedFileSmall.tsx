import styled from "styled-components";

import UploadedFileItem from "./UploadedFileItem";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon, formatFileSize } from "./utils";
import { faTimes } from "@fortawesome/pro-solid-svg-icons";
import { down } from "styled-breakpoints";

function UploadedFileSmall(props: UploadedFileItem) {
  return (
    <Container className={props.className}>
      <Icon icon={getIcon(props.fileType)} />
      <Name>{props.title}</Name>
      <Size>({formatFileSize(props.fileSize)})</Size>
      <Close icon={faTimes} onClick={props.onDelete} />
    </Container>
  );
}

const Close = styled(FontAwesomeIcon)`
  font-size: 22px !important;
  color: rgba(58, 54, 48, 0.5);
  cursor: pointer;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 16px !important;
`;

const Name = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
  ${down("sm")} {
    max-width: 100px;
  }

  overflow: hidden;
`;

const Size = styled.span`
  text-decoration: italic;
  color: rgba(58, 54, 48, 0.7);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 20px;
  ${Name} {
    margin-right: 6px;
  }
`;

export default UploadedFileSmall;
