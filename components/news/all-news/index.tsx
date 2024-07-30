import styled from "styled-components";
import config from "subsidiary-config/construct-it-config";
import Subsidiary from "../../subsidiary-showcase/Subsidiary";
import NetworkStatistics from "components/network-statistics";
import { useSelected } from "components/subsidiary-showcase/grid/selected-subsidiary-store";
import NewsHeader from "./news-header";
import AllNewsList from "./all-news-list";

import Head from "next/head";
import OurPartners from "/components/our-partners";
const constructITColour = config.primaryColour;

function AllNewsPage() {
  const subsidiary = useSelected();
  return (
    <Container subsidiary={subsidiary}>
      <Head>
        <title>All News</title>
      </Head>
      <NewsHeader />
      <AllNewsList />
      <OurPartners />
    </Container>
  );
}

const Container = styled.div<{ subsidiary: Subsidiary }>`
  display: flex;
  flex-direction: column;

  ${NetworkStatistics} {
    ${(props) =>
      props.subsidiary === "constructit" && `background: ${constructITColour}`}
  }
`;

export default AllNewsPage;
