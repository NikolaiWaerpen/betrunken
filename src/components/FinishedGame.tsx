import React from "react";
import { Text, View } from "react-native";
import { tw } from "../../tailwind";

export default function FinishedGame() {
  return (
    <View style={tw("flex justify-center items-center w-full h-full")}>
      <Text style={tw("text-bfc-theme text-3xl")}>
        En ny runde på alle mann!
      </Text>
      <Text style={tw("text-bfc-theme text-sm")}>(Ferdig for denne gang)</Text>
    </View>
  );
}
