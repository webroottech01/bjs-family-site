import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

import What3Words from "./What3Words";
import ViewOnGoogleMaps from "./ViewOnGoogleMaps";
import HeadOfficePointer from "./HeadOfficePointer";


import dynamic from 'next/dynamic'
import PointerBounce from "./PointerBounce";

function Content({ className }: Styleable) {
  return (
    <Container className={className}>
      <HeadOfficePointer />
      <PointerBounce/>
      <What3Words />
      <ViewOnGoogleMaps />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  ${What3Words}, ${ViewOnGoogleMaps}, ${HeadOfficePointer} {
    z-index: 5;
  }

  ${PointerBounce} {
    z-index: 6;
    position: absolute;
    top: 115px;

    ${down("sm")} {
      top: 140px;
    }
  }
  ${HeadOfficePointer} {
    margin-top: 95px;

    ${down("sm")} {
      margin-top: 120px;
    }
  }

  ${What3Words} {
    margin-top: 30px;

    ${down("sm")} {
      margin-top: 60px;
    }
  }

  ${ViewOnGoogleMaps} {
    margin-top: auto;
    margin-bottom: 40px;
  }
`;

export default styled(Content)``;
