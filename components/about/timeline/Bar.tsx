import {css} from "styled-components";
import {up, down} from "styled-breakpoints";

const Bar = css`
  content: "";
  position: absolute;
  width: 6px;
  background-color: #c7c4c0;
  top: 0px;
  bottom: 0px;
  left: 50%;
  @media only screen and (max-width: 1300px) {
    right: 0px;
    left: auto;
  }
  ${down("md")} {
    right: 0px;
    left: auto;
  }
`;


export default Bar