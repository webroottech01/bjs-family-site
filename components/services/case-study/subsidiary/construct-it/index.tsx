import { colours } from "@bjsdistribution/components";
import styled from "styled-components";
import Page, {
  Header,
  ExplanativeQuote,
} from "components/services/case-study/blueprint";
import Slideshow from "components/services/case-study/Slideshow";

import ManDataCaseStudy from "./man-data";

function Another() {
  return <div>hi</div>;
}

function ConstructITCaseStudy() {
  return (
    <Slideshow
      title="partnerships"
      pages={[<ManDataCaseStudy />, <Another />]}
    />
  );
}

const Container = styled(Page)`
  ${ExplanativeQuote} {
  }
`;

export default ConstructITCaseStudy;
