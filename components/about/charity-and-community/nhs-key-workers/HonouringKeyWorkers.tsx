import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import NhsLogo from "./NhsLogo";
import { down } from "styled-breakpoints";

const blue = "#005EB8";

function HonouringKeyWorkers(props: Styleable) {
  return (
    <Container className={props.className}>
      <NhsHeader>
        <NhsLogo />
      </NhsHeader>
      <Content>Honouring key workers</Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  z-index: 2;
`;

const NhsHeader = styled.div`
  padding: 15px 37px 2px 37px;
  background: ${blue};
  border-radius: 20px 20px 0px 0px;
  position: relative;
  top: 1px;

  ${NhsLogo} {
    position: relative;
    top: 5px;
    height: 28px;
  }
`;

const Content = styled.h2`
  background: ${blue};
  border-radius: 20px;
  padding: 17px 32px;
  margin:0px;
  font-family: "Eveleth";
  font-size: 44px;
  ${down("sm")} {
    font-size: 17px;
    text-align: center;
  }
`;

export default styled(HonouringKeyWorkers)``;
