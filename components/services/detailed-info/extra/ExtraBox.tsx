import styled from "styled-components";
import { Box } from "components/services/detailed-info/blueprint";

import { up, down } from "styled-breakpoints";

const ExtraBox = styled(Box)`
  background: #1394a3;
  border: none;
  min-height: 178px;
  max-width: 280px;
  padding: 24px 42px 30px 42px; 
  text-align: center;

  ${down("sm")} {
    flex-direction: row;
    padding: 20px;
    min-height: 123px;
    max-height: 123px;
    max-width: 420px;
    text-align: left;
  }
`;

export default ExtraBox