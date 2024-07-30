import styled from "styled-components";
import { motion } from "framer-motion";
import { Styleable, WithChildren } from "@bjsdistribution/components";

import useListingItem from "components/careers/listing/item/useListingItem";
import Listing from "components/careers/listing/item/Listing";

import {
  SubsidiaryName,
  ContractType,
  JobTitle,
  MapMarker,
  ClosingDate,
  Department,
  SalaryType,
  SubsidiaryLogo,
} from "components/careers/listing/item/high-level/common";

function TabletListingItem(props: Styleable & WithChildren) {
  const listing = useListingItem();
  if (!listing) {
    return null;
  }

  return (
    <Container className={props.className} layout>
      <FirstColumn>
        <SubsidiaryLogo subsidiary={listing.subsidiary} />
        <ContractType type="permanent" />
      </FirstColumn>
      <Body>
        <SubsidiaryName subsidiary={listing.subsidiary} />
        <JobTitle>{listing.title}</JobTitle>
        <MapMarker location={listing.location} />
        <ClosingDate date={listing.closing} />
        {props.children}
      </Body>
      <LastColumn>
        <Department department={listing.department} />
      </LastColumn>
    </Container>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstColumn = styled(Column)`
  align-items: center;

  ${SubsidiaryLogo} {
    margin-bottom: 33px;
  }
`;

const Body = styled(Column)`
  ${SubsidiaryName} {
    margin-bottom: 25px;
  }
  ${JobTitle} {
    margin-bottom: 18px;
  }

  ${MapMarker} {
    margin-bottom: 35px;
  }
  ${ClosingDate} {
    margin-bottom: 40px;
  }
`;

const LastColumn = styled(Column)`
  position: absolute;
  right: 40px;
  margin-left: auto;
  align-items: flex-end;
  white-space: nowrap;
`;

const Container = styled(motion.div)`
  display: flex;
  padding: 40px;
  position: relative;

  ${FirstColumn} {
    margin-right: 40px;
  }
`;

export default TabletListingItem;
