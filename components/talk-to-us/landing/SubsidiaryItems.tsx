import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import SubsidiaryItem from "./SubsidiaryItem";
import { allSubsidiaries } from "components/subsidiary-showcase/Subsidiary";

function SubsidiaryItems(props: Styleable) {
  return (
    <Container className={props.className}>
      {allSubsidiaries.map((subsidiary) => (
        <SubsidiaryItem subsidiary={subsidiary} key={subsidiary} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  overflow: scroll;
  background: white;

  ${SubsidiaryItem} {
    border-right: 1px solid #f2eee8;
  }
`;
export default styled(SubsidiaryItems)``;
