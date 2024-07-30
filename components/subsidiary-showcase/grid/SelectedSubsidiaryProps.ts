import Subsidiary from "components/subsidiary-showcase/Subsidiary";

import { SetterOrUpdater } from "recoil";

interface Props {
  selected: Subsidiary;
  setSelected: SetterOrUpdater<Subsidiary>;
}

export type Optional = Partial<Props>;
export default Props;