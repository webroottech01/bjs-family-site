import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/pro-regular-svg-icons";
import { IPaginator } from "/pages/api/handler/Types";
import {
  useNewsPageIndex,
  useSetNewsPageIndex,
} from "/pages/api/store/newsStore";
import useIsMobile from "/components/util/useIsMobile";

function NewsPagination(props: IPaginator) {
  const { content } = props;
  const setPageIndex = useSetNewsPageIndex();
  const currentPageIndex = useNewsPageIndex();
  const isMobileOnly = useIsMobile();

  if(content.totalPages === 1) {

    return null;
  }
  
  console.log(content);

  return (
    <Container>
      <LeftButton
        disabled={content.prePage === null}
        onClick={() => {
          setPageIndex(currentPageIndex - 1);
        }}
        id="all-news-pagination-go-to-news-prev"
      >
        <Icon icon={faAngleLeft} />
        {!isMobileOnly && 'Prev'}
      </LeftButton>
      <RightButton
        disabled={content.nextPage === null}
        onClick={() => {
          setPageIndex(currentPageIndex + 1);
        }}
        id="all-news-pagination-go-to-news-next"
      >
        {!isMobileOnly && 'Next'}
        <Icon icon={faAngleRight} />
      </RightButton>
    </Container>
  );
}

const Container = styled.div`
  background: rgba(58, 54, 48, 0.05) 0% 0% no-repeat padding-box;
  height: 160px;
  padding: 40px 41px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${down("md")} {
  }
  ${down("sm")} {
    height: 75px;
    padding: 20px;
    background: #EDECEA 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 10px #0000001A;
    position: fixed;
    height: 116px;
    left: 0px;
    bottom : 0px;
    right: 0px;
  }
`;
const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  width: 6px;
  font-size: 16px !important;
`;
const LeftButton = styled.button`
  background: rgba(255, 255, 255, 0.4) 0% 0% no-repeat padding-box;
  border: 1px solid rgba(58, 54, 48, 0.4);
  height: 44px;
  border-radius: 22px;
  padding: 0px 25px;
  gap: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  ${down("sm")} {
    width: 44px;
    border-radius: 22px;
    padding: unset;
    text-align: center;
    justify-content: center;
  }
  :hover{
    background: rgba(255, 255, 255, 1) 0% 0% no-repeat padding-box;
  }
`;

  const RightButton = styled(LeftButton)``;

export default NewsPagination;
