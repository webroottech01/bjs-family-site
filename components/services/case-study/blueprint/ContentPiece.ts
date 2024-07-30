import styled from "styled-components";
import { down } from "styled-breakpoints";

const ContentPiece = styled.div`
  display: flex;

  ${down("sm")} {
    flex-direction: column;
    padding-right: 40px;
  }
`;

export default ContentPiece;
