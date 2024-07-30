import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { AuthorInfo } from "../ClientAffirmation";

type Props = Styleable & {
  info: AuthorInfo;
};
function From(props: Props) {
  return (
    <Container className={props.className}>
      <Name>{props.info.name}</Name>
      <Role>{props.info.role}</Role>
    </Container>
  );
}

const Name = styled.span`
  font-weight: medium;
`;
const Role = styled.span`
  opacity: 0.6;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;

  
  > :not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 16px;
  color: #695f50;
`;

export default From;
