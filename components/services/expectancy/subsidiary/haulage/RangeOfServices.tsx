import styled from "styled-components";
import { down } from "styled-breakpoints";

import { Abstract } from "components/services/expectancy/entry";
import { Styleable } from "@bjsdistribution/components";

import Entry from "components/services/expectancy/entry/ImageTitleDescription";

import tailorMade from "/public/images/services/haulage/range-of-services/tailor-made.svg";
import endToEnd from "/public/images/services/haulage/range-of-services/end-to-end.svg";
import sameDay from "/public/images/services/haulage/range-of-services/same-day.svg";
import economy from "/public/images/services/haulage/range-of-services/economy.svg";
import timeCritical from "/public/images/services/haulage/range-of-services/time-critical.svg";
import backloads from "/public/images/services/haulage/range-of-services/backloads.svg";
import groupage from "/public/images/services/haulage/range-of-services/groupage.svg";
import collections from "/public/images/services/haulage/range-of-services/collections.svg";
import pallets from "/public/images/services/haulage/range-of-services/pallets.svg";
import standingTrailers from "/public/images/services/haulage/range-of-services/standingTrailers.png";

function RangeOfServices(props: Styleable) {
  return (
    <Container title="broad range of services" className={props.className}>
      <Intro>
        We offer a broad range of services from tailor-made to economy and
        everything in between.
      </Intro>
      <Grid>
        <Entry
          image={tailorMade}
          title="tailor-made"
          description="First and foremost, we're a service-led business - so if your requirements don't quite fit the norm, we're happy to fit around you... Just ask!"
        />
        <Entry
          image={endToEnd}
          title="end-to-end"
          description="You can be confident we’ll deliver an end-to-end service which is driven by the highest customer service levels."
        />
        <Entry
          image={sameDay}
          title="same-day"
          description="Our drivers are a well-trained and determined bunch, so when they say they’ll get it there – they’ll move heaven and earth to make it happen."
        />
        <Entry
          image={economy}
          title="economy"
          description="We’re good value, and to be straight – it’s a competitive market and we can’t afford to be anything else."
        />
        <Entry
          image={timeCritical}
          title="time critical"
          description="Even if time is not on your side, rest easy in the knowledge that our team are ready and willing to help in any way we can."
        />
        <Entry
          image={backloads}
          title="backloads"
          description="Our constant drive towards increasing efficiency, reducing costs means we provide backloads and return loads wherever possible."
        />
        <Entry
          image={groupage}
          title="groupage"
          description="We’re happy to offer groupage deliveries as a cost-efficient way of transporting smaller consignments with the minimum fuss."
        />
        <Entry
          image={collections}
          title="collections"
          description="No frills and no fuss – we can collect your consignments from anywhere in the UK to ensure a convenient and hassle-free process."
        />
        <Entry
          image={pallets}
          title="pallets"
          description="Pallet availability can quickly cause delays in your supply chain, so we’ll happily collect and deliver full or partial pallet loads."
        />
        <Entry
          image={standingTrailers}
          title="standing trailers"
          description="For further convenience we are able to provide customers with a standing trailer service at their own premises which we can collect when ready."
        />
      </Grid>
    </Container>
  );
}

const Intro = styled.p``;

const Container = styled(Abstract)`

  ${Intro} {
    padding-bottom: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 60px;

  @media only screen and (max-width: 1465px) {
    grid-template-columns: 1fr;
    gap: 23px;
  }
`;

export default styled(RangeOfServices)``;
