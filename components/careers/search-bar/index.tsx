import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up, down } from "styled-breakpoints";

import Search from "./Search";
import SortBy, { Input as SortByInput } from "./sort-by";

function SearchBar(props: Styleable) {
  return (
    <Container className={props.className}>
      <Search />
      <SortBy />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  background: #f7b42f;
  padding: 22px 40px;
  width: 100%;

  ${down("md")} {
    position: fixed;
    bottom: 0px;
    z-index: 50;
    width: 100%;
    justify-content: space-between;
  }

  ${down("sm")} {
    padding: 17px 17px;
  }
  ${SortBy} {
    ${up("lg")} {
      width: 100%;
      ${SortByInput} {
        margin-left: auto;
      }
    }
    ${down("sm")} {
      display: none;
    }
  }
`;
export default SearchBar;
