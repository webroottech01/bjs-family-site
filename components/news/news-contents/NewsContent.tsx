import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import styled from "styled-components";
import FeaturedNews from "./FeaturedNews";
import NewsList from "./NewsList";

function NewsContent() {
  const isTabletOrMobile = useIsTabletOrSmaller();
  return (
    <Container>
        <FeaturedNews />
        {!isTabletOrMobile && <NewsList /> }
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;
export default NewsContent;