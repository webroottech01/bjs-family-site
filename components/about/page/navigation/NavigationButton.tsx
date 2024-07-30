import styled from "styled-components";
import { Button, Styleable, colours } from "@bjsdistribution/components";

import AboutPage, { useNavigateTo } from "components/about/page/AboutPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/pro-regular-svg-icons";

type Direction = "left" | "right";

interface Props extends Styleable {
  page: AboutPage;
  direction: Direction;
  id: AboutPage;
}

function NavigationButton(props: Props) {
  const { direction, page, id } = props;
  const navigateTo = useNavigateTo();
  const aboutPageId = id.replace(/ /g, "-").toLowerCase();

  return (
    <NavButton 
      id={"navigation-go-to-desktop-navigation-" + aboutPageId}
      onClick={() => navigateTo(page)}
    >
      {direction === "left" && <Icon direction="left" icon={faChevronLeft} />}
      {props.page}
      {direction === "right" && (
        <Icon direction="right" icon={faChevronRight} />
      )}
    </NavButton>
  );
}

const NavButton = styled(Button)`
  padding: 13px 24px;
  font-size: 16px;
  font-weight: unset;
  border: 1px solid #a7a6a4;
  background: rgba(255, 255, 255, 0.4);
  color: ${colours.black};
  text-transform: capitalize;
  font-family: "Gotham SSm A", "Gotham SSm B";
`;

const Icon = styled(FontAwesomeIcon)<{ direction: Direction }>`
  ${(props) => props.direction === "left" && "margin-right: 15px;"};
  ${(props) => props.direction === "right" && "margin-left: 15px;"};
`;

export default styled(NavigationButton)``;
