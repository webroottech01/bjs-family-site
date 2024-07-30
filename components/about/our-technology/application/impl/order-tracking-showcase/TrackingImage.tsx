import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down, only } from "styled-breakpoints";

import ourTechnology from "public/images/about/what-makes-us-different/our-technology.png";
function TrackingImage(props: Styleable) {
  return <Image src={ourTechnology.src} />;
}

const Image = styled.img`
  ${up("lg")} {
    height: 900px;
    position: absolute;
    right: -50px;
    top: -250px;
  }

  ${down("md")} {
    height: 500px;
    width: 350px;
  }
  ${down("sm")} {
    height: 500px;
    width: 100%;
  }
`;

export default TrackingImage;
