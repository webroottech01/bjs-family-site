import {
  atom,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import useFetchCareersListingCount from "components/careers/listing/fetch/useFetchCareersListingsCount";

const START_AT = 0;
const STEP = 5;

const paginationState = atom<number>({
  key: "job_listing_pagination",
  default: START_AT,
});

function usePagination() {
  return useRecoilValue(paginationState);
}

function useUpdatePagination() {
  const { data: totalCount } = useFetchCareersListingCount();
  const setState = useSetRecoilState(paginationState);

  const update = () => {
    setState((old) => {
      let newNumber = Math.min(old + STEP, totalCount);
      return newNumber;
    });
  };

  return update;
}

function useResetPagination() {
  return useResetRecoilState(paginationState);
}

export { START_AT, STEP };
export { usePagination, useUpdatePagination, useResetPagination };
