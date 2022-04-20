import { RouteProp } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

export type GamesParamList = {
  Point: undefined;
  Hundred: undefined;
  Mime: undefined;
};

export type RouteParamList = GamesParamList & {
  IntroAnimation: undefined;
  Home: undefined;
  Rules: undefined;
  Teams: undefined;
  Ready: undefined;
  Countdown: undefined;
};

export type NavigationProps<T extends keyof RouteParamList> = {
  navigation: StackNavigationProp<RouteParamList, T>;
  route: RouteProp<RouteParamList, T>;
};
