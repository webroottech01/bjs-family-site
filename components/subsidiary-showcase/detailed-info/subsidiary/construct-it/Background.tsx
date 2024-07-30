import { Styleable } from "@bjsdistribution/components";
import { useMemo } from "react";
import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import Image from "next/image";
//import desktopBackground from "public/images/showcase/DesktopBackgrounds_ConstructIT.jpg";
import desktopBackground from "public/images/showcase/constructit.png";
import tabletBackground from "public/images/showcase/constructit_tablet.jpg";
import mobileBackground from "public/images/showcase/constructit_mobile.jpg";

import { useIsDesktop } from "components/util/useIsTabletOrSmaller";
import useIsMobile from '/components/util/useIsMobile';

function Background({ className }: Styleable) {
  const isDesktop = useIsDesktop();
  const isMobile = useIsMobile();
  const src = useMemo(() => {
    if (isDesktop) {
      return desktopBackground;
    } else if (isMobile) {
      return mobileBackground;
    }
    return tabletBackground;
  }, [isDesktop]);

  return (
    <Container className={className}>
      <RelativeContainer>
        <Image src={src} layout="fill" objectFit="cover" quality={100} />
      </RelativeContainer>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${up("lg")} {
    margin: -100px;
  }
  ${down("md")} {
    margin: -50px -40px;
  }

  ${down("sm")} {
    margin: -20px;
    margin-top: -45px;
  }

  background: #15191c;
`;

const RelativeContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  ${down("md")} {
    width: 70%;
  }

  ${down("sm")} {
    width: 59%;
    height: 300px;
  }
`;

export default styled(Background)``;
