import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";
import ListingItem from "./item";
import { useListings } from "components/careers/store";
import useFetchCareersListing from "./fetch/useFetchCareersListings";
import Info from "./Info";

function JobListing(props: Styleable) {
  const { error } = useFetchCareersListing();
  const listings = useListings();

  return (
    <Container className={props.className}>
      {listings.map((entry) => {
        return <ListingItem key={entry.title} listing={entry} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  > :not(:last-child) {
    margin-bottom: 32px;
  }

  ${down("sm")} {
    padding: 20px;
  }

  ${ListingItem} {
    border: 1px solid rgba(136, 128, 117, 0.4);
    border-radius: 6px;
    padding-bottom: 42px;
  }
`;
export default JobListing;
