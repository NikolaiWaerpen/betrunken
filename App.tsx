import React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import InfoModalIndexProvider from "./src/providers/InfoModalIndexProvider";
import Routes from "./src";
import ActiveGameProvider from "./src/providers/ActiveGameProvider";

export default function App() {
  return (
    <ActiveGameProvider>
      <InfoModalIndexProvider>
        <Routes />
        <StatusBar style="auto" hidden />
      </InfoModalIndexProvider>
    </ActiveGameProvider>
  );
}
