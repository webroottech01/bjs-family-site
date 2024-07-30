import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { useMemo } from "react";
import { down } from "styled-breakpoints";

type Props = {
  title: string;
  selected: boolean;
} & Styleable & {
    onClick: () => void;
  };

const Container = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  
  > :not(:last-child) {
    margin-bottom: 10px;
  }

  ${(props) => !props.selected && "opacity: 0.35"};
`;

const Title = styled.span`
  font-family: "Eveleth";
  color: inherit;
  text-align: right;
  white-space: nowrap;
  ${down("sm")} {
    font-size: 13px;
  }
`;

const Highlight = styled.div`
  height: 3px;
  color: inherit;
  width: 100%;
  background: black;
  border-radius: 66px;
  content: "";
`;

function Entry(props: Props) {
  const getTitle = () => {
    const propTitle = props.title;
    if (propTitle.toLowerCase() === "we offer flexibility") {
      return "we're flexible";
    }
    return propTitle;
  };

  return (
    <Container
      className={props.className}
      selected={props.selected}
      onClick={props.onClick}
    >
      <Title>{getTitle()}</Title>
      <Highlight></Highlight>
    </Container>
  );
}

export { Highlight, Title };
export default styled(Entry)``;
