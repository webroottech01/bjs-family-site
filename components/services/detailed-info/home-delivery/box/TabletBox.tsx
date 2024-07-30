import styled from "styled-components";
import { down } from "styled-breakpoints";
import { colours } from "@bjsdistribution/components";

import BoxProps from "./BoxProps";

import { Icon } from "./Shared.styled";

function TabletBox(props: BoxProps) {
  return (
    <Container className={props.className}>
      <Header>
        <Icon icon={props.icon} />
        <Title>{props.title}</Title>
      </Header>
      <Description>{props.description}</Description>
    </Container>
  );
}

const Header = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 15px;
  }
`;

const Title = styled.span`
  color: #695f50;
  font-size: 16px;
  font-family: "Eveleth";

  ${down("sm")} {
    color: ${colours.black};
    font-size: 15px;
  }
`;

const Description = styled.span`
  color: #695f50;
  ${down("sm")} {
    color: ${colours.black};
    font-size: 14px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 22px;
  }
  flex: 1;
  padding: 30px;

  box-shadow: 0px 3px 10px #0000000d;
  border-radius: 12px;
  background: white;
`;

export default styled(TabletBox)``;
