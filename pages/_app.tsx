import type { AppProps } from "next/app";
import { useEffect, useMemo } from "react";
import { RecoilRoot } from "recoil";
import styled, { css, ThemeProvider } from "styled-components";
import { Button, Notifications, BreakpointProvider } from "@bjsdistribution/components";

import NavigationBar from "components/navigation";
import Footer from "components/footer";

import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";

import useIsMobileNavigationOpen from "components/navigation/mobile/mobile-navigation-state";

import Head from "next/head";
import { useIsHidingBackground } from "components/util/modal/modal-store";
import useIsTalkToUsOpen from "components/talk-to-us/store/index";
import OurPartners from "components/our-partners";
import dynamic from "next/dynamic";
import Script from "next/script";
import CookiesConsent from "components/cookies-consent/notification";

import CookiesInfo from "components/cookies-consent/more-info";
import useShowNotification from "/components/cookies-consent/useShowNotification";
import { useRouter } from "next/router";
import { useIsOpen } from "../components/cookies-consent/more-info/store";

import { AnimatePresence } from "framer-motion";
config.autoAddCss = false;

const GlobalStyles = createGlobalStyle`
.sc-jIkYaL{
  ${Button.PlainButton} {
    pointer-events: auto !important;
  }
}
${Button.PlainButton} {
      font-family: "Eveleth";
    }
    ${dom.css()}
 body {
  overscroll-behavior: none;
	 margin: 0;
}

.sc-hGPAah {
  display: block !important;
}

    * {
      box-sizing: border-box;
      line-height: 1.5em;
    }
`;

const theme = {
  breakpoints: {
    xs: "375px",
    sm: "460px", //"576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
  },
};

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;

const hotJarScript = `
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:2782400,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

function FamilyApp(appProps: AppProps) {
  const schema = {
    "@context":"https://schema.org",
    "@type": "Organization",
    "name": "BJS Home Delivery",
    "URL": "https://bjshomedelivery.com/",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "01922645650",
      "contactType": "technical support",
      "areaServed": "GB",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.instagram.com/bjsdelivery/",
      "https://www.linkedin.com/company/bjs-distribution"
    ]
  }
  return (
    <RecoilRoot>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="robots" content="index, follow" />
        <Script
          dangerouslySetInnerHTML={{
            __html: ` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TRLKZZT');
          `,
          }}
        />
        <meta name="google-site-verification" content="NaqtcW4rM7EdJiNCzn8s_0pdChvb805OtHNhoTuC88E" />
        <link rel="canonical" href="https://bjshomedelivery.com/"></link>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Script
          strategy="beforeInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_TRACKING_ID}');
  `,
          }}
        />
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: hotJarScript }}
        />
        <GlobalStyles />
        <div id="modal-root"></div>

        <App {...appProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

function App({ Component, pageProps }: AppProps) {
  const isHiding = useIsHidingBackground();
  const isMobileNavigationOpen = useIsMobileNavigationOpen();
  const [isTalkToUsOpen] = useIsTalkToUsOpen();

  const isCookiesInfoOpen = useIsOpen();
  const showCookieNotification = useShowNotification();

  const router = useRouter();

  const isOnService = router.asPath.startsWith("/services");

  useEffect(() => {
    const loadGotham = () => {
      let link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.referrerPolicy = "origin";
      link.href = "https://cloud.typography.com/7313560/6905232/css/fonts.css";
      let headScript = document.querySelector("script");
      if (headScript) {
        if (headScript.parentNode) {
          headScript.parentNode.insertBefore(link, headScript);
        }
      }
    };
    loadGotham();
  },[])


  return (
    <Container hide={isHiding}>
      <BreakpointProvider>
        <Notifications.Provider>
          <NavigationBar />
          <AnimatePresence>
            {isCookiesInfoOpen && <CookiesInfo key="info" />}
            {showCookieNotification && <CookiesConsent key="notification" />}
          </AnimatePresence>
          {isTalkToUsOpen && <ShowTalkToUs />}
          <Content hide={isMobileNavigationOpen || isCookiesInfoOpen}>
            <Component {...pageProps} />
            {/* <OurPartners /> */}
            <Footer />
            {isOnService && <ArtificialPadding />}
          </Content>
        </Notifications.Provider>
      </BreakpointProvider>
    </Container>
  );
}

const ArtificialPadding = styled.div`
  width: 100%;
  height: 70px;
`;

const TalkToUsForm = dynamic(() => import("components/talk-to-us/form"));

function ShowTalkToUs() {
  return <TalkToUsForm />;
}

const Content = styled.div<{ hide: boolean }>`
  ${(props) => props.hide && "display: none;"};
`;

const Container = styled.div<{ hide: boolean }>`
  ${(props) => props.hide && "display: none;"};
`;

export default FamilyApp;
