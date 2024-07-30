import styled from "styled-components";

import Props from "components/subsidiary-showcase/detailed-info/blueprint/points/PointProps";
import List, {
  ListItem,
} from "components/subsidiary-showcase/detailed-info/blueprint/points/List";

function DesktopPointComponent(props: Props) {
  const entries = props.entries;
  if (entries.length === 0) {
    return null;
  }

  return (
    <Container className={props.className}>
      {entries.map((point, index) => {
        return (
          <MiniContainer key={index}>
            <Title>{point.title}</Title>
            <List>
              {point.points.map((point) => {
                return <ListItem key={point}>{point}</ListItem>;
              })}
            </List>
          </MiniContainer>
        );
      })}
    </Container>
  );
}

const Title = styled.span`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
`;

const Container = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 40px;
  }
  color: inherit;
`;

const MiniContainer = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: 27px;
  }

  ${List} {
    > :not(:last-child) {
      margin-bottom: 15px;
    }

    ${ListItem} {
      ::before {
        margin-right: 18px;
      }
    }
  }
`;

export default styled(DesktopPointComponent)``;
