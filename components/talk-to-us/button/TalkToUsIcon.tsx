import styled from "styled-components";
import {colours, Styleable} from "@bjsdistribution/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentsAlt } from "@fortawesome/pro-solid-svg-icons";


type Props = {
  onClick?: () => void;
} & Styleable;
function TalkToUsIcon(props: Props) {
  return  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={29.764}
  height={26.22}
  {...props}
>
  <path
    data-name="Path 2"
    d="M18.184 14.873h-9.8l-4.277 3.208a.5.5 0 01-.7-.1.485.485 0 01-.1-.3v-2.8A3.309 3.309 0 010 11.572V3.306A3.309 3.309 0 013.306 0h14.878a3.309 3.309 0 013.306 3.306v8.265a3.3 3.3 0 01-3.306 3.3z"
    fill="#5f5d5b"
    opacity={0.4}
  />
  <path
    data-name="Path 3"
    d="M29.764 11.971v7.917a3.17 3.17 0 01-3.167 3.167h-1.583v2.687a.477.477 0 01-.48.48.5.5 0 01-.287-.094l-4.1-3.073h-6.22a3.17 3.17 0 01-3.163-3.168V16.72h7.917a4.758 4.758 0 004.75-4.75V8.804h3.167a3.17 3.17 0 013.166 3.167z"
    fill="#5f5d5b"
  />
</svg>
}

const Icon = styled(FontAwesomeIcon)`
  height: 30px;
  color: white;// ${colours.black};
`;

const Container = styled.div`
  position: relative;
`;

export default styled(TalkToUsIcon)``;
