import AnimatedLottieView from "lottie-react-native";
import React, { ReactNode } from "react";
import { SafeAreaView, View } from "react-native";
import { tw } from "../../tailwind";

type ContainerTypes = {
  children: ReactNode;
  styles?: string;
};

export default function Container({ children, styles }: ContainerTypes) {
  return (
    <SafeAreaView
      style={tw(styles ? `w-full h-full ${styles}` : "w-full h-full")}
    >
      {children}
    </SafeAreaView>
  );
}
