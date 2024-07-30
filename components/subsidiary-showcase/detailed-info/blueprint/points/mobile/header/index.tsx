import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";
import Entry from "./Entry";
import { Information } from "subsidiary-config/SubsidiaryConfig";

interface Props extends Styleable {
  entries: Information[];
  selectedIndex: number;
  onClickIndex: (index: number) => void;
}

function Header(props: Props) {
  return (
    <Container className={props.className}>
      {props.entries.map((entry, index) => {
        return (
          <Entry
            title={entry.title}
            selected={props.selectedIndex === index}
            onClick={() => props.onClickIndex(index)}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  ${Entry}:last-child {
    //flex: 1;
  }
`;

export default styled(Header)``;
