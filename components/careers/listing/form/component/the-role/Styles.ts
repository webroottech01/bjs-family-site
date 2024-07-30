import styled, { css } from "styled-components";
import { up, down } from "styled-breakpoints";
import { colours, Form } from "@bjsdistribution/components";

const AdjustmentQuestion = styled(Form.Inputs.RadioGroup)<{
  isRequiringAdjustments: boolean;
}>`
  position: relative;
`;

const Container = styled.div`
  display: flex;
position: relative;

  ${down("md")} {
    flex-direction: column;
  }
  ${up("lg")} {
    > :not(:last-child) {
      margin-right: 140px;
    }

    ${Form.Inputs.Label.Container}:nth-child(1) {
      max-width: 370px;
    }
  }

  ${down("sm")} {
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 40px;
    }
  }
`;

export { Container, AdjustmentQuestion };
