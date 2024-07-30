import styled from "styled-components";
import { Form, Button } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

const Container = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 60px;
  }
  width: 100%;
  flex-wrap: wrap;
  ${up("sm")} {
    ${Button.PlainButton} {
      margin-left: 20px;
      margin-right: 60px;
      max-height: 56px;
    }
  }

  ${down("sm")} {
    width: 100%;

    > :not(:last-child) {
      margin-right: 0;
      margin-bottom: 60px;
    }
    ${Form.Inputs.Label.Container} {
      width: 100%;
    }

    /*  display: grid;
    width: 100%;
    > * {
      margin-right: 0;
      margin-bottom: 0;
    }

    grid-template-columns: repeat(2, auto);
    gap: 30px 20px;
    justify-content: space-between;*/
  }
`;

const AddressInput = styled(Form.Inputs.Input)``;

export { AddressInput };
export default Container;
