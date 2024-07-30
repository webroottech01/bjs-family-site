import styled from "styled-components";
import {up, down} from "styled-breakpoints";
import { Styleable, colours } from "@bjsdistribution/components";

export type ApplicationTypeName = "Web App";
type Props = {
  type: ApplicationTypeName;
} & Styleable;
function ApplicationType(props: Props) {
  return (
    <Container className={props.className}>
      <Text>{props.type}</Text>
    </Container>
  );
}

const Text = styled.span`
  font-size: 14px;
  font-weight: bold;

  ${down("md")} {
    color: #A7A39E;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 19px 24px;
  background: #e5e2df;
  border-radius: 12px;
`;

export {Text};
export default ApplicationType;
