import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";

interface Props extends Styleable {
  header: string;
  value: string;
  object: string;
}

function Statistic(props: Props) {
  return (
    <Container>
      <Header>{props.header}</Header>
      <Value>{props.value}</Value>
      <Object>{props.object}</Object>
    </Container>
  );
}

const Header = styled.span`
  font-weight: medium;
  color: rgba(58, 54, 48, 0.65);
`;

const Value = styled.span`
  font-family: "Eveleth";
  font-size: 44px;
`;

const Object = styled.span`
  font-weight: bold;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  text-transform: uppercase;
  ${Header} {
    margin-bottom: 40px;
  }

  ${Value} {
    margin-bottom: 5px;
  }

  ${down("xs")} {
    align-items: center;
  }
`;

export default styled(Statistic)``;
