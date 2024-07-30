import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";

import {useSetTrackOrderVisible} from "components/landing/track-your-order/useOrderTrackPreferences";

function Close(props: Styleable) {
  const setVisible = useSetTrackOrderVisible();
  const hide = () => setVisible(false);
  return <Icon className={props.className} icon={faTimes} onClick={hide} />;
}

const Icon = styled(FontAwesomeIcon)`
  color: #e0dfdf;
  font-size: 26px !important;
  cursor: pointer;

  :hover {
    color: ${colours.yellow};
  }
`;

export default styled(Close)``;
