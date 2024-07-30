import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import {format, isBefore} from "date-fns"

import LandingSplash from "components/landing/LandingSplash";
import QueenLandingSplash from "/components/landing/QueenLanding";
import BeliefInADivineFlow from "components/landing/belief-in-a-divine-flow";
import AboveAndBeyond from "components/landing/above-and-beyond";
import NetworkStatistics from "components/network-statistics";
import Feedback from "components/feedback";
import { SubsidiaryProvider } from "components/subsidiary-showcase/grid/SubsidiaryContext";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import FeedbackSection from "components/feedback";
import OurPartners from "/components/our-partners";
import SubsidiaryShowcase from "components/subsidiary-showcase";

import dynamic from "next/dynamic";
import getTrustpilotProps from "components/util/getTrustpilotProps";

//export const config = { amp: true } 
/*const SubsidiaryShowcase = dynamic(
  () => import("components/subsidiary-showcase")
);*/

const selectSplash = () => {
  let date = format(new Date(), "yyyy-MM-dd");
  if(date < "2022-09-30") {
    return true;
  }
  return false;
}

const Home: NextPage = ({ trustpilot }: any) => {
  const [subsidiary, setSubsidiary] = useState<Subsidiary>("home delivery");
  return (
    <>
      <Head>
        <title>BJS Family - Your logistics, safe in our hands</title>
        <meta
          name="description"
          content="BJS Home Delivery provides the very best home delivery in the UK, offering retailers a wide range of flexible services carried out by expertly-trained teams."
        />
        <meta
          property="og:image:url"
          content={`${process.env.NEXT_PUBLIC_CONTENT_RESOURCE}/bjs-family/bjsMetaOptimised_Homepage.jpg`}
        />
        <meta
          property="og:title"
          content="BJS Home Delivery | Your Products, Safe In Our Hands"
        />

        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      { !selectSplash() && <LandingSplash /> }
      { selectSplash() && <QueenLandingSplash />}
      <SubsidiaryProvider selected={subsidiary} setSelected={setSubsidiary}>
        <SubsidiaryShowcase />
      </SubsidiaryProvider>
      <BeliefInADivineFlow />
      <AboveAndBeyond />
      <NetworkStatistics />
      <OurPartners />
      <FeedbackSection trustpilot={trustpilot} />
    </>
  );
};

export async function getStaticProps() {
  return await getTrustpilotProps();
}

export default Home;
