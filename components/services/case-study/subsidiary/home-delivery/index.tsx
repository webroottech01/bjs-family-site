import { colours } from "@bjsdistribution/components";
import styled from "styled-components";
import Page, {
  Header,
  ExplanativeQuote,
} from "components/services/case-study/blueprint";
import Slideshow from "components/services/case-study/Slideshow";

import JulianBowenCaseStudy from "./julian-bowen";

function Another() {
  return <div>hi</div>
}

function HomeDeliveryCaseStudy() {
  return <Slideshow pages={[
    <JulianBowenCaseStudy/>,
    <Another/>
  ]}/>
}


const Container = styled(Page)`
  ${ExplanativeQuote} {
  }
`;

export default HomeDeliveryCaseStudy;
