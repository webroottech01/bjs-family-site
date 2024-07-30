import {useNewsContent} from "pages/api/store/newsStore";
import { useEffect } from "react";
import { down } from "styled-breakpoints";
import styled from "styled-components";
import ArticleListItem from "../common/ArticleListItem";

function NewsList() {
  const newsList = useNewsContent();
  if(newsList === null) {
    return null;
  }
  return (
    <Container>
      {newsList.map((news: any, index: number) => {
        if(index >= 5 || index === 0) {
          return null;
        }
        return <ArticleListItem key={news.id} news={news} />
      })}
    </Container>
  )
}

const Container = styled.div`
  gap: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  ${down("md")} {
    gap: 0px;
    flex-direction: row;
    flex-wrap: wrap;
  }
  ${down("sm")} {
    gap: 0px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export default NewsList;