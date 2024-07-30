import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

type Props = {
  department: string;
} & Styleable;

function Department(props: Props) {
  return (
    <Container className={props.className}>
      <span>{props.department}</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-family: "Eveleth";
  font-size: 14px;
  color: #f7b42f;
  width: 100%;

  ::before {
    min-height: 8px;
    min-width: 8px;
    background: #f7b42f;
    content: "";
    border-radius: 50%;
    margin-right: 12px;
  }
`;

export default styled(Department)``;
