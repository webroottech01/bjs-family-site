import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { up } from "styled-breakpoints";

import JoinTheFamily from "components/careers/join-the-family";
import SearchBar from "components/careers/search-bar";
import JobListings from "components/careers/listing";

import { useExpandedSlug } from "./store";
import SortBy from "./search-bar/sort-by";

import Pagination from "./pagination";

import useFetchDepartments from './search-bar/select-a-department/useFetchDepartments';
import OurPartners from "../our-partners";

function Careers(props: Styleable) {
  return (
    <Container className={props.className}>
      <JoinTheFamily />
      <MobileSortBy withSubtitle />
      <SearchBar />
      <JobListings />
      <Pagination/>
      <OurPartners />
    </Container>
  );
}

const MobileSortBy = styled(SortBy)`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  padding: 20px;
  ${up("sm")} {
    display: none !important;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Careers;
