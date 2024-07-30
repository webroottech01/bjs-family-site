import styled from "styled-components";
import { Styleable, WithChildren } from "@bjsdistribution/components";

import DropdownArrow from "./DropdownArrow";

type Props = Styleable &
  WithChildren &
  React.ComponentPropsWithoutRef<"select">

function Select(props: Props) {
  const passedProps = { ...props };
  delete passedProps.className;
  delete passedProps.children;

  return (
    <DropdownArrow className={props.className}>
      <Input {...passedProps}>
        {props.placeholder && (
          <option value="" disabled selected>
            {props.placeholder}
          </option>
        )}
        {props.children}
      </Input>
    </DropdownArrow>
  );
}

export const Input = styled.select`
  min-height: 56px;
  border-radius: 6px;
  background: white;
  padding: 19px 20px;
  padding-right: 66px;
  border: none;
  appearance: none;
`;

export default Select;
