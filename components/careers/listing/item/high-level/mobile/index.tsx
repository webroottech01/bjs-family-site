import styled from "styled-components";
import { Styleable, WithChildren, colours } from "@bjsdistribution/components";
import useListingItem from "components/careers/listing/item/useListingItem";
import {
  SubsidiaryLogo,
  Department,
  SubsidiaryName,
  JobTitle,
  MapMarker,
  DetailPair,
  ClosingDate,
} from "components/careers/listing/item/high-level/common";

function MobileExpandedHighLevelListing(props: WithChildren & Styleable) {
  const listing = useListingItem();
  if (!listing) {
    return null;
  }

  return (
    <Container className={props.className}>
      <Header>
        <SubsidiaryLogo subsidiary={listing.subsidiary} />
        <Department department={listing.department} />
        <DetailPair employmentType="Full Time" contractType="Permanent" />
      </Header>
      <SubsidiaryName subsidiary={listing.subsidiary} />
      <JobTitle>{listing.title}</JobTitle>
      <MapMarker location={listing.location} />
      <ClosingDate date={listing.closing} />
      {props.children}
    </Container>
  );
}

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0px 20px;
  grid-template-areas:
    "left top-right"
    "left bottom-right";

  @media only screen and (max-width: 520px) {
    gap: 0px;
  }  

  ${SubsidiaryLogo} {
    grid-area: left;
    width: auto;
  }

  ${Department} {
    grid-area: top-right;
  }
  ${DetailPair} {
    grid-area: bottom-right;
    width: min-content;
    justify-self: end;
    align-self: end;
  }

  ${Department} {
    font-size: 18px;
    font-weight: bold;
    ::before {
      min-height: 15px;
      min-width: 15px;
    }
    span {
      text-transform: uppercase;
      color: ${colours.black};
    }
  }



  @media only screen and (max-width: 480px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: unset !important;
  padding: 20px;

  ${Header}, ${SubsidiaryName}, ${MapMarker} {
    margin-bottom: 30px;
  }
  ${JobTitle} {
    margin-bottom: 15px;
  }
  ${MapMarker} {
  }
  ${ClosingDate} {
    margin-bottom: 40px;
  }
`;

export default styled(MobileExpandedHighLevelListing)``;
