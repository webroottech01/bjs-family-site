import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";
import ClientAffirmation from "../component/index";
import { ClientLogo } from "components/about/what-makes-bjs-different/client-affirmation/component/large";
import julianBowen from "public/images/about/what-makes-us-different/julian-bowen.jpg";

function JulianBowen(props: Styleable) {
  return (
    <Affirmation
      className={props.className}
      client="julianBowen"
      quote="The service BJS offered was a perfect fit for us in terms of coverage and automation"
      image={julianBowen}
      description="We used to have our own delivery fleet service and drivers, but the service BJS offered was a perfect fit for us in terms of coverage and automation. Outsourcing delivery to a specialist company was a logical decision and the best thing we’ve ever done. Choice for our customers, and tracking portals – has really helped our business to grow."
      author={{
        name: "Julian Bowen",
        role: "Operations Team",
      }}
    />
  );
}

const Affirmation = styled(ClientAffirmation)`
  ${ClientLogo} {
    height: 35px;
  }
`;

export default styled(JulianBowen)``;
