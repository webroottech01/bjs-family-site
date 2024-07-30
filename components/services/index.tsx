import styled from "styled-components";

import DetailedInfo from "./detailed-info";

import Expectancy from "./expectancy/subsidiary";
import NetworkStatistics from "components/network-statistics";

import OurPeopleSubsidiary from "./our-people/subsidiary";
import FeedbackSection from "components/feedback";
import ServicesSubsidiaryBar from "./ServicesSubsidiaryBar";
import { useSelected } from "components/subsidiary-showcase/grid/selected-subsidiary-store";
import Subsidiary from "../subsidiary-showcase/Subsidiary";
import SubsidiaryCaseStudy from "./case-study/subsidiary";
import ImageShowcase from "./image-showcase";

import config from "subsidiary-config/construct-it-config";
import { useRouter } from "next/router";
import useServicesState from "./useServicesState";
import { SubsidiaryProvider } from "components/subsidiary-showcase/grid/SubsidiaryContext";

import Head from "next/head";
import getSubsidiary from "subsidiary-config";
import OurPartners from "../our-partners";
import TrustpilotProps from "../feedback/what-customers-think/TrustpilotProps";

const constructITColour = config.primaryColour;

interface Props {
  trustpilot: TrustpilotProps;
}

function ServicePage({ trustpilot }: Props) {
  const [subsidiary, setSubsidiary] = useServicesState();
  const config = getSubsidiary(subsidiary);

  return (
    <SubsidiaryProvider selected={subsidiary} setSelected={setSubsidiary}>
      <Head>
        <title>{subsidiaryTitle(subsidiary)}</title>
        <meta name="description" content={config.metaDescription} />
        <meta name="keywords" content={config.metaTags.join(",")} />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image:url"
          content={`${
            process.env.NEXT_PUBLIC_CONTENT_RESOURCE
            }/bjs-family/bjsMetaOptimised_Services_${subsidiaryImageName(
              subsidiary
            )}.jpg`}
        />
      </Head>
      <Container subsidiary={subsidiary}>
        <DetailedInfo subsidiary={subsidiary} />
        <Expectancy subsidiary={subsidiary} />
        <NetworkStatistics />
        <ImageShowcase subsidiary={subsidiary} />
        <OurPartners services={subsidiary}/>
        <SubsidiaryCaseStudy />
        <OurPeopleSubsidiary subsidiary={subsidiary} />
        <FeedbackSection trustpilot={trustpilot} />
        <ServicesSubsidiaryBar />
      </Container>
    </SubsidiaryProvider>
  );
}

const subsidiaryImageName = (input: Subsidiary): string => {
  switch (input) {
    case "home delivery":
      return "TwoMan";
    case "constructit":
      return "ConstructIT";
    case "extra":
      return "Extra";
    case "haulage":
      return "Haulage";
  }
};

const subsidiaryTitle = (input: Subsidiary) => {
  switch (input) {
    case "home delivery":
      return "BJS Two Man Home Delivery Service UK";
    case "extra":
      return "Large And Bulky Goods Delivery | Two-person Logistics for SME";
    case "haulage":
      return "Road Haulage Services Across UK | West Midlands Road Haulier";
    case "constructit":
      return "Brick And Block Haulage For Construction | Brick Crane";
  }
};

const Container = styled.div<{ subsidiary: Subsidiary }>`
  display: flex;
  flex-direction: column;

  ${ImageShowcase} {
    margin-top: 10px;
  }

  ${NetworkStatistics} {
    ${(props) =>
    props.subsidiary === "constructit" && `background: ${constructITColour}`}
  }
`;

export default ServicePage;
