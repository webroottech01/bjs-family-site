import styled from "styled-components";

import { Styleable } from "@bjsdistribution/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/pro-solid-svg-icons";

type Props = {
  number: string;
} & Styleable;

function Phone(props: Props) {
  return (
    <Container className={props.className}>
      <Icon icon={faPhone} rotation={90} />
      <Text href={`tel:${props.number}`}>{props.number}</Text>
    </Container>
  );
}

const Icon = styled(FontAwesomeIcon)`
  font-size: 20px !important;
`;

const Text = styled.a`
  font-weight: 500;
  font-size: 20px;
  text-decoration: underline;
`;

const Container = styled.div`
  display: flex;
  align-items: center;

  ${Icon} {
    margin-right: 12px;
  }
  
`;

export default styled(Phone)``;