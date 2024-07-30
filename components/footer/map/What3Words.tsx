import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";

import Image from "next/image";

import what3WordsLogo from "public/images/footer/what3words_icon.png";
import { what3words } from "./config";

const url = `https://what3words.com/${what3words}`;

function What3Words(props: Styleable) {
  return (
    <Container className={props.className}>
      <Image src={what3WordsLogo} height={14} width={18} layout="fixed" />
      <Text href={url} target="_blank">
        {what3words}
      </Text>
    </Container>
  );
}

const Text = styled.a`
  font-size: 16px;
  text-decoration: underline;
  color: ${colours.black};
  z-index: 3;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export default styled(What3Words)``;
