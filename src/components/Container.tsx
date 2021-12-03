import React, { ReactNode } from "react";
import { View } from "react-native";
import { tw } from "../../tailwind";

type ContainerTypes = {
  children: ReactNode;
  styles?: string;
};

export default function Container({ children, styles }: ContainerTypes) {
  return (
    <View
      // style={tw(
      //   styles
      //     ? `w-full h-full bg-base ${styles}`
      //     : "w-full h-full bg-base"
      // )}
      style={tw(styles ? `w-full h-full ${styles}` : "w-full h-full")}
    >
      {children}
    </View>
  );
}
