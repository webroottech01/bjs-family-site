import styled from "styled-components";
import { down } from "styled-breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/pro-regular-svg-icons";
import { INewsProps } from "/pages/api/handler/Types";
import { dateFormat, preNextSlugIndex } from "../../utils";
import useFetchArticleSlugs from "./useFetchArticleSlugs";
import router from "next/router";
import useIsMobile from "/components/util/useIsMobile";
import useIsTabletOrSmaller from "/components/util/useIsTabletOrSmaller";

function FullNewsHeader(props: INewsProps) {
  const { news } = props;
  const isMobileOnly = useIsMobile();
  const { data, error } = useFetchArticleSlugs();
  if (error || !data) {
    return null;
  }
  const nextPreSlugIndex = preNextSlugIndex(data as Array<string>, news.slug);
  const moveToAllNews = () => router.push(`/news/all`);
  return (
    <Container>
      <LeftButton
        id="full-news-go-to-article-list"
        disabled={nextPreSlugIndex.preSlugIndex === null}
        onClick={moveToAllNews}
      >
        <Icon icon={faAngleLeft} />
        Article List
      </LeftButton>
      {!useIsTabletOrSmaller() && <TitleHeader>{news.title}</TitleHeader>}
      <RightButton
        id="full-news-go-to-next-article"
        disabled={nextPreSlugIndex.nextSlugIndex === null}
        onClick={() => {
          if (nextPreSlugIndex.nextSlugIndex === null) return;
          router.push(`/news/${data[nextPreSlugIndex.nextSlugIndex]}`);
        }}
      >
        Next Article
        <Icon icon={faAngleRight} />
      </RightButton>
    </Container>
  );
}

const Container = styled.div`
  background: transparent linear-gradient(359deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  height: 100px;
  padding: 40px 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 85px;
  ${down("md")} {
    top: unset;
    height: 57px;
    padding: 40px;
    bottom: 0px;
    position: fixed;
    width: 100%;
  }
  ${down("sm")} {
    height: 57px;
    padding: 20px;
    top: unset;
    padding: unset;
    bottom: 0px;
    position: fixed;
    width: 100%;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 6px;
  font-size: 16px;
`;
const LeftButton = styled.button`
  background: transparent linear-gradient(359deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid rgba(58, 54, 48, 0.4);
  height: 44px;
  border-radius: 22px;
  padding: 0px 25px;
  gap: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  ${down("md")} {
    border: unset;
    background: unset;
    font-size: 16px;
    padding: 0px 20px;
  }
  ${down("sm")} {
    border: unset;
    background: unset;
    font-size: 16px;
    padding: 0px 20px;
  }
  :hover{
    background: #ffffff 0% 0% no-repeat padding-box;
  }
`;

  const RightButton = styled(LeftButton)``;

  const TitleHeader = styled.h1`
    font-size: 20px;
    color: #3a3630;
    margin:0px;
    font-weight:400;
  `;

export default FullNewsHeader;
