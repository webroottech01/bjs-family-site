import styled from "styled-components";
import {up, down} from "styled-breakpoints";

const borderRadius = "12px";

const SupportingMedia = styled.div`
  display: flex;
  background: white;
  min-height: 250px;
  min-width: unset;
  width: 30%;
  border-radius: ${borderRadius};
  height: fit-content;
  margin: 20px 0px;

  ${down("md")} {
    min-height: 180px;
    max-width: 250px;
    min-width: 250px;
  }
  @media only screen and (max-width: 1300px) {
    min-height: 180px;
    max-width: 250px;
    min-width: 250px;
  }
  ${down("sm")} {
    min-width: unset;
    max-width: unset;
    width: 90%;
    height: auto;
  }
  img {
    width: 100%;
    padding: 20px;
  }
`;

export {borderRadius};
export default SupportingMedia