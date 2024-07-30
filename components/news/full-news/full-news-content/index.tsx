import { faAngleLeft, faStopwatch } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import { colours } from "@bjsdistribution/components";
import { down, only } from "styled-breakpoints";
import styled from "styled-components";
import { INewsProps } from "/pages/api/handler/Types";
import ReactMarkdown from "react-markdown";
import useIsMobile from "/components/util/useIsMobile";
import { dateFormat, timeWatchOrRead, typeWatchOrRead } from "../../utils";
import router from "next/router";
import Head from "next/head";

function FullNewsContent(props: INewsProps) {
  const isMobileOrTablet = useIsTabletOrSmaller();
  const isMobileOnly = useIsMobile();
  const { news } = props;
  const moveToAllNews = () => router.push(`/news/all`);
  return (
    <Container>
      <Head>
        
        <meta
          property="og:image:url"
          content={news.header_image.url}
        />
      </Head>
      {isMobileOrTablet && (
        <TabletHeader>
          <MobileArrow onClick={moveToAllNews} icon={faAngleLeft} />
          <TabletHeaderTitle>
            {news.title}
            {isMobileOnly && (
              <DateTime>
                <PostedDate>Posted: {dateFormat(news.created_at)}</PostedDate>
                <Timer>
                  <Icon icon={faStopwatch} />
                  {timeWatchOrRead(news.article_type[0])}
                </Timer>
              </DateTime>
            )}
          </TabletHeaderTitle>
        </TabletHeader>
      )}
      {!isMobileOnly && (
        <DateTime>
          <PostedDate>Posted: {dateFormat(news.created_at)}</PostedDate>
          <Timer>
            <Icon icon={faStopwatch} />
            {timeWatchOrRead(news.article_type[0])}
          </Timer>
        </DateTime>
      )}
      {news.article_type[0].type === "article" && (
        <ImageContainer url={news.header_image?.url ?? ""}></ImageContainer>
      )}
      {news.article_type[0].type === "video" && (
        <VideoPlayer
          width="100%"
          height="100%"
          src={news.article_type[0].video_link}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></VideoPlayer>
      )}
      <ArticleContainer>
        <ArticleContent>
          <Excerpt>{news.excerpt}</Excerpt>
          <MarkdownContent dangerouslySetInnerHTML={{ __html: news.content }}>
            {/* <ReactMarkdown>{news.content}</ReactMarkdown> */}
          </MarkdownContent>
        </ArticleContent>
      </ArticleContainer>
    </Container>
  );
}
const TabletHeader = styled.div`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  z-index: 1;
  padding: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 72px;
  left: 0px;
  right: 0px;
  ${down("sm")} {
    position: sticky;
    padding: 20px;
    top: 70px;
  }
`;
const TabletHeaderTitle = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: #3a3630;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  ${down("sm")} {
    font-size: 13px;
  }
`;
const MobileArrow = styled(FontAwesomeIcon)`
  height: 26px;
  width: 26px;
  font-size: 26px;
`;
const DateTime = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  ${down("md")} {
    margin-top: 70px;
  }
  ${down("sm")} {
    margin-top: 12px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  max-width: 1200px;
  padding: 40px;
  ${down("md")} {
    padding: 40px;
  }
  ${down("sm")} {
    padding: 0px;
  }
`;
const TitleContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
const TimerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;
const MobileTitleContainer = styled.div`
  background: transparent linear-gradient(360deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
`;
const Title = styled.div`
  text-align: left;
  font-family: "Eveleth";
  letter-spacing: 0px;
  font-weight: 950;
  color: #3a3630;
  text-transform: uppercase;
  font-size: 34px;
  padding-top: 55px;
  text-align: center;
  ${down("md")} {
    font-size: 26px;
    margin-bottom: 40px;
  }
  ${down("sm")} {
    font-size: 26px;
    margin-bottom: unset;
    padding-top: unset;
    margin: 14px 0px;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 10px;
`;
const BackIcon = styled(FontAwesomeIcon)`
  font-size: 26px !important;
`;
const Timer = styled.div`
  font-size: 14px;
  letter-spacing: 0px;
  color: #888075;
  display: flex;
  align-items: center;
  gap: 8px;
`;
const PostedDate = styled.div`
  font-size: 14px;
  color: rgba(58, 54, 48, 0.5);
`;
const VideoPlayer = styled.iframe`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  background-size: cover;
  background-position: top center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: 35px;
  border: unset;
  ${down("md")} {
    width: 100%;
    height: 472px;
  }
  ${down("sm")} {
    height: 282px;
    width: 100%;
    margin-top: unset;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    background-position: center center;
  }
`;
const ImageContainer = styled.div<{ url: string }>`
  width: 100%;
  max-width: 1200px;
  height: 600px;
  background: transparent url("${({ url }) => url}") 0% 0% no-repeat padding-box;
  background-size: cover;
  background-position: top center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-position: center;
  margin-top: 35px;
  ${down("md")} {
    width: 100%;
    height: 472px;
  }
  ${down("sm")} {
    height: 230px;
    width: 100%;
    margin-top: unset;
    border-top-left-radius: unset;
    border-top-right-radius: unset;
    background-position: center center;
  }
`;
const ArticleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 55px;
  margin-bottom: 55px;
  ${down("sm")} {
    margin-top: unset;
  }
`;
const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 80%; */
  ${down("md")} {
    max-width: unset;
  }
  ${down("sm")} {
    padding: 20px;
    max-width: 100%;

    a {
      max-width: 100%;
    }
  }
`;
const Excerpt = styled.div`
  font-size: 20px;
  color: ${colours.black};
  ${down("sm")} {
    font-size: 16px;
  }
`;
const MarkdownContent = styled.div`
  font-size: 16px;
  color: ${colours.black};
  margin-top: 37px;
`;
export default FullNewsContent;
