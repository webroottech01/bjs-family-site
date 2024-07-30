import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import TimelineEntry from "components/about/timeline/entry";

import Media from "./media";

function NewSubsidiaries(props: Styleable) {
  return (
    <TimelineEntry year={2020} className={props.className} image={<Media/>}>
      <p>
        An eventful year for all sorts of reasons, but one of{" "}
        <b>exciting growth</b> for BJS as we expanded our capabilities and
        launched two new service-led brands.
      </p>
      <p>
        <b>BJS Haulage</b> offers a broad range of services from tailor-made to
        economy and everything in-between, so with our family of delivery
        services — you’ll be safe in our hands.
      </p>
      <p>
        <b>BJS Extra</b> delivers an extra helping hand in home delivery for
        growing businesses – including extra reach, extra care, extra choice...
        and extra smiles.
      </p>
    </TimelineEntry>
  );
}

export default styled(NewSubsidiaries)``;
