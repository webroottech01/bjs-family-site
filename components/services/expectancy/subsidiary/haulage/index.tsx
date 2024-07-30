import styled from "styled-components";

import { Styleable } from "@bjsdistribution/components";

import Root from "components/services/expectancy/subsidiary/Container";
import SmootherHaulage from "./SmootherHaulage";
import RangeOfServices from "./RangeOfServices";
import SectorsCovered from "./SectorsCovered";

function HaulageExpectancy(props: Styleable) {
  return (
    <Container className={props.className}>
      <Row>
        <SectorsCovered />
        <SmootherHaulage />
      </Row>
      <Row>
        <RangeOfServices />
      </Row>
    </Container>
  );
}

const Container = styled(Root)``;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  > :not(:last-child) {
    margin-bottom: 60px;
  }
`;

export default styled(HaulageExpectancy)``;
