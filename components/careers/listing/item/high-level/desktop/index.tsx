import styled from "styled-components";
import { motion } from "framer-motion";
import { Styleable, WithChildren } from "@bjsdistribution/components";

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

import useListingItem from "components/careers/listing/item/useListingItem";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";

function DesktopListingItem(props: Styleable & WithChildren) {
  const listing = useListingItem();
  if (!listing) {
    return null;
  }

  return (
    <Container className={props.className} layout>
      <FirstColumn>
        <SubsidiaryLogo
          subsidiary={listing.subsidiary}
          dimensions={getDimensions(listing.subsidiary)}
        />
        <JobInfo>
          <InfoText>{listing.jobType}</InfoText>
          <Seperator />
          <InfoText>{listing.contractType}</InfoText>
        </JobInfo>
      </FirstColumn>
      <Body>
        <SubsidiaryName subsidiary={listing.subsidiary} />
        <JobTitle>{listing.title}</JobTitle>
        <MapMarker location={listing.location} />
        <ClosingDate date={listing.closing} />
      </Body>
      <LastColumn>
        <Department department={listing.department} />
        <SalaryType>{listing.salary}</SalaryType>
        {props.children}
      </LastColumn>
    </Container>
  );
}

const getDimensions = (input: Subsidiary): [number, number] => {
  switch (input) {
    case "home delivery":
      return [70, 101];
    case "constructit":
      return [36, 168];
    case "haulage":
      return [60, 100];
    case "extra":
      return [79, 101];
    default:
      throw new Error(`Unknown dimensions for subsidiary for ${input}`);
  }
};

const Seperator = styled.div`
  height: 4px;
  width: 4px;
  border-radius: 50%;
  background: rgba(136, 128, 117, 0.4);
`;

const InfoText = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: #9a9a9a;
`;

const JobInfo = styled.div`
  display: flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 7px;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  padding: 40px;
  > :not(:last-child) {
    margin-right: 40px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstColumn = styled(Column)`
  justify-content: space-between;
  align-items: center;
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
`;

const LastColumn = styled(Column)`
  margin-left: auto;
  align-items: flex-end;

  ${Department} {
    margin-bottom: 25px;
  }

  ${SalaryType} {
    margin-bottom: 33px;
  }
`;

export default DesktopListingItem;
