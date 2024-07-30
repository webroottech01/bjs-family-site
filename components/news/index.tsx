import styled from "styled-components";
import config from "subsidiary-config/construct-it-config";
import Subsidiary from "../subsidiary-showcase/Subsidiary";
import NetworkStatistics from "components/network-statistics";
import { useSelected } from "components/subsidiary-showcase/grid/selected-subsidiary-store";
import NewsContents from "./news-contents";
import NewsMedia from "./news-media";
import OurPartners from "../our-partners";
import Head from "next/head";

const constructITColour = config.primaryColour;

function NewsPage() {
  const subsidiary = useSelected();
  return (
    <Container subsidiary={subsidiary}>
      <Head>
        <title>Latest news and updates</title>
        <meta
          name="description"
          content="Find out what's happening across the BJS Family of companies."
        />
      </Head>
      <NewsContents />
      <NewsMedia />
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

export default NewsPage;
