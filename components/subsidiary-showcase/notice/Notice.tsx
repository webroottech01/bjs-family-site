import styled from "styled-components";
import { Styleable, WithChildren, Button } from "@bjsdistribution/components";

interface Props extends Styleable, WithChildren {
  text: string;
}

function Notice(props: Props) {
  return (
    <Container className={props.className}>
      <Text>{props.text}</Text>
      {props.children}
    </Container>
  );
}

const Text = styled.span`
  font-size: 14px;

  color: #695f50;
  letter-spacing: -0.28px;
  white-space: nowrap;
`;

const Container = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 20px;
  }
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: transparent
    linear-gradient(
      270deg,
      rgba(204, 204, 204, 0.2) 0%,
      rgba(226, 224, 221, 0.2) 100%
    )
    0% 0% no-repeat padding-box;

  ${Button.PlainButton} {
    padding: 17px 40px;
    font-family: "Eveleth";
  }
`;

export { Text };
export default styled(Notice)``;
