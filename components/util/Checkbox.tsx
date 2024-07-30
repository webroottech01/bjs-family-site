import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { forwardRef, HTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/pro-regular-svg-icons";

interface Props extends HTMLAttributes<HTMLDivElement> {
  checked: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <Container {...props}>
      <CheckboxInput checked={props.checked} ref={ref} />
      {props.checked && <Tick icon={faCheck} />}
    </Container>
  );
});

const CheckboxInput = styled.input.attrs({
  type: "checkbox",
})`
  display: none;
`;

const Tick = styled(FontAwesomeIcon)`
  font-size: 24px !important;
  color: ${colours.yellow};
`;

const Container = styled.div`
  cursor: pointer;
  border: 1px solid #9c9a97;
  border-radius: 6px;
  height: 25px;
  width: 25px;
  position: relative;

  ${Tick} {
    position: absolute;
    bottom: 4px;
    right: -5px;
  }
`;

export default styled(Checkbox)``;
