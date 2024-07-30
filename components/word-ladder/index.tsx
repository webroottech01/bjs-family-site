import styled from "styled-components";
import { colours, WithChildren, Styleable } from "@bjsdistribution/components";

type ColourType = "checkered" | "odd" | "odd per";

export interface Props extends WithChildren, Styleable {
  columns: number;
  repeat?: number;
  entries?: string[][];
  type?: ColourType;
}

const defaultEntries: string[][] = [
  ["family run", "flexible"],
  ["experience", "high standards"],
  ["customer service", "heart"],
  ["reputation"],
];

function RepeatedTextSplash(props: Props) {
  const entries = props.entries ?? defaultEntries;

  return (
    <Root className={props.className}>
      {props.children}
      <Container>
        {[...Array(props.columns)].map((value, index) => (
          <Column
            key={index}
            entries={entries}
            row={index}
            type={props.type}
            repeat={props.repeat ?? 1}
          />
        ))}
      </Container>
    </Root>
  );
}

interface ColumnProps {
  row: number;
  entries: string[][];
  repeat: number;
  type?: ColourType;
}

function Column(props: ColumnProps) {
  let array: string[][] = [];
  for (let i = 0; i < props.repeat; i++) {
    array.push(...props.entries);
  }

  return (
    <ColumnContainer>
      {array.map((text, index) => {
        return (
          <Entry key={index} text={text} type={props.type} row={props.row} />
        );
      })}
    </ColumnContainer>
  );
}

interface EntryProps {
  row: number;
  type?: ColourType;
  text: string[];
}

function Entry(props: EntryProps) {
  const { type, row } = props;

  const getType = (index: number) => {
    if (type === "odd") {
      if (index % 2 === 0) {
        return "normal";
      }
      return "yellow";
    } else if (type === "checkered") {
      if (row % 2 === 0) {
        return "normal";
      }
      return "yellow";
    } else if (type === "odd per") {
      if (row % 2 === 0) {
        if (index % 2 === 0) {
          return "yellow";
        }
        return "normal";
      }
      if (index % 2 === 0) {
        return "normal";
      }
      return "yellow";
    }
    return "normal";
  };

  return (
    <EntryContainer>
      {props.text.map((text, index) => {
        const type = getType(index);
        const key = `${text}-${index}`;
        if (type === "normal") {
          return <Text key={key}>{text}</Text>;
        }
        return <YellowText key={key}>{text}</YellowText>;
      })}
    </EntryContainer>
  );
}

const Text = styled.span`
  font-family: "Eveleth";
  white-space: nowrap;
  color: #888075;
`;

const YellowText = styled(Text)`
  color: ${colours.yellow} !important;
`;

const EntryContainer = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 18px;
  }
`;

const ColumnContainer = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 10px;
  }
`;

const Root = styled.div`
  position: relative;
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;

  overflow: hidden;
  user-select: none;
`;

const Container = styled.div`
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  font-size: 12px;

  //transform-origin:center center;

  // clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);

  > :not(:last-child) {
    margin-bottom: 5px;
  }

  transform: rotate(-6deg);
`;

export { Container, Text, Root };
export default styled(RepeatedTextSplash)``;
