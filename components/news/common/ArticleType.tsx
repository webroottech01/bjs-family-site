import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/pro-solid-svg-icons";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import { faVideo, faNewspaper } from "@fortawesome/pro-solid-svg-icons";
import { down, only } from "styled-breakpoints";
import { INewsProps } from "pages/api/handler/Types";

function ArticleType(props: INewsProps) {
  const isTabletOrMobile = useIsTabletOrSmaller();
  const { news } = props;
  if(news === undefined) 
  {
    return null;
  }
  return (
    <Container>
      <Icon icon={news.article_type[0].type === 'video' ? faVideo : faNewspaper} />
      <IconLabel>{news.article_type[0].type}</IconLabel>
    </Container>
  );
}

const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 16px;
  color: white;
`;
const IconLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  margin-left: 10px;
  text-transform: capitalize;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  background: #6396e5 0% 0% no-repeat padding-box;
  border-radius: 6px;
  width: 110px;
  height: 46px;
  margin: 40px;
  justify-content: center;
  ${only('md')} {
    margin: 30px;
  }
  ${down('sm')} {
    margin: 20px;
  }
`;
export default ArticleType;
