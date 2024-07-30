import styled from "styled-components";
import { Styleable, Button, colours } from "@bjsdistribution/components";

import router from "next/router";

function ViewAllNewsButton(props: Styleable) {
  const moveToAllNews = () => router.push(`/news/all`);
  return (
    <ViewButton
      className={props.className}
      colors="primary"
      shape="rounded"
      onClick={moveToAllNews}
      id="news-contents-go-to-view-all-news-stories"
      wide
    >
      View all news stories
    </ViewButton>
  );
}

const ViewButton = styled(Button.PlainButton)`
  font-family: "Eveleth";
  font-size: 16px;
  background: transparent;
  color: ${colours.black};
  border: 1px solid ${colours.black};
  font-weight: 900;
`;

export default styled(ViewAllNewsButton)``;
