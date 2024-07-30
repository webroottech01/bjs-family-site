import styled from "styled-components";
import { Styleable } from '@bjsdistribution/components';
import TimelineEntry, { SupportingMedia } from "components/about/timeline/entry";

import path from "components/about/timeline/path";

function RecalibratedBusiness(props: Styleable) {
  return (
    <TimelineEntry className={props.className} year={2014} image={<Image/>}>
      <p>
        As well as improving processes and systems to increase and improve our
        services, we recalibrated our business to ensure that our rapid growth
        would not affect our overall performance.
      </p>
    </TimelineEntry>
  );
}



function Image() {
  return (
    <ImageContainer>
      <img src={`${path}/warehouse.jpg`} />
    </ImageContainer>
  );
}

const ImageContainer = styled(SupportingMedia)`
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }
  background: url(${path}/warehouse.jpg) no-repeat;
  img {
    width: 100%;
    border-radius: 12px;
    padding: 0px !important;
  }
`;

export default styled(RecalibratedBusiness)``;