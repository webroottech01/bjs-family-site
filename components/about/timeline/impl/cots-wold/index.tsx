import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";

import TimelineEntry from "components/about/timeline/entry";
import Media from "./media";

function CotsWoldCompany(props: Styleable) {
  return (
    <TimelineEntry
      year={2012}
      partnership
      className={props.className}
      image={<Media />}
    >
      <p>
        We began delivering for the <b>The Cotswold Company</b>, with whom we
        continue to work closely.
      </p>
      <p>
        We were one of the first to introduce 'next day' and 'choice of delivery
        day' for our customers; a breakthrough in the two-man delivery market.
      </p>
    </TimelineEntry>
  );
}


export default styled(CotsWoldCompany)``;
