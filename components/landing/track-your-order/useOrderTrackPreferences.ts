import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const visibleState = atom<boolean>({
  key: "order_track_visible",
  default: true,
});

function useTrackOrderPreferences() {
  return useRecoilState(visibleState);
}

function useTrackOrderVisible() {
  return useRecoilValue(visibleState);
}

function useSetTrackOrderVisible() {
  return useSetRecoilState(visibleState);
}

export {
  useTrackOrderPreferences,
  useTrackOrderVisible,
  useSetTrackOrderVisible,
};
