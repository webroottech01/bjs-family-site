import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import { Abstract } from "components/services/expectancy/entry";

function OurPeople(props: Styleable) {
  return (
    <Abstract title="Our people" className={props.className}>
      <p>
        Your account manager will be your single point of contact for
        consistency, reassurance, and efficiency.
      </p>
      <p>
        Our focus is ensuring we understand the areas we can work to support you
        - and we really enjoy getting to know you better as we work to build
        your business.
      </p>
      <p>
        It might seem old fashioned, but we like people as much as we like
        processes.
      </p>
    </Abstract>
  );
}

export default styled(OurPeople)``;
