import styled from "styled-components";
import { Styleable } from '@bjsdistribution/components';
import TimelineEntry from "components/about/timeline/entry";
import Media from "./media";

function MadeCompany(props: Styleable) {
  return (
    <TimelineEntry className={props.className} year={2013} partnership right image={<Media/>}>
      <p>
        We began working with <b>MADE.COM</b> and <b>One Call</b> to support
        their success in the UK furniture market.
      </p>
      <p>
        We moved from our 18,000 sq.ft. facility into a 125,000 sq.ft. facility
        to meet the demands of our business growth.
      </p>
      <p>
        Never standing still, and to meet the ever-growing demands of our
        customers and end-users, we upgraded our IT system again.
      </p>
    </TimelineEntry>
  );
}

export default styled(MadeCompany)``;
