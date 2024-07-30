import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import Script from "next/script";

const SCRIPT_URL =
  "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";

function TrustPilotWidget() {
  const ref = useRef(null);

  useEffect(() => {
    loadFromElement();
  }, []);

  const loadFromElement = () => {
    const trustpilot = (window as any).Trustpilot;

    if (trustpilot) {
      trustpilot.loadFromElement(ref.current, true);
    }
  };

  return (
    <Container>
      <Script
        src={SCRIPT_URL}
        strategy="lazyOnload"
        onLoad={loadFromElement}
        onError={(e) => console.error(e)}
      />

      <div
        className="trustpilot-widget"
        data-locale="en-GB"
        data-template-id="539ad60defb9600b94d7df2c"
        data-businessunit-id="5742cf130000ff00058d3d26"
        data-style-height="500px"
        data-style-width="100%"
        data-theme="light"
        data-stars="4,5"
        data-review-languages="en"
        data-no-reviews="hide"
        data-scroll-to-list="true"
        data-allow-robots="true"
        ref={ref}
      >
        <TrustPilotLink
          href="https://uk.trustpilot.com/review/bjshomedelivery.com"
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </TrustPilotLink>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .trustpilot-widget {
    /* @media screen and (min-width: 1870px) {
      width: 750px;
      margin-right: auto;
    }*/
  }
  .trustpilot-widget iframe {
    margin-bottom: 10px;
  }
`;
const TrustPilotLink = styled.a`
`;
export default TrustPilotWidget;
