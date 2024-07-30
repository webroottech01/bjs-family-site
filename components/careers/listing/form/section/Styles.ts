import { up, down } from "styled-breakpoints";
import styled from "styled-components";

import { Styleable, WithChildren, Form } from "@bjsdistribution/components";

import { Props as TitleProps } from "./header/Title";

const ChildrenContainer = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 60px;
    margin-bottom: 60px;
  }

  flex-wrap: wrap;

  ${Form.Inputs.Label.Section} {
    color: rgba(58, 54, 48, 0.7);
  }

  input {
    background: white;
    height: 56px;
  }

  .select__control {
    min-height: 56px;
  }

  .select__value-container {
    height: 56px;
  }

  ${Form.Inputs.Label.Container} {
    > div:nth-child(2) {
      ${up("sm")} {
        min-height: 56px;
      }
    }
  }

  ${down("sm")} {
    flex-direction: column;

    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 42px;
    }
    input {
      width: 100%;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;

  ${ChildrenContainer} {
    margin-top: 60px;
  }

  ${down("sm")} {
    padding: 45px 20px;
    width: 100%;
  }
`;

export { ChildrenContainer, Container };
