import { useEffect, useMemo } from "react";
import useIsTabletOrSmaller from "components/util/useIsTabletOrSmaller";
import { useSelectedSubsidiaryValue } from "components/talk-to-us/store";

import SubsidiaryItems from "./SubsidiaryItems";

import CurrentBookingQuote from "components/talk-to-us/form/section/booking-quote";
import { useSetShowHeader } from "../form/section/booking-quote/header-store";

function Content() {
  const isTabletOrSmaller = useIsTabletOrSmaller();
  const setHeader = useSetShowHeader();

  const selectedSubidiary = useSelectedSubsidiaryValue();

  const hasSelectedSubsidiary = useMemo(() => {
    return !!selectedSubidiary;
  }, [selectedSubidiary]);

  useEffect(() => {
    setHeader(false);
    return () => setHeader(true);
  }, []);

  if (isTabletOrSmaller && hasSelectedSubsidiary) {
    return <CurrentBookingQuote />;
  }

  return <SubsidiaryItems />;
}

export default Content;
