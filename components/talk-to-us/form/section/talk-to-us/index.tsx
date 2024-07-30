import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import SubsidiaryItems from './SubsidiaryItems';

function TalkToUs(props: Styleable) {
  return (
    <Container className={props.className}>
      <Intro>
        Contact us to discuss your requirements, obtain a quote, or to join the
        BJS family.
      </Intro>
      <SubsidiaryItems/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const Intro = styled.span`
  font-size: 14px;
`;

export default styled(TalkToUs)``;
