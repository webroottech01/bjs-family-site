import { useState } from "react";
import styled from "styled-components";
import { Styleable, Button, colours } from "@bjsdistribution/components";
import { down, up } from "styled-breakpoints";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/pro-regular-svg-icons";

import { useSearchQueryState } from "components/careers/search-bar/store";
import usePerformSearch from "./usePerformSearch";
import { useIsDesktop } from "components/util/useIsTabletOrSmaller";

interface Props extends Styleable {
  isExpanded: boolean;
  onClick: () => void;
}

function SearchInput(props: Props) {
  const isDesktop = useIsDesktop();

  const [liveQuery, setLiveQuery] = useSearchQueryState();
  const performSearch = usePerformSearch();

  const [localValue, setLocalValue] = useState(liveQuery); 
  const setLiveQueryFromLocal = () => performSearch(localValue);

  const onClick = () => {
    if (props.isExpanded) {
      setLiveQueryFromLocal();
    } else {
      props.onClick();
    }
  };

  const isSearchBarEnable = () => {
    if (isDesktop && localValue.trim().length === 0) return true
    else if (props.isExpanded && localValue.trim().length === 0) return true
    else return false
  }

  return (
    <Container className={props.className} isExpanded={props.isExpanded}>
      {props.isExpanded && (
        <Input
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClick();
            }
          }}
        />
      )}
      <Button
        shape="circle"
        icon={<FaIcon icon={faSearch} />}
        onClick={onClick}
        disabled={isSearchBarEnable()}
      />
    </Container>
  );
}

const FaIcon = styled(FontAwesomeIcon)``;

const Input = styled.input.attrs({
  placeholder: "Search for a job position or department",
})`
  border: none;
  height: 56px;
  border-radius: 6px;
  text-indent: 20px;
  ${down("sm")} {
    text-indent: 10px;
  }
  ${up("lg")} {
    width: 600px !important;
  }
`;

const Container = styled.div<{ isExpanded: boolean }>`
  display: flex;
  > :not(:last-child) {
    margin-right: 10px;
  }
  width: 100%;
  ${down("md")} {
    width: ${(props) => props.isExpanded ? "100%" : "unset"};
  }
  ${Button.PlainButton} {
    max-height: 56px;
    max-width: 56px;
    min-width: 56px;
    min-height: 56px;
    ${(props) => props.isExpanded && "margin-left: auto;"};

    :hover {
      background: ${colours.black};
      border: 1px solid ${colours.black};

      svg {
        color: ${colours.yellow};
      }
    }
  }
  ${Input} {
    ${(props) => props.isExpanded && "width: 100%;"}
  }
`;
export default SearchInput;
