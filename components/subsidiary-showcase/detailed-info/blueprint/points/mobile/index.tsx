import { useState } from "react";
import { only, down } from "styled-breakpoints";
import styled from "styled-components";

import Header from "./header";
import PointProps from "../PointProps";
import List, {
  ListItem,
} from "/components/subsidiary-showcase/detailed-info/blueprint/points/List";

function MobilePoints(props: PointProps) {
  const [chosenIndex, setChosenIndex] = useState(0);
  return (
    <Container>
      <Header
        entries={props.entries}
        selectedIndex={chosenIndex}
        onClickIndex={setChosenIndex}
      />
      <List>
        {props.entries[chosenIndex].points.map((point) => {
          return <ListItem key={point}>{point}</ListItem>;
        })}
      </List>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin-right: -20px; //Allows the right side to span across viewport

  ${Header} {
    margin-bottom: 30px;
  }

  ${List} {
    ${only("md")} {
      > :not(:last-child) {
        margin-bottom: 15px;
      }
    }

    ${down("sm")} {
      > :not(:last-child) {
        margin-bottom: 16px;
      }
    }
  }
`;

export default MobilePoints;
