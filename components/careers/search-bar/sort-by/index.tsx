import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import Select, { Input as Element } from "components/util/select";
import Subtitle from "./Subtitle";

import {
  allSortOptions,
  SortType,
  useSearchExtended,
  useSortQueryState,
} from "components/careers/search-bar/store";
import useIsTabletOrSmaller from "/components/util/useIsTabletOrSmaller";

interface Props {
  withSubtitle?: boolean;
}

function SortBy(props: Props & Styleable) {
  const withSubtitle = props.withSubtitle ?? false;

  const [sortBy, setSortBy] = useSortQueryState();
  const searchExtended = useSearchExtended();
  if(useIsTabletOrSmaller() && searchExtended) {
    return null;
  }
  return (
    <Container className={props.className}>
      {withSubtitle && <Subtitle />}
      <Input
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value as SortType)}
      >
        {allSortOptions.map((option, index) => {
          const optionName =
            option.substring(0, 1).toUpperCase() + option.substring(1);
          return (
            <option value={option.toLowerCase()} key={index}>
              {option}
            </option>
          );
        })}
      </Input>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Input = styled(Select)`
  ${Element} {
    width: 204px;
    text-transform: capitalize;
  }
`;

export { Input };
export default styled(SortBy)``;
