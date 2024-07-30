import styled from "styled-components";
import { Styleable, Button } from "@bjsdistribution/components";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import SubsidiaryLogo from "./SubsidiaryLogo";

import { PhoneSection, EmailSection } from "components/talk-to-us/form/shared";

import QuoteButton from "./quote-button";

import { useSelectedSubsidiaryValue } from "components/talk-to-us/store";

type Props = {
  subsidiary: Subsidiary;
};

function SubsidiaryItem({ subsidiary, className }: Props & Styleable) {
  const selected = useSelectedSubsidiaryValue();
  return (
    <Container className={className} isSelected={selected === subsidiary}>
      <SubsidiaryLogo subsidiary={subsidiary} />
      <DetailsContainer>
        <PhoneSection subsidiary={subsidiary} />
        <EmailSection subsidiary={subsidiary} />
      </DetailsContainer>
      <QuoteButton subsidiary={subsidiary} />
    </Container>
  );
}

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
    > :not(:last-child) {
      margin-bottom: 14px;
    }
  margin-left: 130px;
  margin-right: 40px;
`;

const Container = styled.div<{ isSelected: boolean }>`
  display: flex;
  position: relative;
  justify-content: flex-end;

  align-items: center;

  ${SubsidiaryLogo} {
    left: 0;
    position: absolute;
  }
  margin-right: -40px;
`;

export default styled(SubsidiaryItem)``;
