import styled from "styled-components";

const InvisibleFileUpload = styled.input.attrs({
  type: "file",
  accept:
    "application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document",
})`
  display: none;
`;

export default InvisibleFileUpload;