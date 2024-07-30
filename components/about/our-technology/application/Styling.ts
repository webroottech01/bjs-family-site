import styled, { css } from "styled-components";
import { up, down } from "styled-breakpoints";

import Header from "./Header";
import DoubleArrow from "components/feedback/what-customers-think/DoubleArrow";

const FullWidth = css`
  margin-left: -40px;
  margin-right: -40px;
`;

const Root = styled.div`
  background: white;
  position: relative;

  ${up("lg")} {
    border-radius: 20px;
    padding: 60px;
    box-shadow: 0px 0px 30px #0000000d;
  }

  ${down("md")} {
    ${FullWidth};
    padding: 30px 40px;
  }

  ${down("sm")} {
    margin-left: -20px;
    margin-right: -20px;
    padding: 30px 20px;
  }

  ${DoubleArrow} {
    color: #8D8B87;
  }
`;

const Body = styled.div`
  font-size: 16px;
`;

const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Footer = styled(FlexBetween)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${up("lg")} {
    width: 65%;
  }

  ${Header} {
    margin-bottom: 40px;
  }

  ${Body} {
    margin-bottom: 60px;
  }
`;

export { Root, Container, Footer, Body };
