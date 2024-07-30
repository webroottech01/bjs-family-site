import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";
import ClientAffirmation from "../component/index";
import { ClientLogo } from "components/about/what-makes-bjs-different/client-affirmation/component/large";

import prisonBreak from "public/images/about/what-makes-us-different/prison-break.jpg";
import { down } from "styled-breakpoints";

function RicherSounds(props: Styleable) {
  return (
    <Affirmation
      className={props.className}
      client="richerSounds"
      quote="We are a demanding client and they keep us very happy"
      image={prisonBreak}
      description="BJS have given us consistently excellent service over a number of years. They handle our most important customers nationally… a vital role that must be carried out to the highest possible standard. We are a demanding client and they keep us very happy."
      author={{
        name: "Julian Richer",
        role: "Founder & Managing Director",
      }}
      largeQuote
    />
  );
}

const Affirmation = styled(ClientAffirmation)`
  ${ClientLogo} {
    width: 200px;
    height: 30px; // increase in height won't making any difference
    background-size: contain;
    background-repeat: no-repeat;
    ${down("sm")} {
      background-size: 119px;
      background-color: white;
      background-position: center;
      border-radius: 50%;
      position: absolute;
      right: 0px;
      top: 50px;
      box-shadow: 0px 3px 20px #0000001A;
    }
  }
`;

export default styled(RicherSounds)``;
