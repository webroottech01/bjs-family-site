import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import Close from "./Close";
import OrderBody from "./OrderBody";

const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  background: #5f5d5b;
  align-items: center;

  padding: 13px 40px 8px 0px;

  ${down("md")} {
    padding-right: 40px;
  }

  ${down("sm")} {
    padding-left: 20px;
    padding-right: 20px;
  }

  ${down("xs")} {
  }

  ${OrderBody}, ${Close} {
    justify-self: right;
  }
`;

export default Container;
