import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import { down } from "styled-breakpoints";
import { Styleable } from "@bjsdistribution/components";

import SearchInput from "./search-input";
import SelectADepartment from "./select-a-department";

import { useIsDesktop } from "components/util/useIsTabletOrSmaller";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";
import { useSetSearchExtended } from "./store";

function Search(props: Styleable) {
  const isDesktop = useIsDesktop() ?? false;
  const [expanded, setExpanded] = useState(false);
  const setSearchExtended = useSetSearchExtended();

  useEffect(() => {
    if (isDesktop) {
      setExpanded(true);
      setSearchExtended(true);
    }
  }, [isDesktop]);

  const isNotExpanded = useMemo(() => !expanded, [expanded]);

  const showSelectDepartment = useMemo(() => {
    if (isDesktop) {
      return true;
    }
    return isNotExpanded;
  }, [isNotExpanded, isDesktop]);

  return (
    <Container className={props.className} isExpanded={expanded}>
      <SearchInput
        isExpanded={expanded}
        onClick={() => {
          setExpanded(true);
          setSearchExtended(true);
        }}
      />
      {showSelectDepartment && (
        <>
          <Text>or</Text>
          <SelectADepartment />
        </>
      )}
      {expanded && !isDesktop && (
        <CloseIcon
          icon={faTimes}
          onClick={() => {
            setExpanded(false);
            setSearchExtended(false);
          }}
        />
      )}
    </Container>
  );
}

const CloseIcon = styled(FontAwesomeIcon)`
  font-size: 36px !important;
`;

const Text = styled.span`
  font-size: 16px;
  color: white;
`;

const Container = styled.div<{ isExpanded: boolean }>`
  display: flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: ${(props) => (props.isExpanded ? 15 : 40)}px;
  }
  width: 100%;

  ${down("md")} {
    justify-content: unset;
  }
  ${down("sm")} {
    justify-content: space-between;
    > :not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export default styled(Search)``;
