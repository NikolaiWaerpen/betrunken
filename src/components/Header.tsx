import { faInfoCircle } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { ReactNode } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { tw } from "../../tailwind";
import Container from "../components/Container";
import useInfoModalIndex from "../hooks/useInfoModalIndex";
import { NavigationProps, RouteParamList } from "../RouteParamList";

type HeaderProps = NavigationProps<keyof RouteParamList> & {
  children: ReactNode;
};

export default function Header({ navigation, route, children }: HeaderProps) {
  const { setInfoModalIndex } = useInfoModalIndex();

  return (
    <Container>
      <View style={tw("flex-none")}>
        <View style={tw("pt-16 px-8 flex flex-row justify-between")}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={tw("text-bfc-theme text-3xl")}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setInfoModalIndex(0)}>
            <FontAwesomeIcon
              icon={faInfoCircle}
              style={tw("text-bfc-theme text-3xl")}
              size={25}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>{children}</View>
    </Container>
  );
}
