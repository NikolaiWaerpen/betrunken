import {
  faQuestionCircle,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { HeaderBackground } from "@react-navigation/elements";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { Animated, Easing, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { tw } from "../tailwind";
import Container from "./components/Container";
import InfoModal from "./components/InfoModal";
import { games } from "./games";
import Home from "./games/Home";
import useActiveGame from "./hooks/useActiveGame";
import useInfoModalIndex from "./hooks/useInfoModalIndex";
import { NavigationProps, RouteParamList } from "./RouteParamList";

const loadingDuration = 2200;
const loadingProgress = new Animated.Value(0);

function IntroAnimation({
  navigation,
  route,
}: NavigationProps<"IntroAnimation">) {
  useEffect(() => {
    Animated.timing(loadingProgress, {
      useNativeDriver: true, // required
      toValue: 1,
      duration: loadingDuration,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      navigation.navigate("Home");
    }, loadingDuration - 400); // to offset delay after animation finishes
  }, []);

  return (
    <View style={tw("flex flex-1 justify-center items-center")}>
      <View style={tw("w-40 h-40")}>
        <AnimatedLottieView
          source={require("../assets/loading.json")}
          progress={loadingProgress}
        />
      </View>
    </View>
  );
}

function Rules({ navigation, route }: NavigationProps<"Rules">) {
  const { activeGame } = useActiveGame();
  const pointOrHundred = activeGame === "Point" || activeGame === "Hundred";
  const { setInfoModalIndex } = useInfoModalIndex();

  if (!activeGame) navigation.navigate("Home");

  return (
    <Container styles="flex justify-center items-center">
      <Text style={tw("text-theme text-3xl")}>Kan alle reglene?</Text>
      <View style={tw("flex flex-row w-full justify-center mt-4")}>
        <TouchableOpacity
          onPress={() => {
            setInfoModalIndex(0);
          }}
          style={tw(
            "p-4 bg-base-3 border-border border w-36 flex justify-center items-center mr-4"
          )}
        >
          <View style={tw("h-7 flex justify-center")}>
            <Text style={tw("text-theme text-lg")}>
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={tw("mt-1 text-theme")}
              />{" "}
              Nei
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            pointOrHundred
              ? navigation.navigate("Countdown")
              : navigation.navigate("Teams")
          }
          style={tw(
            "p-4 bg-base-3 border-border border w-36 flex justify-center items-center"
          )}
        >
          <View style={tw("h-7 flex justify-center")}>
            <Text style={tw("text-theme text-lg")}>
              Ja{" "}
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={tw("mb-2 text-theme")}
              />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

function Teams({ navigation, route }: NavigationProps<"Teams">) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Ready")}>
      <Container styles="flex justify-center items-center">
        <Text style={tw("text-theme text-3xl text-center")}>
          Del opp i minimum to lag
        </Text>
        <Text style={tw("text-theme text-sm text-center")}>
          (trykk på skjermen for å gå videre)
        </Text>
      </Container>
    </TouchableOpacity>
  );
}

function Ready({ navigation, route }: NavigationProps<"Teams">) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Countdown")}>
      <Container styles="flex justify-center items-center">
        <Text style={tw("text-theme text-3xl text-center")}>Alle klare?</Text>
        <Text style={tw("text-theme text-lg text-center")}></Text>
      </Container>
    </TouchableOpacity>
  );
}

const countdownDuration = 4200;
const countdownProgress = new Animated.Value(0);

function Countdown({ navigation, route }: NavigationProps<"Countdown">) {
  const { activeGame } = useActiveGame();
  const [animationRunOnce, setAnimationRunOnce] = useState(false);

  useEffect(() => {
    Animated.timing(countdownProgress, {
      useNativeDriver: true, // required
      toValue: 1,
      duration: countdownDuration,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      // @ts-ignore
      navigation.navigate(activeGame);
    }, countdownDuration - 1000); // to offset delay after animation finishes

    // minor bug workaround - ugly
    setTimeout(() => {
      setAnimationRunOnce(true);
    }, countdownDuration);
  }, []);

  return (
    <View style={tw("flex flex-1 justify-center items-center")}>
      <View style={tw("w-64 h-64")}>
        {!animationRunOnce && (
          <AnimatedLottieView
            source={require("../assets/countdown.json")}
            progress={countdownProgress}
          />
        )}
      </View>
    </View>
  );
}

const Stack = createStackNavigator<RouteParamList>();

export default function Routes() {
  const { setInfoModalIndex } = useInfoModalIndex();
  const { setActiveGame } = useActiveGame();

  return (
    <View style={tw("flex-1 bg-base")}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator
          initialRouteName="IntroAnimation"
          screenOptions={{
            cardStyle: tw("bg-base"),
          }}
        >
          <Stack.Group
            screenOptions={{
              header: () => null,
            }}
          >
            <Stack.Screen name={"IntroAnimation"} component={IntroAnimation} />
            <Stack.Screen
              name={"Home"}
              component={Home}
              options={{
                gestureEnabled: false,
              }}
            />
            <Stack.Screen name={"Rules"} component={Rules} />
            <Stack.Screen name={"Teams"} component={Teams} />
            <Stack.Screen name={"Ready"} component={Ready} />
            <Stack.Screen name={"Countdown"} component={Countdown} />
          </Stack.Group>

          <Stack.Group
            screenOptions={{
              // https://stackoverflow.com/a/51199466/15900853
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
              },
              gestureEnabled: false,
            }}
          >
            {games.map(({ game, component }) => (
              <Stack.Screen
                key={game}
                name={game}
                component={component}
                options={{
                  headerBackground: () => (
                    <HeaderBackground style={tw("bg-base")} />
                  ),
                  headerLeft: ({ onPress }) => (
                    <TouchableOpacity
                      onPress={() => {
                        setActiveGame("");
                        onPress();
                      }}
                      style={tw("ml-8 p-4")}
                    >
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        style={tw("text-theme text-3xl")}
                        size={25}
                      />
                    </TouchableOpacity>
                  ),
                  headerTitle: () => null,
                  headerRight: () => (
                    <TouchableOpacity
                      onPress={() => {
                        setInfoModalIndex(0);
                      }}
                      style={tw("mr-8 p-4")}
                    >
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        style={tw("text-theme text-3xl")}
                        size={25}
                      />
                    </TouchableOpacity>
                  ),
                  headerShadowVisible: false,

                  headerStyle: {
                    elevation: 0,
                    shadowColor: "transparent",
                    shadowOffset: {
                      height: 0,
                      width: 0,
                    },
                    borderBottomWidth: 0,
                    shadowOpacity: 0,
                  },
                }}
              />
            ))}
          </Stack.Group>
        </Stack.Navigator>
        <InfoModal />
      </NavigationContainer>
    </View>
  );
}
