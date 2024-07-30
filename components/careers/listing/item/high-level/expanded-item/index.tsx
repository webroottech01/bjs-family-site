import useIsMobile from "components/util/useIsMobile";
import MobileExpanded from "../mobile";
import TabletExpanded from "./tablet";
import { Styleable } from '@bjsdistribution/components';

function NonDesktopExpandedHighLevelListing({className} : Styleable) {
  const isMobile = useIsMobile();
  if (isMobile) {
    return <MobileExpanded className={className} />;
  }
  return <TabletExpanded className={className} />;
}

export default NonDesktopExpandedHighLevelListing;
