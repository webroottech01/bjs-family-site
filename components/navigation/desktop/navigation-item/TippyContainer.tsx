import { forwardRef, useEffect, useState } from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import useCurrentHovered from "./services-dropdown/services-dropdown-store";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import getConfig from "subsidiary-config";
import { useLeftLayout } from "./about-dropdown";

export type DropdownName = "about" | "services";
interface Props {
  dropdownName: DropdownName;
  component: JSX.Element;
  children: JSX.Element;
}

const getDelta = (input: string): number => {
  if (!input.startsWith("matrix")) {
    throw new Error(`Invalid input - must be a matrix variant`);
  }
  const betweenParenthesis = /\(([^)]+)\)/;
  const values = betweenParenthesis.exec(input);
  if (!values) {
    throw new Error(`Invalid input - must have parenthesis`);
  }
  const numbers = values[1].split(",");
  if (numbers.length != 6) {
    throw new Error(`Invalid input - matrix must be of length 6`);
  }
  return parseInt(numbers[4]);
};

const Container = forwardRef((props: Props, ref: any) => {
  const hovered = useCurrentHovered();
  const [isOverlapping, setOverlapping] = useState(false);

  const determineIsOverlapping = () => {
    if (!document) {
      return false;
    }
    const arrow: any = document.querySelector(".tippy-arrow");
    if (!arrow) {
      return false;
    }
    const transform = getComputedStyle(arrow).transform;
    const delta = getDelta(transform);
    let navigationWidth = getNavigationWidth(props.dropdownName);
    if (delta < 350) {
      navigationWidth = delta - 1;
    }
    return delta < navigationWidth;
  };
  const arrowColourPlugin = {
    fn: () => ({
      onMount: () => {
        handleResize();
      },
      onHidden: () => {},
    }),
  };

  const handleResize = () => {
    setOverlapping(determineIsOverlapping());
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <TippyContainer
      interactive
      arrow
      offset={[0, 30]}
      color={getColour(props.dropdownName, isOverlapping, hovered)}
      placement="bottom-end"
      content={props.component}
      ref={ref}
      plugins={[arrowColourPlugin]}
    >
      {props.children}
    </TippyContainer>
  );
});

const getNavigationWidth = (input: DropdownName): number => {
  if (input === "about") {
    return 387;
  } else if (input === "services") {
    return 1093;
  }
  return -1;
};

const getColour = (
  input: DropdownName,
  isOverLeft: boolean,
  subsidiary: Subsidiary
): string => {
  if (isOverLeft) {
    return "white";
  }
  if (input === "about") {
    return "white";
  }
  if (input === "services") {
    return getSubsidiaryColour(subsidiary);
  }
  return "#E7E5E1";
};

const getSubsidiaryColour = (input: Subsidiary): string => {
  switch (input) {
    case "home delivery":
      return "#E2E0DD";
    case "extra":
      return getConfig("extra").primaryColour;
    case "haulage":
      return "black";
    case "constructit":
      return "#171E24";
    default:
      return "none";
  }
};

const TippyContainer = styled(Tippy)<{
  color: string;
}>`
  max-width: 100% !important;
  background-color: transparent;
  &.tippy-box {
    background: transparent;
    background-color: transparent;
    @media only screen and (min-width: 856px) and (max-width: 991px) {
      .tippy-arrow {
        color: #fff;      
      }
    }
    @media only screen and (min-width: 1020px) and (max-width: 4600px) {
      .tippy-arrow {
        color: #fff;
      }
    }
    }

  .tippy-content {
    padding: 0px;
  }

  .tippy-arrow {
    color: ${(props) => props.color};
    @media (hover: none) and (pointer: fine) {
      color: ${(props) => props.color};
    }
    z-index: 1;
    ::before {
      top: -20px !important;
      border-width: 0 20px 23px !important;
    }
  }
  @media (hover: none) and (pointer: fine) {
    .tippy-arrow {
      color: ${(props) => props.color} !important;
    }
  }
`;



export default Container;
