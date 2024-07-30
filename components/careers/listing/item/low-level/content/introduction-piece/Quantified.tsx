import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import InformationPiece from "./IntroductionPiece";

function Quantified(props: Styleable) {
  return (
    <InformationPiece
      title="your success will be quantified against demonstrating a roi to digital marketing"
      className={props.className}
    >
      <p>
        We’d like the successful candidate to influence our thinking and help to
        set meaningful ways of measuring the return on our use of Digital
        Marketing to improve the performance of the business.
      </p>
      <p>
        In return, we are offering a competitive salary plus benefits,
        negotiable subject to experience.
      </p>
    </InformationPiece>
  );
}

export default styled(Quantified)``;
