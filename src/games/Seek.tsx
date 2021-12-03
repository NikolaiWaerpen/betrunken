import { animal } from "faker";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { tw } from "../../tailwind";
import Container from "../components/Container";
import { NavigationProps } from "../RouteParamList";
import { randomizeArray } from "../utils/randomizeArray";
import FinishedGame from "../components/FinishedGame";

const seekItems = [
  // Ting i kantinen / bygget
  "En pepperbøsse",
  "En frukt",
  "En dorull",
  "En musematte",
  "En stol",
  "En saltbøsse",
  "En tomflaske",
  "En gaffel",
  "Noe laget av tre",
  "Et tastatur",
  "En mus",
  "Et headset",
  "Airpods",
  "En android",
  "En sokk",
  "En sko",
  "En pingpong ball",
  "En jengablokk",
  "Tre servietter",
  "Ett hårstrå fra hver deltaker (skallet får freepass)",
  "En hårbøyle",
  "Briller",
  "En refleks",
  "En nylig bonna drikke",
  "En dorull",
  "Såpe",
  "Et bakverk",
  "Leverpostei",
  "En nylig tømt boks med leverpostei",
  "Makrell i tomat",
  "En nylig tømt boks med makrell i tomat",
  "Smør",
  "En nulig tømt boks med smør",
  "En brødkniv",
  "En skje",
  "En flaskeåpner",
  "Et gressstrå",
  "En penn",
  "En blyant",
  "SAGA Mastercard",
  "SAGA Visa",
  "En sekk fra et selskap som rimer på capability",
  "Den nyeste iPhonen",
  "En skriveblokk fra et selskap som rimer på agility",
  "En tegning av kontoret til et selskap som rimer på stability",
  "En bok",
  "Noe hårete",
  "Et avtatt belte",
  "Antibac",
  "En ferdiglaget toast",
  "En plante",
  "En kaffekopp av papp",
  "Noe grønt",
  "Litt jord",
  "En snusboks",
  "En brukt snus",
  "En annen mobil med fredagspils",
];

const randomizedSeekItems = randomizeArray(seekItems);

export default function Seek({ navigation, route }: NavigationProps<"Seek">) {
  const [offset, setOffset] = useState(0);

  const maxOffset = randomizedSeekItems.length - 3;

  return (
    <Container>
      {offset < maxOffset ? (
        <TouchableOpacity onPress={() => setOffset((previous) => previous + 3)}>
          <View style={tw("flex h-full justify-center items-center")}>
            <View style={tw("h-36 flex justify-between")}>
              {randomizedSeekItems
                .slice(offset, offset + 3)
                .map((seekItem, key) => (
                  <Text
                    style={tw(
                      `${
                        seekItem.length > 30 ? "text-lg" : "text-xl"
                      } text-theme text-center`
                    )}
                    key={key}
                  >
                    {seekItem}
                  </Text>
                ))}
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <FinishedGame />
      )}
    </Container>
  );
}
