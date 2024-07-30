import { Styleable, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import {up, down} from "styled-breakpoints";
import SubsidiaryElement, {
  Placeholder,
  SelectedIndicator,
} from "components/subsidiary-showcase/grid/SubsidiaryElement";
import SubsidiaryBar from "components/subsidiary-showcase/SubsidiaryBar";
import SubsidiaryGrid from "components/subsidiary-showcase/grid/SubsidiaryGrid";

function ServicesSubsidiaryBar(props: Styleable) {
  return <Bar right="talk to us" className={props.className} />;
}

const Bar = styled(SubsidiaryBar)`
  width: 100%;
  z-index: 50;
  top: auto;
  position: fixed;
  bottom: 0px;

  background: transparent linear-gradient(90deg, #ffffff 0%, #ffffff 100%) 0% 0%
    no-repeat padding-box;

  box-shadow: 0px 0px 10px #00000014;

  background: white;
  border: 2px solid #cccccc;
  
  height: 98px;

  ${up("lg")} {
    height: 100px;
  }

  ${SubsidiaryGrid} {
    ${SelectedIndicator} {
      top: -3px;
      z-index: 5;
     
    }
  }
`;

export default styled(ServicesSubsidiaryBar)``;
