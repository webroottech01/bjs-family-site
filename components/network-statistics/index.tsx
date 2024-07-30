import styled from "styled-components";
import { up, down } from "styled-breakpoints";

import Statistic from "./Statistic";
import { Styleable } from "@bjsdistribution/components";

function NetworkStatistics(props: Styleable) {
  if (1 === 1) {
    return null; //Disabled temporarily
  }
  return (
    <Container className={props.className}>
      <Notice>Did you know our network</Notice>

      <StatisticsContainer>
        <Statistic
          header="employs over"
          value="2,900"
          object="members of staff"
        />
        <Statistic header="owns over" value="312" object="fleet vehicles" />
        <Statistic
          header="makes over"
          value="120,000"
          object="monthly deliveries"
        />
        <Statistic header="plans over" value="10,000" object="monthly routes" />
        <Statistic header="drives over" value="40,000" object="miles a month" />
      </StatisticsContainer>
    </Container>
  );
}

const Notice = styled.span`
  font-family: "Eveleth";
  font-size: 26px;
  text-align:center ;

  ${down("md")} {
    font-size: 20px;
  }
`;
const StatisticsContainer = styled.div`
  display: flex;
  gap: 100px;
  white-space: nowrap;
  max-width: 100%;
  overflow: scroll;
  align-items: center;
  align-content: center;

  ::-webkit-scrollbar {
    display: none;
  }

  ${down("md")} {
    padding-left: 28%;
    height: 100%;
    max-width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;

  background: #feba30;
  padding: 90px 0px 120px 0px;

  ${down("md")} {
    padding: 100px 0px;
    gap: 50px;
  }

  ${down("xs")} {
    padding: 50px 72px;
  }
`;

export default styled(NetworkStatistics)``;
