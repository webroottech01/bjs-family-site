import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faVideo } from "@fortawesome/pro-solid-svg-icons";
import ReadArticle from "./ReadArticle";
import { colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import TimerElement from "./TimerElement";
import ArticleType from "./ArticleType";
import { INewsProps } from "pages/api/handler/Types";
import { dateFormat } from "../utils";
import { motion } from "framer-motion";
import router from "next/router";

function ArticleListItem(props: INewsProps) {
  const isTabletOrMobile = useIsTabletOrSmaller();
  const goToArticle = () => router.push(`/news/${props.news.slug}`);
  const imageMotion = { hover: { scale: 1.05 } };

  return (
    <Container onClick={goToArticle} layout initial="rest" whileHover="hover" animate="rest">
      <ArticleImageContainer>
        <ArticleImage src={props.news.header_image?.url ?? ""} variants={imageMotion} />
        {isTabletOrMobile &&
          <ArticleTypeWrapper>
            <ArticleType news={props.news} />
          </ArticleTypeWrapper>
        }
      </ArticleImageContainer>
      <ArticleContent>
        <Title href={`/news/${props.news.slug}`}>{props.news.title}</Title>
        <Row>
          {!isTabletOrMobile && (
            <ContentType>
              <Icon
                icon={
                  props.news.article_type[0].type === "article"
                    ? faNewspaper
                    : faVideo
                }
              />
              {props.news.article_type[0].type}
            </ContentType>
          )}
          {isTabletOrMobile ? (
            <TimerElement news={props.news} />
          ) : (
            <PostedTime>Posted: {dateFormat(props.news.date)} </PostedTime>
          )}
        </Row>
        <ReadArticle news={props.news} />
      </ArticleContent>
    </Container>
  );
}

const ArticleTypeWrapper = styled.div`
  position: absolute;
`;

const ArticleImage = styled(motion.img)`
  transition: .5s all ease-in-out;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Container = styled(motion.div)`
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  background: #fff;
  cursor: pointer;
  ${down("md")} {
    flex-direction: column;
    width: 50%;
    border-radius: 0px;
  }
  ${down("sm")} {
    flex-direction: column;
    width: 100%;
    border-radius: 0px;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 16px;
  margin-right: 10px;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    height: 14px;
    width: 14px;
    margin-right: 10px;
  }
`;
const ArticleImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 211px;
  max-width: 250px;
  border-radius: 0px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex: 1;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  ${down("md")} {
    width: auto;
    height: 292px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    flex: unset;
    max-width: unset;
  }
  ${down("sm")} {
    width: auto;
    height: 326px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    max-width: unset;
  }
`;
const ArticleContent = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  flex: 1;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    padding: 15px;
    gap: 10px;
  }
  ${down("md")} {
    gap: 20px;
  }
`;
const Title = styled.a`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0px;
  color: ${colours.black};
  text-decoration: none;
  :hover {
    color: ${colours.yellow};
  }
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 14px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  align-items: center;
  gap: 20px;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    gap: 10px;
  }
`;
const ContentType = styled.div`
  color: #8d8b88;
  font-weight: bold;
  align-items: center;
  display: flex;
  text-transform: capitalize;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 13px;
  }
`;
const PostedTime = styled.div`
  letter-spacing: 0px;
  color: rgba(58, 54, 48, 0.5);
  font-weight: normal;
  font-size: 14px;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 12px;
  }
  ${down("md")} {
    font-size: 16px;
  }
`;

export default ArticleListItem;
