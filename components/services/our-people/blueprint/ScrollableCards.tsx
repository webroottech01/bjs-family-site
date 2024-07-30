import styled from "styled-components";
import {down} from "styled-breakpoints";
import { WithChildren, Styleable, colours } from "@bjsdistribution/components";
import { forwardRef } from "react";

import Card from "./Card";

type AllProps = WithChildren & Styleable;
const ScrollableCards = forwardRef<HTMLDivElement, AllProps>((props, ref) => {
  return (
    <Container ref={ref} className={props.className}>
      {props.children}
    </Container>
  );
});

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 1920px) {
    width: 100%;
  }

  ${Card} {
    margin-right: 30px;
  }

  scroll-padding: 30px;
  z-index: 5;
  overflow: auto;
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar:horizontal {
    padding-top: 50px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    // border: 2px solid white; /* should match background, can't be transparent */
    background-color: rgba(58, 54, 48, 0.15);
    border-radius: 66px;
  }

  ::-webkit-scrollbar-track-piece {
    margin: 0px 20px;
    // border-top-left-radius: 66px;

    height: 30px;
    background: transparent
      radial-gradient(
        closest-side at 50% 50%,
        rgba(242, 238, 232, 0.1) 0%,
        rgba(58, 54, 48, 0.1) 100%
      )
      0% 0% no-repeat padding-box;
    //  border-radius: 66px;
  }

  ${down("xs")} {
    //display: none; //Do not show this on such small screens
  }
`;

export default Container;
