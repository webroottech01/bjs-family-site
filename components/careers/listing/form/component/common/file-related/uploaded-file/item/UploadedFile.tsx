import styled from "styled-components";
import { colours, Button } from "@bjsdistribution/components";
import { faFilePdf, faTrash } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Item from "./UploadedFileItem";
import { getFileType, getIcon, formatFileSize } from "./utils";
import { down } from "styled-breakpoints";

function UploadedFile(props: Item) {
  return (
    <Container className={props.className}>
      <FileIcon icon={getIcon(props.fileType)} />
      <Body>
        <Title>{props.title}</Title>
        <FileContainer>
          <FileType>{getFileType(props.fileType)}</FileType>
          <FileSize>{formatFileSize(props.fileSize)}</FileSize>
        </FileContainer>
      </Body>
      <Button
        shape="circle"
        icon={<TrashIcon icon={faTrash} />}
        onClick={props.onDelete}
      />
    </Container>
  );
}

const FileIcon = styled(FontAwesomeIcon)`
  font-size: 26px !important;
  ${down("sm")} {
    font-size: 18px !important;
  }
`;

const TrashIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 21px !important;
  cursor: pointer;
  ${down("sm")} {
    font-size: 14px !important;
  }
`;

const Title = styled.span`
  font-weight: medium;
  ${down("sm")} {
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const FileType = styled.span`
  font-style: italic;
  color: rgba(58, 54, 48, 0.7);
`;

const FileSize = styled.span``;

const Body = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  ${down("sm")} {
    gap: 10px;
    font-size: 14px;
  }
`;

const FileContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  padding: 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.4);
  width: min-content;
  ${down("sm")} {
    padding: 15px;
    border-radius: 15px;
    align-items: center;
  }
  ${Body} {
    margin: 0px 35px 0px 20px;
    padding-top: 5px;
    ${down("sm")} {
      margin: 0px 15px 0px 15px;
    }
  }
  ${Button.PlainButton} {
    height: 46px;
    padding: 13px 14px;
    cursor: pointer;

    :hover {
      color: ${colours.yellow};
    }
    ${down("sm")} {
      height: 30px;
      width: 30px;
      font-size: 14px;
    }
  }
`;
export default UploadedFile;
