import styled from "styled-components";
import { Styleable } from '@bjsdistribution/components';
import TimelineEntry from "components/about/timeline/entry";

import Media from "./media";

function JulianBowen(props: Styleable) {
  return (
    <TimelineEntry className={props.className} year={2019} image={<Media/>} right partnership>
      <p>
        We begin working with <b>Julian Bowen</b>, a well known and established
        family furniture wholesaler who work with large high street retailers
        such as Next and DFS.
      </p>
      <p>
        A strong brand in retail since it was founded in 1993, BJS won a tender
        to support <b>Oliver Bonas</b> in their home deliveries.
      </p>
      <p>
        We moved to ease customer integrations and get new customers
        up-and-running quickly by providing a suite of 'public' APIs.
      </p>
      <p>
        We developed our own vehicle route-planning and optimisation system
        in-house and from the ground-up - going live in Q1 2019.
      </p>
      <p>The USA 'mattress in a box' company, <b>Nectar Sleep</b> - come on-board.</p>
    </TimelineEntry>
  );
}

export default styled(JulianBowen)``;