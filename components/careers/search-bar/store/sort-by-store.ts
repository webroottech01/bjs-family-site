import { SetterOrUpdater, atom, useRecoilState, useRecoilValue } from "recoil";
import { useClearListings, useResetPagination } from "components/careers/store";
import { useEffect } from "react";

export type SortType = "most recent" | "ending soon";

const allSortOptions: SortType[] = ["most recent", "ending soon"];

const sortQueryState = atom<SortType>({
  key: "job_sorting_by",
  default: "most recent",
});

function useSortQueryState() : [SortType, SetterOrUpdater<SortType>] {
  const [value, setValue] = useRecoilState(sortQueryState);
  const clearListings = useClearListings();
  const resetPagination = useResetPagination();

  useEffect(() => {
    clearListings();
    resetPagination();
  }, [value]);

  return [value, setValue];
}

function useSortQueryValue() {
  return useRecoilValue(sortQueryState);
}

export { useSortQueryState, useSortQueryValue, allSortOptions };
