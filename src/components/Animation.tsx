// temporarily deprecated

import AnimatedLottieView from "lottie-react-native";
import { useEffect } from "react";
import { Animated, Easing, View } from "react-native";
import { tw } from "../../tailwind";
import { NavigationProps } from "../RouteParamList";

const progress = new Animated.Value(0);

type AnimationProps = {
  src: string;
  duration: number;
  callbackOffset: number;
  callback: () => void;
};

export default function Animation({
  src,
  duration,
  callbackOffset,
  callback,
}: AnimationProps) {
  useEffect(() => {
    Animated.timing(progress, {
      useNativeDriver: true, // required
      toValue: 1,
      duration: duration,
      easing: Easing.linear,
    }).start(({ finished }) => {
      if (finished) {
        console.log("animation finished");
        // navigation.navigate("Home");
      }
    });

    setTimeout(() => {
      callback();
    }, duration - callbackOffset); // to offset delay after animation finishes
  }, []);

  return (
    <View style={tw("flex flex-1 justify-center items-center")}>
      <View style={tw("w-40 h-40")}>
        <AnimatedLottieView
          // source={require(`../../assets/${src}`)}
          source={require(src)}
          progress={progress}
        />
      </View>
    </View>
  );
}
