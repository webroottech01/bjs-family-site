import styled from "styled-components";
import { down } from "styled-breakpoints";

const Container = styled.div`
  display: flex;
  padding: 100px;
  font-size: 16px;

  white-space: pre-line;
  justify-content: space-between;

  > :not(:last-child) {
    margin-right: 100px;
  }

  @media only screen and (max-width: 1600px) {
    padding: 100px 60px;
    font-size: 14px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 60px;
    > :not(:last-child) {
      margin-right: 48px;
    }
  }

  ${down("md")} {
    flex-direction: column;
    padding: 40px;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 60px;
    }
  }

  ${down("sm")} {
    padding: 20px;
    > :not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export default Container;
