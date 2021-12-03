import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { GamesParamList } from "../RouteParamList";

import Point from "./Point";
import Mime from "./Mime";
import Seek from "./Seek";
import {
  faChevronDown,
  faChild,
  faEye,
  faHandPointRight,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { tw } from "../../tailwind";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

type gamesType = {
  game: keyof GamesParamList;
  description: string;
  icon: IconDefinition;
  render: boolean;
  component: any;
  GameInfo: ReactNode;
  options: any;
};

const InfoComponent = ({ text }) => {
  return <Text style={tw("text-bfc-theme")}>{text}</Text>;
};

export const games: gamesType[] = [
  {
    game: "Point",
    description:
      "Perfekt for å få fart på vorset! Hvor godt kjenner du egentlig de nærmest rundt deg...?",
    icon: faHandPointRight,
    render: true,
    component: Point,
    GameInfo: (
      <View>
        <Text
          style={tw("text-bfc-theme text-3xl font-medium text-center mt-8")}
        >
          Pekeleken
        </Text>
        <View style={tw("mt-8")}>
          <Text style={tw("text-bfc-base-c text-lg")}>
            Pekeleken er veldig enkel. Velg en ordstyrer til å lese utsagn.
            Personen som leser teller så høyt 3, 2, 1, og alle peker på
            vedkommende de tror passer best til utsagnet. Den som flest peker må
            drikke "vann".
          </Text>
          <View>
            <Text
              style={tw("text-bfc-base-c text-lg mt-4 underline mt-8 mb-2")}
            >
              For eksempel:
            </Text>

            <View style={tw("flex items-center")}>
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Hvem kunne strøket undertøyet sitt
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-bfc-theme my-4")}
              />
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                3.. 2.. 1..
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-bfc-theme my-4")}
              />
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Alle peker på den de tror kunne strøket undertøyet sitt
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-bfc-theme my-4")}
              />
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Den personen som flest peker på må drikke "vann"
              </Text>
            </View>
          </View>
        </View>
      </View>
    ),
    options: { headerTitle: "Pekeleken" },
  },
  {
    game: "Seek",
    // description: "Hvem sa at ferdigheten å finne de mest obskyre gjenstander ikke kom til nytte?",
    description:
      "Forbered deg på å sette bena til god nytte. Her gjelder det å finne tre gjenstander.",
    icon: faEye,
    render: true,
    component: Seek,
    GameInfo: (
      <View>
        <Text
          style={tw("text-bfc-theme text-3xl font-medium text-center mt-8")}
        >
          Finn gjenstandene
        </Text>
        <View style={tw("mt-8")}>
          <Text style={tw("text-bfc-base-c text-lg")}>
            Del dere opp i lag. Minst to, men gjerne flere. Start spillet. Trykk
            videre til dere finner tre gjenstander som er mulige å finne der
            dere er. Når man har funnet tre gode gjenstander så løper hvert lag
            for å vært de første til å hente, og returnere gjenstande til der
            dere startet. Taperene må drikke "vann".
          </Text>
          <View>
            <Text
              style={tw("text-bfc-base-c text-lg mt-4 underline mt-8 mb-2")}
            >
              For eksempel:
            </Text>

            <View style={tw("flex items-center")}>
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Brødskive, pepperbøsse, belte
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-bfc-theme my-4")}
              />
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Lagene prøver å finne gjenstandene
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-bfc-theme my-4")}
              />
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Første laget til å finne og returnere alle gjenstandene vinner
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-bfc-theme my-4")}
              />
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Taperlag(ene) må drikke "vann"
              </Text>
            </View>
          </View>
        </View>
      </View>
    ),
    options: { headerTitle: "Finn gjenstandene" },
  },
  {
    game: "Mime",
    description:
      "Mim den avdelingen! Ingen kommer seg gjennom denne uten å se ut som en idiot i prosessen.",
    icon: faChild,
    render: true,
    component: Mime,
    GameInfo: (
      <View>
        <Text
          style={tw("text-bfc-theme text-3xl font-medium text-center mt-8")}
        >
          Mimeleken
        </Text>
        <View style={tw("mt-8")}>
          <Text style={tw("text-bfc-base-c text-lg")}>
            Del dere opp i lag. Minst to, men gjerne flere. En gruppe starter
            med mobilen. Ikke vis hva som står på skjermen til de andre
            gruppene! Laget skal så gjøre sitt beste på å mime avdelingen som
            står på skjermen mens de andre skal gjette.
          </Text>
          <View>
            <Text
              style={tw("text-bfc-base-c text-lg mt-4 underline mt-8 mb-2")}
            >
              For eksempel:
            </Text>

            <View style={tw("flex items-center")}>
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Setup
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-bfc-theme my-4")}
              />
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Laget mimer at de pakker ut og trykker F12 på en PC
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-bfc-theme my-4")}
              />
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Resten av lagene prøver å gjette hvilken avdeling det er
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-bfc-theme my-4")}
              />
              <Text style={tw("text-bfc-base-c text-lg text-center")}>
                Lagene som ikke klarer å gjette avdelingen må drikke "vann"
              </Text>
            </View>
          </View>
        </View>
      </View>
    ),
    options: { headerTitle: "Mimeleken" },
  },
];
