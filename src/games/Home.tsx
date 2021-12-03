import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { games } from ".";
import { tw } from "../../tailwind";
import Container from "../components/Container";
import useActiveGame from "../hooks/useActiveGame";
import { NavigationProps } from "../RouteParamList";

export default function Home({ navigation, route }: NavigationProps<"Home">) {
  const { setActiveGame } = useActiveGame();

  return (
    <Container>
      <View style={tw("h-full w-full justify-center")}>
        <Text style={tw("text-bfc-theme text-4xl font-semibold text-center")}>
          Fredagspils!
        </Text>
        <View style={tw("mt-20 flex justify-center items-center")}>
          {games
            .filter(({ render }) => render)
            .map(({ game, options, icon, description }) => {
              return (
                <TouchableOpacity
                  key={game}
                  onPress={() => {
                    setActiveGame(game);
                    navigation.navigate("Rules");
                  }}
                  style={tw("mb-10")}
                >
                  <View
                    style={tw(
                      "p-4 bg-bfc-base-3 border-bfc-border border h-28 flex justify-center items-center"
                    )}
                  >
                    <View style={tw("flex flex-row")}>
                      <View style={tw("flex justify-center")}>
                        <FontAwesomeIcon
                          icon={icon}
                          style={tw("text-bfc-theme")}
                          size={45}
                        />
                      </View>
                      <View style={tw("flex flex-col ml-3 w-72")}>
                        <Text style={tw("text-bfc-theme text-xl font-medium")}>
                          {options.headerTitle}
                        </Text>
                        <Text style={tw("text-bfc-base-c text-sm")}>
                          {description}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
        <View style={tw("mt-10")}>
          <Text style={tw("text-bfc-theme text-base text-center")}>
            Idéer & innspill?
          </Text>
          <Text style={tw("text-bfc-theme text-sm text-center")}>
            Send en melding til Nikolai Wærpen på Teams!
          </Text>
        </View>
      </View>
    </Container>
  );
}
