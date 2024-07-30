import { useMemo } from "react";
import styled from "styled-components";
import { Styleable, Form, colours } from "@bjsdistribution/components";
import { Container, AdjustmentQuestion } from "./Styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-regular-svg-icons/faArrowRight";

const yesNo = Form.Options.create(["yes", "no"]);

function ReasonableAdjustments(props: Styleable) {
  const form = Form.useForm();
  const adjustmentsValue = form.watch("adjustments");
  const isRequiringAdjustments = useMemo(() => {
    return adjustmentsValue === "yes";
  }, [adjustmentsValue]);
  return (
    <Container className={props.className}>
      <AdjustmentQuestion
        name="adjustments"
        label="Do you require any reasonable adjustments to be made to the recruitment process?"
        options={yesNo}
        defaultValue={yesNo[1]}
        isRequiringAdjustments={isRequiringAdjustments}
      />
      {isRequiringAdjustments && (
        <Form.Inputs.Input
          name="further adjustments"
          label="what adjustments can we make to assist you?"
          width={420}
        />
      )}
      {isRequiringAdjustments && <IndicatorComponent/>}
    </Container>
  );
}

function IndicatorComponent() {
  return (
    <IconContainer>
      <Icon icon={faArrowRight} />
    </IconContainer>
  );
}

const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 380px;
`;
const Icon = styled(FontAwesomeIcon)`
  font-size: 60px;
  color: ${colours.yellow};
  height: 61px;
  width: 53px;
`;

export default ReasonableAdjustments;
