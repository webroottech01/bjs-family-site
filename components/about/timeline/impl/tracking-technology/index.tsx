import styled from "styled-components";
import { Styleable } from '@bjsdistribution/components';
import TimelineEntry from "components/about/timeline/entry";
import Image from "./Image";

function Wayfair(props: Styleable) {
  return (
    <TimelineEntry className={props.className} year={2017} image={<Image/>}>
      <p>
        We increased our fleet of vans yet again, reflecting increasing demand
        for home-deliveries.
      </p>
      <p>
        We increased our warehouse space to 250,000 sq.ft. to reflect increasing
        demand for our services.
      </p>
      <p>
        We increased our fleet of HGVs to meet increasing demand from our retail
        clients to collect stock from them.
      </p>
      <p>
        We launched our own tracking technology. This makes it easier for
        customers to anticipate their deliveries and improves our in-full and
        first-time delivery performance.
      </p>
      <p>We set-up a BJS office in India to augment our UK operations.</p>
    </TimelineEntry>
  );
}

export default styled(Wayfair)``;