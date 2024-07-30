import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import { useNewsContent } from "pages/api/store/newsStore";
import { up, down, only } from "styled-breakpoints";
import styled from "styled-components";
import ArticleType from "../common/ArticleType";
import ReadArticle from "../common/ReadArticle";
import TimerElement from "../common/TimerElement";
import { dateFormat } from "../utils";
import { motion } from "framer-motion";

import router from "next/router";

function FeaturedNews() {
  const isMobileOrTablet = useIsTabletOrSmaller();
  const newsList = useNewsContent();
  if (newsList === null) {
    return null;
  }
  const featuredNewsContent = newsList[0];
  const navigateTo = () => router.push(`/news/${featuredNewsContent.slug}`);

  const imageMotion = { hover: { scale: 1.05 } }
  const postDateMotion = {
    hover: { opacity: 0.5 }
  }

  return (
    <Container onClick={navigateTo} layout initial="rest" whileHover="hover" animate="rest" >
      <FeatureCard >
        <FeatureCardImage src={featuredNewsContent.header_image?.url || ""} variants={imageMotion} />
      </FeatureCard>
      <ArticleTypeWrapper>
        <ArticleType news={featuredNewsContent} />
      </ArticleTypeWrapper>
      <FeatureContent>
        <Row>
          <Title>{featuredNewsContent.title}</Title>
          {!isMobileOrTablet && (
            <PostedDate variants={postDateMotion}>
              Posted: {dateFormat(featuredNewsContent.created_at)}
            </PostedDate>
          )}
        </Row>
        {isMobileOrTablet && <TimerElement news={featuredNewsContent} />}
        <NewsDetails>{featuredNewsContent.excerpt}</NewsDetails>
        <ReadArticle news={featuredNewsContent} />
      </FeatureContent>
    </Container >
  );
}

const FeatureCardImage = styled(motion.img)`
  transition: .5s all ease-in-out;
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: relative;
`;

const ArticleTypeWrapper = styled.div`
  position: absolute;
  top: 210px;
  ${up("md")} { top: 445px }
  ${up("xl")} { top: 475px }
`;

const Container = styled(motion.div)`
  display: flex;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 10px #0000000d;
  flex: 1;
  flex-direction: column;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  ${only("md")} {
    border-radius: 0px;
  }
  ${down("sm")} {
    border-radius: 0px;
  }
`;
const FeatureCard = styled(motion.div)`
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  height: 600px;
  min-width: 500px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  ${only("md")} {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    min-width: unset;
    height: 550px;
  }

  ${down("sm")} {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    min-width: unset;
    height: 307px;
  }
`;

const FeatureContent = styled.div`
  padding: 40px;
  flex: 1;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    padding: 20px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;
const Title = styled.div`
  text-align: left;
  font-family: "Eveleth";
  letter-spacing: 0px;
  font-weight: 950;
  color: #3a3630;
  text-transform: uppercase;
  font-size: 17px;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 15px;
  }
  ${down("md")} {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;
const PostedDate = styled(motion.div)`
  text-align: right;
  font-size: 16px;
  color: #3a3630;
  opacity: 0.5;
  flex: 1;
  white-space: nowrap;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 14px;
  }
  // @media only screen and (min-width: 1600px) {
  //   opacity: 0;
  // }
  // @media only screen and (min-width: 1600px) {
  //   opacity: 0.5 !important;
  // }
`;
const NewsDetails = styled.div`
  text-align: left;
  font-size: 15px;
  letter-spacing: 0px;
  color: #3a3630;
  margin-top: 22px;
  margin-bottom: 40px;
`;

export default FeaturedNews;
