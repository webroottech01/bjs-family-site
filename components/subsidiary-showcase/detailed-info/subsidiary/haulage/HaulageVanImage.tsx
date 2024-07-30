import styled from "styled-components";
import { up, only, down } from "styled-breakpoints";
import { Button, colours } from "@bjsdistribution/components";
import DetailedInfo, {
  Title,
  Text,
} from "components/subsidiary-showcase/detailed-info/blueprint/DetailedInfo";

import { Highlight } from "components/subsidiary-showcase/detailed-info/blueprint/points/mobile/header/Entry";
import { useIsOnlyTablet } from "components/util/useIsTabletOrSmaller";
import { useMemo } from "react";
import useIsMobile from "/components/util/useIsMobile";

const Image = styled.img`
  position: absolute;
  right: 0px;
  bottom: 0px;

  ${down("md")} {
    bottom: -30px;
    left: 110px;
    height: 784px;
  }
  ${down("sm")} {
    left: -198px;
    height: 285px;
    bottom: 0px;
  }

  @media only screen and (max-width: 75px) and (min-width: 600px) {
    right: 0;
    left: auto;
  }
`;

function HaulageVanImage() {
  const url = useImageUrl();
  return <Image src={url} alt="Featured BJS Haulage vans" />;
}

function useImageUrl() {
  const tablet = useIsOnlyTablet();
  const isMobile = useIsMobile();
  const uri = useMemo(() => {
    if (tablet) {
      return `haulage_tablet.jpg`;
    } else if (isMobile) {
      return `haulage.png`;
    }
    return `DesktopBackgrounds_Haulage.jpg`;
  }, [tablet]);
  return `/images/showcase/${uri}`;
}

export default HaulageVanImage;
