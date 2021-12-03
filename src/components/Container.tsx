import AnimatedLottieView from "lottie-react-native";
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
      {/* <View style={tw("z-0 absolute h-full w-full")}>
        <AnimatedLottieView
          source={require("../../assets/stars.json")}
          style={tw("w-full h-full")}
          loop
          autoPlay
        />
      </View> */}
      {children}
    </View>
  );
}
