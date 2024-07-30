import styled from "styled-components";
import { Styleable, Button } from "@bjsdistribution/components";
import Listing from "components/careers/listing/item/Listing";
import {
  ContractType,
  Department,
  SubsidiaryLogo,
  SubsidiaryName,
  JobTitle,
  MapMarker,
  ClosingDate,
} from "components/careers/listing/item/high-level/common";

import BackButton from "./BackButton";
import useListingItem from "components/careers/listing/item/useListingItem";

function TabletExpandedHighLevelListing(props: Styleable) {
  const listing = useListingItem();

  if (!listing) {
    return null;
  }

  return (
    <Container className={props.className}>
      <Header>
        <SubsidiaryLogo subsidiary={listing.subsidiary} />
        <HeaderRightColumn>
          <Department department={listing.department} />
          <ContractType type={"permanent"} />
        </HeaderRightColumn>
      </Header>

      <SubsidiaryName subsidiary={listing.subsidiary} />
      <Body>
        <JobTitle>{listing.title}</JobTitle>
        <MapMarker location={listing.location} />
      </Body>
      <Footer>
        <ClosingDate date={listing.closing} />
        <BackButton />
      </Footer>
    </Container>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled(Column)`
  padding: 40px;
  > :not(:last-child) {
    margin-bottom: 27px;
  }
`;

const HeaderRightColumn = styled(Column)`
  ${Department} {
    justify-content: center;
  }

  justify-content: space-between;
`;

const Body = styled(Column)`
  > :not(:last-child) {
    margin-bottom: 14px;
  }
`;

export default TabletExpandedHighLevelListing;
