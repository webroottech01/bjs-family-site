import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";

import { Abstract } from "components/services/expectancy/entry";
import Entry, {
  Body as EntryBody,
  Circle,
  ImageContainer,
} from "components/services/expectancy/entry/ImageTitleDescription";

import articCurtainsiders from "/public/images/services/construct-it/the-fleet/artic-curtain.png";
import articCranes from "/public/images/services/construct-it/the-fleet/artic-cranes.png";
import drawbarCranes from "/public/images/services/construct-it/the-fleet/drawbar-cranes.png";
import rest from "/public/images/services/construct-it/the-fleet/rest.png";

const Intro = styled.p``;
const Container = styled(Abstract)`
  ${Intro} {
    padding-bottom: 30px;
  }
`;

const CentralEntry = styled(Entry)`
  align-items: center;
`;

const Entries = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${ImageContainer} {
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;
  }

  ${Circle} {
    height: 100px;
    min-width: 100px;
  }

  ${Entry}:not(${CentralEntry}) {
    ${EntryBody} {
      padding-top: 18px;
    }
  }
`;

function TheFleet(props: Styleable) {
  return (
    <Container className={props.className} title="the fleet">
      <Intro>
        To do our jobs safely whilst providing great service for you and good
        working conditions for our team - we've invested heavily in a
        head-turning fleet of trucks.
      </Intro>
      <Entries>
        <Entry
          title="artic curtainsiders"
          description={[
            "We currently operate 60 artic curtainsider vehicles between BJS Haulage & Construct IT, offering nationwide deliveries to builders merchants and sites, where the customer is able to forklift unload.",
            "This is the most cost-effective solution, for delivery of building materials.",
          ]}
          image={articCurtainsiders}
        />
        <CentralEntry
          title="artic brick cranes"
          description="We operate a mixture of centre mount & roll along artic cranes, to ensure safe offload of your products, on building sites where restricted access isn’t a problem."
          image={articCranes}
        />
        <Entry
          title="drawbar brick cranes"
          description="For sites where access may be restricted, we can offer drawbar cranes. If required, our drivers can drop the trailer in a safe location and deliver into site with a 6 wheel rigid crane, before returning to tran-ship the balance of the product."
          image={drawbarCranes}
        />
        <Entry
          title="urban brick cranes"
          description="Our urban cranes trailers can operate similar to artic cranes, but have the flexibility to shorten in length and access restricted sites, where an 8 wheel rigid would normally be required. We’ve designed our trailers in conjunction with Atlas Cranes & Dennison Trailers, to offer increased stability and payload."
          image={rest}
        />
        <Entry
          title="artic moffett"
          description="In addition to the crane offload method, we can also provide vehicles with a demountable moffett (forklift truck), to collect and/or deliver your goods."
          image={rest}
        />
      </Entries>
    </Container>
  );
}

export default styled(TheFleet)``;
