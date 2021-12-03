import { useContext } from "react";
import { InfoModalIndexContext } from "../providers/InfoModalIndexProvider";

export default function useInfoModalIndex() {
  return useContext(InfoModalIndexContext);
}
