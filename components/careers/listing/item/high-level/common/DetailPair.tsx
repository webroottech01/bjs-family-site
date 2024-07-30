import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

interface Props {
  employmentType: string;
  contractType: string;
}

function DetailPair(props: Props & Styleable) {
  return (
    <Container className={props.className}>
      <Text>{props.employmentType}</Text>
      <Circle />
      <Text>{props.contractType}</Text>
    </Container>
  );
}

const Text = styled.span`
  color: #9a9a9a;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
`;

const Circle = styled.div`
  max-height: 4px;
  min-height: 4px;
  min-width: 4px;
  background: #888075;
  border-radius: 50%;
`;

const Container = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 7px;
  }
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
export default styled(DetailPair)``;
