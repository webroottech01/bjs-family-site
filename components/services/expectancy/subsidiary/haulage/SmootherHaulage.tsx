import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import { Abstract } from "components/services/expectancy/entry";

function SmootherHaulage(props: Styleable) {
  return (
    <Abstract
      title="Your route to smoother nationwide haulage"
      className={props.className}
    >
      <p>
        BJS Haulage are growing fast, have the backing and experience of a major
        UK home delivery business and have the capacity and hunger to make a big
        difference.
      </p>
      <p>
        From our West Midlands HQ and supported by our hubs in Scotland, West
        Yorkshire and London - we provide service-led general haulage to the
        whole of the UK.
      </p>
    </Abstract>
  );
}

export default styled(SmootherHaulage)``;
