import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type Props = {
  title: string;
  icon?: IconProp;
};

const Text = styled.span`
  font-family: "Eveleth";
  font-size: 20px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Icon = styled(FontAwesomeIcon)``;

function Title(props: Props & Styleable) {
  return (
    <Container className={props.className}>
      {props.icon && <Icon icon={props.icon} />}
      <Text>{props.title}</Text>
    </Container>
  );
}

export default styled(Title)``;
