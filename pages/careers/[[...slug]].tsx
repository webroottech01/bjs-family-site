import styled from "styled-components";
import { Styleable, colours } from "@bjsdistribution/components";
import JoinTheFamily from "components/careers/join-the-family";
import CareersPage from "components/careers";

import Head from "next/head";

function Careers(props: Styleable) {
  return (
    <>
      <CareersPage />
      <Head>
        <title>Join the family</title>
        <meta
          name="description"
          content="Find a job you'll love."
        />
      </Head>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Careers;
