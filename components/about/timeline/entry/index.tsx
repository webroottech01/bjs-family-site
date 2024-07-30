import styled, { css } from "styled-components";
import { up, down, only } from "styled-breakpoints";

import { WithChildren, Styleable } from "@bjsdistribution/components";
import Connector from "./Connector";
import DirectionProps from "./DirectionProps";
import Partnership from "./Partnership";
import { ReactElement } from "react";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import useWindowDimensions from "/components/util/useWindowDimensions";

interface Props extends WithChildren, Styleable {
  year: number;
  right?: boolean;
  partnership?: boolean;
  image?: ReactElement;
}

type Direction = "left" | "right";

function TimelineEntry(props: Props) {
  const isTabletOrSmaller = useIsTabletOrSmaller();
  const { width } = useWindowDimensions();

  let direction: Direction = props.right ? "right" : "left";
  if (isTabletOrSmaller || width <= 1300) {
    direction = "left";
  }

  return (
    <Container className={props.className} direction={direction}>
      {!!props.image && props.image}
      {!props.image && <FakeImage />}
      <Column>
        <YearContainer>
          {props.partnership && direction === "left" && <Partnership />}
          <Year direction={direction}>
            <YearTitle>{props.year}</YearTitle>
            <Connector direction={direction} />
          </Year>
          {props.partnership && direction === "right" && <Partnership />}
        </YearContainer>
        <Content>{props.children}</Content>
      </Column>
    </Container>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  // max-width: 370px;
  flex: 1;
  font-size: 16px;

  ${down("md")} {
    max-width: 100%;
    width: unset;
  }
  @media only screen and (max-width: 1300px) {
    max-width: 100%;
    width: unset;
  }
`;
const Content = styled.div`
  ${down("md")} {
    margin-right: 20px;
  }
`;

const FakeImage = styled.div`
  height: 250px;
  width: 350px;
  border: 1px solid black;
`;

const Container = styled.div<DirectionProps>`
  display: flex;
  gap: 3%;
  position: relative;
  ${(props) =>
    props.direction === "right" &&
    "left: 0%;flex-direction: row-reverse;text-align: right;"};

  ${down("sm")} {
    flex-direction: column;
  }
  ${Column} {
    ${(props) => props.direction === "right" && "margin-right: 6px;"};
  }
  ${Content} {
    ${(props) =>
      props.direction === "right"
        ? "padding-left: 30px;"
        : "padding-right: 30px;"};
  }
`;

const YearContainer = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 11px;
  }
`;

const Year = styled.div<DirectionProps>`
  font-size: 36px;
  font-family: "Eveleth";
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  ${(props) => props.direction === "right" && "flex-direction: row-reverse;"};

  /* ${only("md")} {
    padding-top: 30px;
  }*/
`;
const YearTitle = styled.div`
  font-size: 36px;
  font-family: "Eveleth";
`;

export { default as ClientLogos } from "./ClientLogos";
export { default as SupportingMedia } from "./SupportingMedia";
export default styled(TimelineEntry)``;
