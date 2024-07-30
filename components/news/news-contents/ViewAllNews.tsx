import { Button, colours } from "@bjsdistribution/components";
import styled from "styled-components";
import { useNewsContent } from "/pages/api/store/newsStore";
import ViewAllNewsButton from "./ViewAllNewsButton";
import ViewAllNewsIndicator from "./ViewAllNewsIndicator";

function ViewAllNews() {
  const newsList = useNewsContent();
  if (!newsList) {
    return null;
  }

  return (
    <Container>
      <Label>You have viewed 5 out of {newsList.length} news stories</Label>
      <ViewAllNewsIndicator />
      <ViewAllNewsButton />
    </Container>
  );
}

const Label = styled.div`
  font-size: 16px;
  color: ${colours.black};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0px;

  ${Label} {
    margin-bottom: 30px;
  }

  ${ViewAllNewsIndicator} {
    margin-bottom: 50px;
  }
`;
export default ViewAllNews;
