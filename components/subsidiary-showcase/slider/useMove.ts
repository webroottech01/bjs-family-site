import Subsidiary, {
  allSubsidiaries,
} from "components/subsidiary-showcase/Subsidiary";
import useSubsidiary from "components/subsidiary-showcase/grid/SubsidiaryContext";
import { AnimationControls } from "framer-motion";

type Direction = "left" | "right";

const getNext = (input: Subsidiary, direction: Direction): Subsidiary => {
  const index = allSubsidiaries.indexOf(input);
  let newIndex: number = 0;

  if (direction === "right") {
    newIndex = index + 1;
    if (newIndex === 4) {
      newIndex = 0;
    }
  } else if (direction === "left") {
    newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = allSubsidiaries.length - 1;
    }
  }
  return allSubsidiaries[newIndex];
};

function useMove() {
  const [subsidiary, setSubsidiary] = useSubsidiary();

  const move = (direction: Direction, elapsedControls: AnimationControls) => {
    elapsedControls.start("animate");
    
    setSubsidiary((old: Subsidiary) => {
      const newSubsidiary = getNext(old, direction);
      console.debug(`Moving to ${newSubsidiary}`);
      console.debug(elapsedControls);
      return newSubsidiary;
    });
  };

  return move;
}

export default useMove;
