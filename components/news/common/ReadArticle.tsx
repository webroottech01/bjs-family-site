import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowRight,
  faStopwatch,
} from "@fortawesome/pro-solid-svg-icons";
import { INewsProps } from "/pages/api/handler/Types";
import router from "next/router";
import { timeWatchOrRead, typeWatchOrRead } from "../utils";
import { down } from "styled-breakpoints";
import { motion } from "framer-motion";

function ReadArticle(props: INewsProps) {
  const goToArticle = () => router.push(`/news/${props.news.slug}`);
  const textMotion = { hover: { width: "90px" } }
  const arrowMotion = {
    rest: { opacity: 0.5 },
    hover: { opacity: 1 }
  }
  return (
    <Container>
      <Timer onClick={goToArticle}>
        <Icon icon={faStopwatch} />
        {timeWatchOrRead(props.news.article_type[0])}
      </Timer>
      <ReadButtonWrapper>
        <ReadButton onClick={goToArticle} variants={textMotion}>
          Read Article
        </ReadButton>
        <ArrowIconWrapper variants={arrowMotion}>
          <Arrow icon={faLongArrowRight} />
        </ArrowIconWrapper>
      </ReadButtonWrapper>
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

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 10px;
`;
const Arrow = styled(FontAwesomeIcon)`
  height: 16px;
  width: 10px;
  margin-left: 40px;
  color: "#3A3630";
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    margin-left: 10px;
  }
  ${down("sm")} {
    margin-left: 20px;
  }
`;
const ReadButton = styled(motion.div)`
  color: #3a3630;
  line-height: 2.5;
  font-size: 14px;
  font-weight: bold;
  transition: 0.2s all ease-out;
  cursor: pointer;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 12px;
  }
`;
const Timer = styled.div`
  font-size: 14px;
  letter-spacing: 0px;
  color: #888075;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  @media only screen and (max-width: 1300px) and (min-width: 991px) {
    font-size: 11px;
  }
`;
export default ReadArticle;
