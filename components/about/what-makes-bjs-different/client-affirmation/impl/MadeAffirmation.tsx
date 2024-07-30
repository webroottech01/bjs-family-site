import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";
import ClientAffirmation from "../component/index";
import { ClientLogo } from "components/about/what-makes-bjs-different/client-affirmation/component/large";

import madeGuy from "public/images/about/what-makes-us-different/made.jpg";
import { down } from "styled-breakpoints";

function MadeAffirmation(props: Styleable) {
  return (
    <Affirmation
      className={props.className}
      client="MADE"
      quote="Ability to react quickly to changes, whilst providing consistent levels of service"
      image={madeGuy}
      description="BJS have provided two-man home delivery services for us for more than seven years and over this time we have seen significant growth. Our relationship has been built on their ability to react quickly to changes, whilst providing consistent levels of service."
      author={{
        name: "Philippe Chaineiux",
        role: "CEO",
      }}
      largeQuote
    />
  );
}

const Affirmation = styled(ClientAffirmation)`
  ${ClientLogo} {
    width: 140px;
    height: 140px;
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

export default styled(MadeAffirmation)``;
