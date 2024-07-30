import {useNewsContent, useNewsFilter, useNewsPageIndex, useNewsSortFilter } from "pages/api/store/newsStore";
import { useEffect } from "react";
import styled from "styled-components";
import { filterNewsByType, paginator } from "../../utils";
import NewsPagination from "../all-news-pagination";
import NewsItem from "../news-item";

function AllNewsList() {
  const newsList = useNewsContent();
  const fillterVal = useNewsFilter();
  const newsPageIndex = useNewsPageIndex();
  const sortFilter = useNewsSortFilter();
  if(newsList === null) {
    return null;
  } 
  const filteredNews = filterNewsByType(fillterVal, newsList, sortFilter);
  const currentPageNews = paginator(filteredNews, newsPageIndex, 6);
  return (
    <Container>
      {currentPageNews.data.map((news: any, index: number) => {
        return <NewsItem key={news.id} news={news} />
      })}
      <NewsPagination content={currentPageNews} />
    </Container>
  )
}

const Container = styled.div`
  gap: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export default AllNewsList;