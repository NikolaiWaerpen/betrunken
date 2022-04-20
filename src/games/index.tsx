import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import { GamesParamList } from "../RouteParamList";

import Point from "./Point";
import Mime from "./Mime";
import Hundred from "./Hundred";
import {
  faChevronDown,
  faChild,
  faEye,
  faHandPointRight,
  faQuestion,
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

export const games: gamesType[] = [
  {
    game: "Point",
    description:
      "Perfekt for å få fart på vorset! Hvem sa at det var stygt å peke?",
    icon: faHandPointRight,
    render: true,
    component: Point,
    GameInfo: (
      <View>
        <Text style={tw("text-theme text-3xl font-medium text-center mt-8")}>
          Pekeleken
        </Text>
        <View style={tw("mt-8")}>
          <Text style={tw("text-base-c text-lg")}>
            Pekeleken er veldig enkel. Velg en ordstyrer til å lese utsagn.
            Personen som leser teller så høyt 3, 2, 1, og alle peker på
            vedkommende de tror passer best til utsagnet. Den som flest peker på
            må drikke "vann".
          </Text>
          <View>
            <Text style={tw("text-base-c text-lg mt-4 underline mt-8 mb-2")}>
              For eksempel:
            </Text>

            <View style={tw("flex items-center")}>
              <Text style={tw("text-base-c text-lg text-center")}>
                Hvem kunne strøket undertøyet sitt
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-theme my-4")}
              />
              <Text style={tw("text-base-c text-lg text-center")}>
                3.. 2.. 1..
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-theme my-4")}
              />
              <Text style={tw("text-base-c text-lg text-center")}>
                Alle peker på den de tror kunne strøket undertøyet sitt
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-theme my-4")}
              />
              <Text style={tw("text-base-c text-lg text-center")}>
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
    game: "Hundred",
    description:
      "Hvor godt kjenner du de andre i rommet? Har du en overdreven tiltro som menneskekjenner?",
    icon: faQuestion,
    render: true,
    component: Hundred,
    GameInfo: (
      <View>
        <Text style={tw("text-theme text-3xl font-medium text-center mt-8")}>
          100 spørsmål
        </Text>
        <View style={tw("mt-8")}>
          <Text style={tw("text-base-c text-lg")}>
            100 spørsmål er en klassiker. Finn et objekt som kan kastes til
            deltakerene. Velg så en ordstyrer til å lese utsagn. Personen leser
            utsagnet høyt og kaster objektet til den de mener passer best til
            utsagnet. Vedkommende som blir kastet til må drikke "vann".
          </Text>
          <View>
            <Text style={tw("text-base-c text-lg mt-4 underline mt-8 mb-2")}>
              For eksempel:
            </Text>

            <View style={tw("flex items-center")}>
              <Text style={tw("text-base-c text-lg text-center")}>
                Hvem er mest blikkfang
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-theme my-4")}
              />
              <Text style={tw("text-base-c text-lg text-center")}>
                Personen som har gjenstanden kaster til vedkommende de mener
                passer best til utsagnet
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-theme my-4")}
              />
              <Text style={tw("text-base-c text-lg text-center")}>
                Vedkommende må drikke "vann"
              </Text>
            </View>
          </View>
        </View>
      </View>
    ),
    options: { headerTitle: "100 spørsmål" },
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
        <Text style={tw("text-theme text-3xl font-medium text-center mt-8")}>
          Mimeleken
        </Text>
        <View style={tw("mt-8")}>
          <Text style={tw("text-base-c text-lg")}>
            Del dere opp i lag. Minst to, men gjerne flere. En gruppe starter
            med mobilen. Ikke vis hva som står på skjermen til de andre
            gruppene! Laget skal så gjøre sitt beste på å mime avdelingen som
            står på skjermen mens de andre skal gjette.
          </Text>
          <View>
            <Text style={tw("text-base-c text-lg mt-4 underline mt-8 mb-2")}>
              For eksempel:
            </Text>

            <View style={tw("flex items-center")}>
              <Text style={tw("text-base-c text-lg text-center")}>Setup</Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-theme my-4")}
              />
              <Text style={tw("text-base-c text-lg text-center")}>
                Laget mimer at de pakker ut og trykker F12 på en PC
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-theme my-4")}
              />
              <Text style={tw("text-base-c text-lg text-center")}>
                Resten av lagene prøver å gjette hvilken avdeling det er
              </Text>
              <FontAwesomeIcon
                icon={faChevronDown}
                style={tw("text-theme my-4")}
              />
              <Text style={tw("text-base-c text-lg text-center")}>
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
