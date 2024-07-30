import styled from "styled-components";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { Styleable, Button } from "@bjsdistribution/components";

import { STEP, useIsApplying, usePagination, useUpdatePagination } from "components/careers/store";
import useFetchCareersListingCount from "components/careers/listing/fetch/useFetchCareersListingsCount";
import useFetchCareersListing from "components/careers/listing/fetch/useFetchCareersListings";

const TOTAL_WIDTH = 258;

function Pagination(props: Styleable) {
  const pagination = usePagination();

  const isApplying = useIsApplying();

  const { isLoading } = useFetchCareersListing();
  const { data: totalCount } = useFetchCareersListingCount();
  const update = useUpdatePagination();

  const ourTotal = useMemo(() => {
    if (isLoading) {
      return pagination;
    }
    return Math.min(pagination + STEP, totalCount);
  }, [pagination, isLoading]);

  const canViewMore = useMemo(() => {
    return ourTotal < totalCount;
  }, [totalCount, ourTotal]);

  const percentage = useMemo(() => {
    return (ourTotal / totalCount) * 100;
  }, [ourTotal, totalCount]);

  const text = useMemo(() => {
    if (isLoading) {
      return "Loading...";
    }
    if (totalCount === 0) {
      return `No results! Try refining your search.`;
    }
    return `You have viewed ${ourTotal} out of ${totalCount} jobs`;
  }, [ourTotal, totalCount, isLoading]);

  if (isApplying) {
    return null;
  }

  return (
    <Container className={props.className}>
      <Text>{text}</Text>
      {totalCount > 1 && (
        <IndicatorBackground>
          <Indicator
          initial={false}
            animate={{
              width: `${percentage}%`,
            }}
            transition={{
              duration: 0.8,
            }}
          />
        </IndicatorBackground>
      )}
      {canViewMore && (
        <Button wide onClick={update} disabled={isLoading}>
          Load more
        </Button>
      )}
    </Container>
  );
}

const Indicator = styled(motion.div)`
  height: 100%;
  background: #3090fe;
  border-radius: 66px;
`;

const IndicatorBackground = styled.div`
  border-radius: 66px;
  width: ${TOTAL_WIDTH}px;
  height: 16px;
  background: rgba(48, 144, 254, 0.1);
  display: flex;
`;

const Text = styled.span`
  font-size: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Text} {
    margin-bottom: 30px;
  }
  ${IndicatorBackground} {
    margin-bottom: 50px;
  }
`;

export default styled(Pagination)``;
