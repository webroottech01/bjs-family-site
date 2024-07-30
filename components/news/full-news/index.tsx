
import styled from "styled-components";
import config from "subsidiary-config/construct-it-config";
import Subsidiary from '../../subsidiary-showcase/Subsidiary';
import NetworkStatistics from "components/network-statistics";
import { useSelected } from "components/subsidiary-showcase/grid/selected-subsidiary-store";
import { IFullNews, INewsProps } from "/pages/api/handler/Types";
import FullNewsHeader from "./full-news-header";
import FullNewsContent from "./full-news-content";
import { useNewsContent } from "/pages/api/store/newsStore";
import { getNewsFromId } from "../utils";

const constructITColour = config.primaryColour;

function FullNews(props: INewsProps) {
  const {news} = props;
  const subsidiary = useSelected();
  return (
    <Container subsidiary={subsidiary}>
      <FullNewsHeader news={news} />
      <FullNewsContent news={news} />
    </Container>
  );
}


const Container = styled.div<{subsidiary: Subsidiary}>`
  display: flex;
  flex-direction: column;

  ${NetworkStatistics} {
    ${props => props.subsidiary === "constructit" && `background: ${constructITColour}`}
  }

  a {
    display: inline-flex;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export default FullNews;
