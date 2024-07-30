import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";
import ClientAffirmation from "../component/index";
import { ClientLogo } from "components/about/what-makes-bjs-different/client-affirmation/component/large";

import tvBedCircle from "public/images/about/what-makes-us-different/tv-bed-store.jpg";

function TvBedStore(props: Styleable) {
  return (
    <Affirmation
      className={props.className}
      client="tv bed store"
      quote="The efficiency and professional nature of our deliveries does us proud"
      image={tvBedCircle}
      description="BJS has been our go-to delivery partner for a couple of years. Why? Because we trust them like our own staff. Being a small but growing business, customer services needs to be at the heart of everything we do."
      author={{
        name: "Stewart Daniels",
        role: "Operations Director",
      }}
    />
  );
}

const Affirmation = styled(ClientAffirmation)`
  ${ClientLogo} {
    height: 35px;
  }
`;

export default styled(TvBedStore)``;
