import styled from "styled-components";
import { useMemo } from "react";
import { Styleable, Button } from "@bjsdistribution/components";

import SubsidiaryProps from "components/subsidiary-showcase/SubsidiaryProps";
import { useSelectedSubsidiary } from "components/talk-to-us/store";

import SelectedSubsidiary from "./SelectedSubsidiary";

function QuoteButton({ subsidiary, className }: SubsidiaryProps) {
  const [selected, setSelected] = useSelectedSubsidiary();

  const isSelected = useMemo(() => {
    return selected === subsidiary;
  }, [selected, subsidiary]);

  const select = () => setSelected(subsidiary);

  if (isSelected) {
    return <SelectedSubsidiary className={className} />;
  }

  return (
    <QuoteButtonContainer className={className}>
      <Button onClick={select}>Quote</Button>
    </QuoteButtonContainer>
  );
}

const QuoteButtonContainer = styled.div`
  min-width: 134px;
  ${Button.PlainButton} {
    font-size: 14px;
    max-height: 46px;
    max-width: 94px;
  }
`;
export default styled(QuoteButton)``;
