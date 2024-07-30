import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowRight,
  faStopwatch,
} from "@fortawesome/pro-solid-svg-icons";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import { INewsProps } from "pages/api/handler/Types";
import { dateFormat, timeWatchOrRead } from "../utils";

function TimerElement(props: INewsProps) {
  const { news } = props;
  if (news === undefined) {
    return null;
  }
  return (
    <Container>
      <PostedTime>Posted: {dateFormat(news.date)} </PostedTime>
      {/* <Timer>
        <Icon icon={faStopwatch} />
        {timeWatchOrRead(news.article_type[0])}
      </Timer> */}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 10px;
  margin-left: 40px;
`;
const PostedTime = styled.div`
  letter-spacing: 0px;
  color: rgba(58, 54, 48, 0.5);
  font-weight: normal;
  font-size: 14px;
`;
const Timer = styled.div`
  font-size: 14px;
  letter-spacing: 0px;
  color: #888075;
  display: flex;
  align-items: center;
  gap: 8px;
`;
export default TimerElement;
