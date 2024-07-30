import styled, { css } from "styled-components";
import { up, down, only } from "styled-breakpoints";

import { colours } from "@bjsdistribution/components";

const BasicStyling = css`
  text-align: center;
  position: absolute;
  font-size: 150px;
  font-family: "Eveleth";
  line-height: 1.5em;
  word-spacing: 1.5em;
  white-space: nowrap;

  color: ${colours.black};
  z-index: 3;
  transform: rotate(-6deg);

  @media only screen and (max-width: 1910px) {
    font-size: 140px;
  }

  @media only screen and (max-width: 1800px) {
    font-size: 130px;
  }

  @media only screen and (max-width: 1670px) {
    font-size: 120px;
  }

  @media only screen and (max-width: 1605px) {
    font-size: 110px;
  }

  @media only screen and (max-width: 1550px) {
    font-size: 90px;
  }

  ${down("sm")} {
    font-size: 70px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 50px;
  }
`;

const LargeScreen = css`
  ::before {
    ${BasicStyling};
    content: "Smiling whatever";

    top: 100px;
    left: -5px;
    @media only screen and (max-width: 1605px) {
      word-spacing: 3em;
    }
    @media only screen and (max-width: 1550px) {
      left: 50px;
      word-spacing: 4.5em;
    }

    @media only screen and (max-width: 1470px) {
      left: 15px;
    }

    //Under 1400, move text to the right
    @media only screen and (max-width: 1400px) {
      left: 400px;
      word-spacing: normal;
    }

    @media only screen and (max-width: 1305px) {
      left: 280px;
      word-spacing: normal;
      content: "Smiling \ whatever";
      white-space: pre-wrap;
      top: 0px;
    }

    @media only screen and (min-width: 2000px) {
      word-spacing: 3em;
    }

    @media only screen and (min-width: 2300px) {
      left: 10%;
    }

    @media only screen and (min-width: 2700px) {
      left: 13%;
    }
  }
  ::after {
    ${BasicStyling};
    top: 260px;
    left: 410px;
    word-spacing: 2em;

    @media only screen and (max-width: 1605px) {
      word-spacing: 3em;
      left: 330px;
    }

    @media only screen and (max-width: 1550px) {
      word-spacing: 4.5em;
      left: 300px;
    }

    @media only screen and (max-width: 1470px) {
      left: 270px;
    }

    content: "The weather";

    @media only screen and (max-width: 1400px) {
      left: auto;
      right: 0px;
      word-spacing: normal;
    }

    @media only screen and (min-width: 2000px) {
      word-spacing: 3em;
    }

    @media only screen and (min-width: 2300px) {
      left: 26%;
    }

    @media only screen and (min-width: 2700px) {
      left: 27%;
    }
  }
`;

const TabletScreen = css`
  ::before {
    ${BasicStyling};
    white-space: pre-wrap;
    content: "Smiling \\a whatever";
  }
  ::after {
    ${BasicStyling};
    top: 260px;
    text-align: left;
    white-space: pre-wrap;
    content: "The \\a weather";
    left: 25px;

    ${down("sm")} {
      top: 200px;
    }

    @media only screen and (max-width: 450px) {
      top: 150px;
      left: 20px;
    }
  }
`;

const Index = styled.div`
  ${up("lg")} {
    ${LargeScreen};
  }
  ${down("md")} {
    ${TabletScreen};
  }
`;

export default Index;
