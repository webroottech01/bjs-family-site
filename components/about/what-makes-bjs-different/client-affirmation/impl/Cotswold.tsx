import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";
import ClientAffirmation from "../component/index";
import { ClientLogo } from "components/about/what-makes-bjs-different/client-affirmation/component/large";

import cotswoldGuy from "public/images/about/what-makes-us-different/cotswoldCo.jpg";
import { down } from "styled-breakpoints";

function Cotswold(props: Styleable) {
  return (
    <Affirmation
      className={props.className}
      client="cotswold"
      quote="Flexible approach and strong relationship we have built together"
      image={cotswoldGuy}
      description="As an online retailer the final mile is perhaps the most crucial event in our customer journey and we have full confidence in BJS to always deliver the service our customers expect from us providing clear and regular communication to both us and our customers all the way through the process. As a business partner over many years we have particularly valued the flexible approach and strong relationship we have built together."
      author={{
        name: "Alan Joseph",
        role: "Operations Director",
      }}
      largeQuote
    />
  );
}

const Affirmation = styled(ClientAffirmation)`
  ${ClientLogo} {
    width: 153px;
    height: 70px;
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
      box-shadow: 0px 3px 20px #0000001a;
    }
  }
`;

export default styled(Cotswold)``;
