import styled, { css } from "styled-components";
import { up, down } from "styled-breakpoints";
import { colours } from "@bjsdistribution/components";

import TimelineEntry from "./entry";
import {
  Beginning,
  NewITSystem,
  CotsWorld,
  Made,
  RecalibratedBusiness,
  Tracking,
  Wayfair,
  JulianBowen,
  NewSubsidiaries,
  WinnerYear,
} from "./impl";
import useWindowDimensions from "/components/util/useWindowDimensions";

function Timeline() {
  const { width } = useWindowDimensions();
  if (width >= 1300) {
    return (
      <Container>
        <Left>
          <Beginning />
          <CotsWorld />
          <RecalibratedBusiness />
          <Tracking />
          <NewSubsidiaries />
        </Left>
        <Bar />
        <Right>
          <NewITSystem />
          <Made />
          <Wayfair />
          <JulianBowen />
          <WinnerYear />
        </Right>
      </Container>
    );
  }
  return (
    <Container>
      <Beginning />
      <NewITSystem />
      <CotsWorld />
      <Made />
      <RecalibratedBusiness />
      <Wayfair />
      <Tracking />
      <JulianBowen />
      <NewSubsidiaries />
      <WinnerYear />
      <Bar />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  ${down("md")} {
    flex-direction: column;
  }
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  flex-direction: column;
  gap: 60px;
  display: flex;
  margin-right: -13px;
`;
const Right = styled.div`
  flex: 1;
  flex-direction: column;
  gap: 60px;
  display: flex;
  margin-top: 200px;
  margin-left: -13px;
`;
const Bar = styled.div`
  content: "";
  width: 6px;
  background-color: #c7c4c0;
  ${down("md")} {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 7px;
  }
  ${down("sm")} {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 7px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1300px) {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 7px;
  }
`;
export default Timeline;
