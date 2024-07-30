import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import Image from "next/image";

import desktopBackground from "public/images/footer/desktop_background.jpg";
import mobileBackground from "public/images/footer/mobile_background.jpg";

import Content from "./Content";

import useIsMobile from "components/util/useIsMobile";
import { useMemo } from "react";

function Map(props: Styleable) {
  const isMobile = useIsMobile();
  const image = useMemo(() => {
    if (isMobile) {
      return mobileBackground;
    }
    return desktopBackground;
  }, [isMobile]);

  if (isMobile) {
    return null;
  }
  return (
    <Container className={props.className}>
      <Content />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;

  ${up("md")} {
    justify-content: flex-end;
    padding-right: 50px;
    width: 433px;
    height: 300px;
  }

  ${down("sm")} {
    justify-content: center;
    height: 360px;
  }
`;
export default styled(Map)``;
