import styled from "styled-components";
import { colours, Styleable } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

function BjsFamilyLogo(props: Styleable & JSX.IntrinsicElements["div"]) {
  return (
    <Container className={props.className} onClick={props.onClick}>
      <Yellow>BJS</Yellow>
      <Text>Family</Text>
    </Container>
  );
}

const Text = styled.span`
  text-transform: uppercase;
  color: #24292C;
  font-family: "Eveleth";
`;

const Yellow = styled(Text)`
  color: #FEBA30;
`;

const Container = styled.div`
  display: flex;

  > * {
    margin-right: 8px;
  }

  font-size: 26px;

  ${down("xs")} {
    font-size: 18px;
  }
`;

export default styled(BjsFamilyLogo)``;
