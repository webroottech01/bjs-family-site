import MobileNavigationBar from "./mobile";
import DesktopNavigationBar from "./desktop";

import useIsMobile from "components/util/useIsMobile";
import { allPages as aboutUsPages } from "components/about/page/AboutPage";

import Root from "./Root";
import { allSubsidiaries } from "components/subsidiary-showcase/Subsidiary";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'

const TrackYourOrderNotice = dynamic(() => import("components/landing/track-your-order/component"))

const entries = [
  {
    title: "Our services",
    entries: allSubsidiaries,
  },

  {
    title: "About us",
    entries: aboutUsPages,
  },
  {
    title: "News",
    entries: [],
  },
  {
    title: "Careers",
    entries: [],
  },
];

function NavigationBar() {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileNavigationBar entries={entries} />;
  }
  return <DesktopNavigationBar />;
}

function NavigationIndex() {
  const router = useRouter();
  const isLanding = router.asPath === "/";
  const isOnHomeDeliveryService = router.asPath === "/services/home-delivery";
  const shouldDisplayTrackOrderNotice = isLanding || isOnHomeDeliveryService;
  return (
    <Root>
      {shouldDisplayTrackOrderNotice && <TrackYourOrderNotice />}
      <NavigationBar />
    </Root>
  );
}

export default NavigationIndex