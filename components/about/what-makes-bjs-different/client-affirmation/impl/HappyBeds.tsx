import { Styleable } from "@bjsdistribution/components";
import styled from "styled-components";
import ClientAffirmation from "../component/index";
import { ClientLogo } from "components/about/what-makes-bjs-different/client-affirmation/component/large";

import happyBedsCircle from "public/images/about/what-makes-us-different/happy-beds.jpg";

function HappyBeds(props: Styleable) {
  return (
    <Affirmation
      className={props.className}
      client="happy beds"
      quote="Exceptional & consistent service every time with helpful delivery options"
      image={happyBedsCircle}
      description="BJS provides Happy Beds with exceptional and consistent service every time with helpful delivery options. Happy Beds' customers are always complimenting the friendly and polite delivery drivers, so we couldn't be happier!"
      author={{
        name: "Happy beds",
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

export default styled(HappyBeds)``;
