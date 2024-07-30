import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable, WithChildren } from "@bjsdistribution/components";

import TwinContainer from "../TwinContainer";

import Responsibilities from "./Responsibilities";
import Skills from "./Skills";
import CmsInformationPiece from "../CmsInformationPiece";

function MainBody(props: Styleable) {
  return (
    <Container className={props.className} layout>
      <Skills />
      <Responsibilities />
    </Container>
  );
}

const Container = styled(TwinContainer)`
  grid-row-gap: 55px;

  ${down("sm")} {
    grid-row-gap: 30px;
    background: white;
  }
`;

export default MainBody;
