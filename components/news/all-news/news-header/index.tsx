import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import { down } from "styled-breakpoints";
import {
  useNewsFilter,
  useNewsSortFilter,
  useSetNewsFilter,
  useSetNewsSortFilter,
} from "/pages/api/store/newsStore";

const FILTER_VALUES = ["all", "articles", "videos"];

function NewsHeader() {
  const currentFilter = useNewsFilter();
  const sortFilter = useNewsSortFilter();
  const setNewsFilter = useSetNewsFilter();
  const setNewsSortFilter = useSetNewsSortFilter();
  return (
    <Container>
      <ButtonContainer>
        {FILTER_VALUES.map((val) => {
          return (
            <NewsButton
              key={val}
              text={val}
              filter={currentFilter}
              onClick={() => setNewsFilter(val)}
            >
              {val}
            </NewsButton>
          );
        })}
      </ButtonContainer>
      <Dropdown
        value={sortFilter}
        onChange={(event) => setNewsSortFilter(event.target.value)}
      >
        <Option value="latest">Latest</Option>
        <Option value="oldest">Oldest</Option>
      </Dropdown>
    </Container>
  );
}

const Container = styled.div`
  background: transparent linear-gradient(359deg, #f5f0ea 0%, #e2e0dd 100%) 0%
    0% no-repeat padding-box;
  height: 100px;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 85px;
  ${down("md")} {
    top: 60px;
  }
  ${down("sm")} {
    height: 75px;
    padding: 20px;
    top: 60px;
  }
`;
const NewsButton = styled.a<{ text: string; filter: string }>`
  cursor: pointer;
  font-size: 16px;
  font-family: "Eveleth";
  letter-spacing: 0px;
  color: ${colours.black};
  text-transform: uppercase;

  opacity: ${({ text, filter }) => (text === filter ? 1 : 0.25)};
  ${down("sm")} {
    font-size: 13px;
  }

  :hover {
    color: ${colours.yellow};
    opacity: 1;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  ${down("sm")} {
    gap: 20px;
  }
`;
const Dropdown = styled.select`
  width: 153px;
  height: 56px;
  border: 1px solid #9c9a97;
  border-radius: 6px;
  opacity: 0.4;
  padding: 10px;
  ${down("sm")} {
    width: auto;
  }
`;
const Option = styled.option``;
export default NewsHeader;
