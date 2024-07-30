import styled from "styled-components";
import { up } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";
import TimelineEntry, {
  SupportingMedia,
} from "components/about/timeline/entry";

import path from "components/about/timeline/path";

function NewITSystem(props: Styleable) {
  return (
    <TimelineEntry
      year={2010}
      right
      className={props.className}
      image={<Media />}
    >
      <p>
        We grew fast, purchasing a fleet of 10 vans, enabling us to grow our
        business and win some great new clients.
      </p>
      <p>
        To handle the upturn in orders and improve our overall efficiency, we
        invested in a new IT system.
      </p>
    </TimelineEntry>
  );
}

const MediaContainer = styled(SupportingMedia)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 20px;
  justify-content: space-between;
  @media only screen and (min-width: 1450px) {
    min-width: 350px !important;
  }
  ${up("lg")} {
    max-height: 250px;
    // width: 20%;
  }
`;

const Vans = styled.img`
  max-height: 90px;
  margin-right: auto;
  padding: 0px !important;
  width: 60% !important;
`;

const System = styled.img`
  max-height: 100px;
  margin-left: auto;
  padding: 0px !important;
  width: 60% !important;
`;

function Media() {
  // <img src={`${path}/IT-system.svg`} />
  return (
    <MediaContainer>
      <Vans src={`${path}/10-vans.svg`} />
      <System src={`${path}/tracking-technology.svg`} />
    </MediaContainer>
  );
}

export default styled(NewITSystem)``;
