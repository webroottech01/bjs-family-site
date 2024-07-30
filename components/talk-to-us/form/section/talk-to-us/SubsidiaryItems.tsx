import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import { allSubsidiaries } from "components/subsidiary-showcase/Subsidiary";
import SubsidiaryItem from "./SubsidiaryItem";
import { AnimateSharedLayout } from "framer-motion";

function SubsidiaryItems(props: Styleable) {
  return (
    <AnimateSharedLayout>
      <Container className={props.className}>
        {allSubsidiaries.map((subsidiary) => (
          <SubsidiaryItem subsidiary={subsidiary} />
        ))}
      </Container>
    </AnimateSharedLayout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${SubsidiaryItem} {
    padding: 33px 0px;
  }

  ${SubsidiaryItem}:not(:last-child) {
    border-bottom: 1px solid rgba(58, 54, 48, 0.15);
  }
`;
export default SubsidiaryItems;
