import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

type ContractTypeName = "temporary" | "permanent";
type Props = {
  type: ContractTypeName;
};

function ContractType(props: Props & Styleable) {
  return <Container className={props.className}>{props.type}</Container>;
}

const Container = styled.div`
  padding: 10px 35px;
  background: #f3f2f1;
  border-radius: 6px;

  text-align: center;
  text-transform: uppercase;
  
  font-weight: medium;
  font-size: 14px;
  color: #888075;
`;

export default styled(ContractType)``