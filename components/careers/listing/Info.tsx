import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import {
  SortType,
  useDepartmentQuery,
  useSearchQuery,
  useSortQueryValue,
} from "components/careers/search-bar/store";

function Info(props: Styleable) {
  const query = useSearchQuery();

  return (
    <Container className={props.className}>
      <div>Search query: {query}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export default Info;
