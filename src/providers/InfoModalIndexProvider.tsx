import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type InfoModalIndexProviderProps = {
  children: ReactNode;
};

type InfoModalIndexContextProps = {
  infoModalIndex: number;
  setInfoModalIndex: Dispatch<SetStateAction<number>>;
};

export const InfoModalIndexContext = createContext(
  {} as InfoModalIndexContextProps
);

export default function InfoModalIndexProvider({
  children,
}: InfoModalIndexProviderProps) {
  const [infoModalIndex, setInfoModalIndex] = useState<number>(-1);

  return (
    <InfoModalIndexContext.Provider
      value={{ infoModalIndex, setInfoModalIndex }}
    >
      {children}
    </InfoModalIndexContext.Provider>
  );
}
