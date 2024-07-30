import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowRight,
  faNewspaper,
  faStopwatch,
  faVideo,
} from "@fortawesome/pro-solid-svg-icons";
import { colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import { INewsProps } from "pages/api/handler/Types";
import { dateFormat, timeWatchOrRead, typeWatchOrRead } from "../../utils";
import router from "next/router";
import { motion } from "framer-motion";

function NewsItem(props: INewsProps) {
  const imageMotion = { hover: { scale: 1.05 } }
  const textMotion = { hover: { width: "135px" } }
  const arrowMotion = {
    rest: { opacity: 0.5 },
    hover: { opacity: 1 }
  }
  const url = `/news/${props.news.slug}`;
  const navigateTo = () => router.push(url);

  return (
    <Container layout onClick={navigateTo} initial="rest" whileHover="hover" animate="rest">
      <ImageContainer>
        <ArticleImageContainer>
          <ArticleImage src={props.news.header_image?.url ?? ""} variants={imageMotion} />
        </ArticleImageContainer>
        <ArticleContent>
          <Title href={url}>{props.news.title}</Title>
          <Row>
            <ContentType>
              <Icon
                icon={
                  props.news.article_type[0]?.type === "article"
                    ? faNewspaper
                    : faVideo
                }
              />
              {props.news.article_type[0]?.type}
            </ContentType>
            <PostedTime>Posted: {dateFormat(props.news.date)}</PostedTime>
            {useIsTabletOrSmaller() && (
              <Timer>
                <Icon icon={faStopwatch} />
                {timeWatchOrRead(props.news.article_type[0])}
              </Timer>
            )}
          </Row>
          <Excerpt>{props.news.excerpt}</Excerpt>
          {useIsTabletOrSmaller() && (
            <ReadButtonTab onClick={navigateTo}>
              Read Article
              <Icon icon={faLongArrowRight} />
            </ReadButtonTab>
          )}
        </ArticleContent>
      </ImageContainer>
      {!useIsTabletOrSmaller() && (
        <ReadMore>
          <Timer>
            <Icon icon={faStopwatch} />
            {timeWatchOrRead(props.news.article_type[0])}
          </Timer>
          <ReadButtonWrapper>
            <ReadButton onClick={navigateTo} variants={textMotion}>
              Read Article
              <ArrowIconWrapper variants={arrowMotion}>
                <Icon icon={faLongArrowRight} />
              </ArrowIconWrapper>
            </ReadButton>
          </ReadButtonWrapper>
        </ReadMore>
      )}
    </Container>
  );
}

const ReadButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 3px solid #feba30;
  white-space: nowrap;
`;

const ArrowIconWrapper = styled(motion.div)``;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
  cursor: pointer;
  ${down("md")} {
    padding: 30px;
  }
  ${down("sm")} {
    padding: 0px;
  }
`;
const ReadButton = styled(motion.div)`
  color: #3a3630;
  line-height: 2.5;
  font-size: 14px;
  font-weight: bold;
  width: 125px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const ReadButtonTab = styled(ReadButton)`
  align-self: flex-end;
  margin-top: 10px;
`;
const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 16px;
  margin-right: 10px;
  ${down("sm")} {
    margin-right: 5px;
  }
`;
const Timer = styled.div`
  font-size: 14px;
  letter-spacing: 0px;
  color: #888075;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  ${down("sm")} {
    gap: 2px;
  }
`;

const ArticleImage = styled(motion.img)`
  transition: .5s all ease-in-out;
  object-fit: cover;
  width: 100%;
  height: 100%;
  // border-radius: 20px;
`;

const ArticleImageContainer = styled.div`
  overflow: hidden;
  height: 150px;
  max-width: 211px;
  border-radius: 20px;
  flex: 1;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  ${down("sm")} {
    height: 326px;
    flex: unset;
    width: 100%;
    max-width: unset;
    border-radius: 0px;
    background-position: center;
  }
`;
const ArticleContent = styled.div`
  display: flex;
  padding: 13px 0px;
  flex-direction: column;
  flex: 1;
  ${down("md")} {
    padding: 0px 0px;
  }
  ${down("sm")} {
    padding: 20px;
  }
`;
const Title = styled.a`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0px;
  color: ${colours.black};
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: ${colours.yellow};
  }
  ${down("md")} {
    font-size: 15px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 20px;
  margin-top: 14px;
  ${down("sm")} {
    gap: 6px;
  }
`;
const ContentType = styled.div`
  color: #8d8b88;
  font-weight: bold;
  align-items: center;
  display: flex;
  text-transform: capitalize;
`;
const PostedTime = styled.div`
  letter-spacing: 0px;
  color: rgba(58, 54, 48, 0.5);
  font-weight: normal;
  font-size: 16px;
  ${down("md")} {
    font-size: 14px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex: 1;
  align-items: center;
  ${down("md")} {
    gap: 30px;
  }
  ${down("sm")} {
    flex-direction: column;
    gap: unset;
  }
`;
const Excerpt = styled.div`
  font-size: 16px;
  color: ${colours.black};
  padding-top: 20px;
  max-width: 680px;
  @media only screen and (min-width: 1600px) {
    max-width: 1000px !important;
  }
  @media only screen and (min-width: 1400px) {
    max-width: 880px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    max-width: 490px;
  }
  ${down("md")} {
    font-size: 14px;
  }
`;
const ReadMore = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;
export default NewsItem;
