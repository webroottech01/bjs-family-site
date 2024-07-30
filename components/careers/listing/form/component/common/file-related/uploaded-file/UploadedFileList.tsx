import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import UploadedFile from "./item/UploadedFile";
import UploadedFileSmall from "./item/UploadedFileSmall";

interface Props {
  fields: any[];
  delete: (id: number) => void;
}

function UploadedFileList(props: Props & Styleable & WithChildren) {
  const fields = props.fields;
  const firstElement = fields[0]?.file;

  return (
    <Container className={props.className}>
      {firstElement && (
        <UploadedFile
          key={firstElement.id}
          title={firstElement.name}
          fileType={firstElement.type}
          fileSize={firstElement.size}
          onDelete={() => {
            props.delete(0);
          }}
        />
      )}
      <Content fieldCount={fields.length}>
        {props.children}
        <SmallContainer>
          {fields.slice(1).map((field, index) => {
            const file = (field as any).file;
            return (
              <UploadedFileSmall
                key={field.id}
                title={file.name}
                fileType={file.type}
                fileSize={file.size}
                onDelete={() => {
                  props.delete(index + 1);
                }}
              />
            );
          })}
        </SmallContainer>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  ${down("md")} {
    flex-direction: column;
  }
  ${down("sm")} {
    flex-direction: column;
    align-items: start;
    gap: 50px;
  }
`;

const Content = styled.div<{ fieldCount: number }>`
  display: flex;
  ${(props) => props.fieldCount > 1 && "gap: 60px;"};
  ${down("sm")} {
    flex-direction: column;
    ${(props) => props.fieldCount > 1 && "gap: 50px;"};
  }
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export default UploadedFileList;
