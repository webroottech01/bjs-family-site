import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import { down, only } from "styled-breakpoints";
import styled from "styled-components";
import NewsContent from "./NewsContent";
import NewsList from "./NewsList";
import ViewAllNews from "./ViewAllNews";

function NewsContents() {
  const isTabletOrMobile = useIsTabletOrSmaller();
  return (
    <Container>
        <NewsContent />
        {isTabletOrMobile && <NewsList /> }
        <ViewAllNews />
    </Container>
  )
}

const Container = styled.div`
    background: transparent linear-gradient(360deg, #F5F0EA 0%, #E2E0DD 100%) 0% 0% no-repeat padding-box;
    padding: 40px;
    ${down("md")} {
      padding: 0px;
    }
  
    ${down("sm")} {
      padding: 0px;
    }
`;
export default NewsContents;