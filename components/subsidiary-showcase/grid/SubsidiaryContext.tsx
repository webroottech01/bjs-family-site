import { createContext, useContext } from "react";
import { WithChildren } from "@bjsdistribution/components";
import Subsidiary from "components/subsidiary-showcase/Subsidiary";
import { Dispatch, SetStateAction } from "react";
export type SetNewSubsidiary = Dispatch<SetStateAction<Subsidiary>>;

type Props = {
  selected: Subsidiary;
  setSelected: SetNewSubsidiary;
};

const Context = createContext<Props>({
  selected: "home delivery",
  setSelected: (old) => old,
});

function SubsidiaryProvider(props: Props & WithChildren) {
  return (
    <Context.Provider
      value={{
        selected: props.selected,
        setSelected: props.setSelected,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

function useSelectedSubsidiary() {
  return useContext(Context).selected;
}

function useSetSelectedSubsidiary() {
  return useContext(Context).setSelected;
}

function useSubsidiary(): [Subsidiary, SetNewSubsidiary] {
  const context = useContext(Context);
  return [context.selected, context.setSelected];
}

export { SubsidiaryProvider, useSetSelectedSubsidiary, useSelectedSubsidiary };
export default useSubsidiary;
