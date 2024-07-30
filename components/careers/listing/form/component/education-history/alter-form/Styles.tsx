import styled from "styled-components";
import { Form } from "@bjsdistribution/components";
import { down, up } from "styled-breakpoints";

export const Container = styled.div`
  display: flex;
  width: 100%;

  > :not(:last-child) {
    margin-right: 60px;
  }

  > * {
    margin-bottom: 60px;
  }

  ${down("md")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 42px;
    }
  }

  ${up("lg")} {
    flex-direction: column;
  }
`;

const MiniContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const GradeSelect = styled(Form.Inputs.Select)``;

export const Header = styled(MiniContainer)`
  > :not(:last-child) {
    margin-right: 60px;
  }

  ${up("lg")} {
  }

  ${down("md")} {
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 60px;
    }
  }
`;

export const MetadataContainer = styled(MiniContainer)`
  > :not(:last-child) {
    margin-right: 60px;
  }

  ${down("md")} {
    justify-content: space-between;

    input {
      width: 442px;
    }
  }

  ${down("sm")} {
    flex-direction: column;
    width: 100%;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 42px;
    }

    input {
      width: 100%;
    }
  }
`;
export const DateContainer = styled(MiniContainer)`
  > :not(:last-child) {
    margin-right: 20px;
  }

  ${down("sm")} {
    width: 100%;
    input {
      width: 200px;
    }
    ${Form.Inputs.Label.Container} {
      flex: 1;
    }
  }

  @media only screen and (max-width: 450px) {
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 20px;
    }

    flex-direction: column;
    input {
      width: 100%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  > :not(:last-child) {
    margin-right: 90px;
  }
  ${down("md")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 90px;
    }
  }
`;
export const DescriptionLabelContainer = styled(Form.Inputs.Label.Container)`
  width: 100%;
`;
export default Container;
