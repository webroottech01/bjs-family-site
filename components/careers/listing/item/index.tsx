import { useMemo, useRef, forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Styleable } from "@bjsdistribution/components";
import { useRouter } from "next/router";
import useIsTabletOrSmaller, {
  useIsOnlyTablet,
} from "components/util/useIsTabletOrSmaller";

import {
  useExpandedSlugState,
  useIsApplied,
  useSetApplied,
} from "components/careers/store";

import Listing from "./Listing";
import Modal from "components/util/modal";

import HighLevelListing from "./high-level";
import ExpandedListingItem from "./low-level";

import Form from "components/careers/listing/form";

import { Provider as ListingItemProvider } from "./useListingItem";
import useScrollTo from "./store";

interface Props {
  listing: Listing;
}

type ListingStatus = "expanded" | "applying";

function ListingItemIndex(props: Props & Styleable) {
  const listingRef = useRef<null | HTMLDivElement>(null);
  const [scrollTo, setScrollTo] = useScrollTo();

  const isTabletOrSmaller = useIsTabletOrSmaller();
  const router = useRouter();
  const isApplied = useIsApplied();
  const setApplied = useSetApplied();

  const [expandedSlug, setExpandedSlug] = useExpandedSlugState();

  const isExpanded = expandedSlug === props.listing.title;

  const close = () => {
    setExpandedSlug(undefined);
    scrollToListing();
  };

  useEffect(() => {
    if (!scrollTo || !listingRef || !props.listing) {
      return;
    }
    if (props.listing.title !== scrollTo) {
      return;
    }
    scrollToListing();
    setScrollTo(undefined); //Consume
  }, [listingRef, scrollTo]);

  const scrollToListing = () => {
    const listingDiv = listingRef?.current;
    const y = listingDiv!.getBoundingClientRect().top + window.pageYOffset + -50;

    window.scrollTo({top: y, behavior: 'smooth'});
  };

  const apply = () => {
    setApplied(props.listing.title);
  };

  const isApplyingForListing = useMemo(() => {
    return isApplied(props.listing.title);
  }, [router]);

  const status: ListingStatus | undefined = useMemo(() => {
    if (isApplyingForListing) {
      return "applying";
    } else if (isExpanded) {
      return "expanded";
    }
    return undefined;
  }, [isExpanded, isApplyingForListing]);

  const component = (
    <ListingItemProvider listing={props.listing}>
      <ListingItem
        listing={props.listing}
        className={props.className}
        status={status}
        close={close}
        apply={apply}
        ref={listingRef}
      />
    </ListingItemProvider>
  );

  if (isTabletOrSmaller && isExpanded) {
    return (
      <TabletModal showing hideBackground>
        {component}
      </TabletModal>
    );
  }

  return component;
}

const TabletModal = styled(Modal)`
  padding: 0px;
  width: 100%;

  position: absolute; //Temp..
`;

interface ListingItemProps {
  status?: ListingStatus;
  listing: Listing;
  close: () => void;
  apply: () => void;
}

const ListingItem = forwardRef<HTMLDivElement, ListingItemProps & Styleable>(
  (props, ref) => {
    const { listing, status, close, apply } = props;

    return (
      <Container
        className={props.className}
        layout
        status={status}
        ref={ref}
      >
        <HighLevelListing listing={listing} />
        {status === "expanded" && (
          <ExpandedListingItem close={close} apply={apply} />
        )}
        {status === "applying" && <Form />}
      </Container>
    );
  }
);

const Container = styled(motion.div)<{ status?: ListingStatus }>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${HighLevelListing} {
    padding-bottom: ${(props) => getGap(props.status)}px;

  }
`;

const getGap = (input?: ListingStatus) : number => {
  if (!input) {
    return 0;
  }
  if (input === "applying") {
    return 100;
  }
  return 205;
}
export default styled(ListingItemIndex)``;
