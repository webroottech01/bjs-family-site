import styled from "styled-components";
import { colours } from "@bjsdistribution/components";

import {down} from "styled-breakpoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  font-size: 36px !important;
  color: ${colours.yellow};

  ${down("md")} {
    font-size: 26px !important;
  }
`;

export {Icon}