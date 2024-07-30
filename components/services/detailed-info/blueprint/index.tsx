import styled from "styled-components";
import { only, down } from "styled-breakpoints";

import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import getConfig from "subsidiary-config";

import DetailedHeader from "./DetailedHeader";
import Box from "./Box";

const Text = styled.span`
  white-space: pre-line;
  font-size: 16px;

  a{
    color:#fff;
  }
`;

const Boxes = styled.div`
  display: flex;
  > :not(:last-child) {
    margin-right: 40px;
  }

  ${down("sm")} {
    flex-direction: column;
    > :not(:last-child) {
      margin-right: 0px;
      margin-bottom: 20px;
    }
  }
`;

const Container = styled.div<{ subsidiary: Subsidiary }>`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: visible;
  overflow-x: clip;
  width: 100%;

  padding: 100px;
  background: ${(props) => getConfig(props.subsidiary).primaryColour};

  @media only screen and (max-width: 1600px) {
    padding: 100px 60px;
  }

  ${DetailedHeader} {
    img {
      height: 180px;
    }
    margin-bottom: 60px;

    ${down("md")} {
      img {
        height: 160px;
      }
      margin-bottom: 30px;
    }

    ${down("sm")} {
      img {
        height: 117px;
      }
    }
  }

  ${Text} {
    margin-bottom: 60px;
    ${down("md")} {
      margin-bottom: 40px;
    }
  }

  ${only("md")} {
    padding: 30px 20px 0px 20px;
  }

  ${down("sm")} {
    padding: 50px 20px 90px 20px;
    background-image: none;
  }
`;

export { Container, Text, Boxes, Box };
