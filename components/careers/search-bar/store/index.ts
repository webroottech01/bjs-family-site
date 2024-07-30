import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useResetRecoilState,
} from "recoil";

const searchQueryState = atom<string>({
  key: "job_position_search",
  default: "",
});

const departmentState = atom<string | undefined>({
  key: "job_position_search_department",
  default: "all departments",
});

const searchExtended = atom<boolean>({
  key: "C_Extended",
  default: false,
});

function useSearchExtended() {
  return useRecoilValue(searchExtended);
}
function useSearchExtendedState() {
  return useRecoilState(searchExtended);
}
function useSetSearchExtended() {
  return useSetRecoilState(searchExtended);
}
function useDepartmentQueryState() {
  return useRecoilState(departmentState);
}

function useResetDepartment() {
  return useResetRecoilState(departmentState);
}

function useDepartmentQuery() {
  return useRecoilValue(departmentState);
}

function useSearchQueryState() {
  return useRecoilState(searchQueryState);
}

function useSetSearchQuery() {
  return useSetRecoilState(searchQueryState);
}

function useSearchQuery() {
  return useRecoilValue(searchQueryState);
}

export {
  useSearchQueryState,
  useSearchQuery,
  useSetSearchQuery,
  useResetDepartment,
  useSearchExtended,
  useSetSearchExtended,
};
export { useDepartmentQueryState, useDepartmentQuery };
export * from "./sort-by-store";
