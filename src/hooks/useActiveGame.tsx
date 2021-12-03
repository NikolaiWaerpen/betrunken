import { useContext } from "react";
import { ActiveGameContext } from "../providers/ActiveGameProvider";

export default function useActiveGame() {
  return useContext(ActiveGameContext);
}
