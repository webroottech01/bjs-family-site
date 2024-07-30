import styled from "styled-components";
import { Styleable, Button } from "@bjsdistribution/components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/pro-regular-svg-icons";

import { useResetExpanded } from "/components/careers/store";

function BackButton(props: Styleable) {
  const setExpanded = useResetExpanded();

  return (
    <Element onClick={setExpanded} wide>
      <FontAwesomeIcon icon={faChevronLeft} />
      Back
    </Element>
  );
}

const Element = styled(Button)`
  background: transparent;
  border: 1px solid #8e867b;
  color: #8e867b;
  gap: 13px;
`;

export default styled(BackButton)``;