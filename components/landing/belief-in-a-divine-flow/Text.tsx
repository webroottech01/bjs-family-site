import styled from "styled-components";
import { up, down } from "styled-breakpoints";

const Text = styled.span`
  ${up("lg")} {
    font-size: 16px;
  }
  ${down("md")} {
    font-size: 14px;
  }
`;
export default Text;
