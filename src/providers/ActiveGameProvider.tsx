import React, {
  createContext,
  Dispatch,
  useState,
  ReactNode,
  SetStateAction,
} from "react";
import { GamesParamList } from "../RouteParamList";

export type ActiveGameType = keyof GamesParamList | "";

type ActiveGameContextType = {
  activeGame: ActiveGameType;
  setActiveGame: Dispatch<SetStateAction<ActiveGameType>>;
};

export const ActiveGameContext = createContext({} as ActiveGameContextType);

export default function ActiveGameProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeGame, setActiveGame] = useState<ActiveGameType>("");

  return (
    <ActiveGameContext.Provider value={{ activeGame, setActiveGame }}>
      {children}
    </ActiveGameContext.Provider>
  );
}
