import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

interface Props {
  title: string;
  value: string;
}

function Entry(props: Props & Styleable) {
  return <tr className={props.className}>
      <td>{props.title}</td>
      <td>{props.value}</td>
  </tr>;
}

const Title = styled.td`
`;

const Value = styled.td`

`;

const Container = styled.tr`
`;
export default Entry;
