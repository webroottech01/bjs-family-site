import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import HaulageBackground from "./HaulageBackground";
import HonouringKeyWorkers from "./HonouringKeyWorkers";
import KeyWorkers from "./KeyWorkers";
import { down } from "styled-breakpoints";

function NhsKeyWorkers(props: Styleable) {
  return (
    <Container className={props.className}>
      <HaulageBackground />
      <Content>
        <HonouringKeyWorkers />
        <Text>
          To honour NHS key workers and acknowledge that they, along with the
          logistics sector, kept the country moving during COVID-19, BJS Haulage
          named nine trucks after local heroes.
        </Text>
        <KeyWorkers/>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  height: 1342px;
  width: 100%;
`;

const Text = styled.span`
  font-size: 16px;
  color: white;
  text-align: center;

  max-width: 100ch;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 100px;
  z-index: 3;

  > * {
    z-index: 3;
  }
  ${down("md")} {
    padding: 69px 69px;
  }
  ${down("sm")} {
    padding: 10px;
  }
  ${HonouringKeyWorkers} {
    margin-bottom: 34px;
  }
  ${Text} {
    margin-bottom: 120px;
  }
`;

export default NhsKeyWorkers;
