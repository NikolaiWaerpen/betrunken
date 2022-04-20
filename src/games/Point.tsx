import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { tw } from "../../tailwind";
import Container from "../components/Container";
import Deck from "../components/Deck";
import { NavigationProps } from "../RouteParamList";

const pointData = {
  sfw: [
    "Hvem ville du blitt strandet på en øde øy med",
    "Hvem gråter mest når de ser en trist film",
    "Hvem kunne kjøpt sko til 3000kr",
    "Hvem jobber mest",
    "Hvem kunne kræsjet bilen",
    "Hvem kunne ikke dratt på telttur i skogen",
    "Hvem foretrekker cider i stedet for øl",
    "Hvem kunne prøvd å flørte seg bort fra en bot",
    "Hvem kunne vært i et band",
    "Hvem gir best komplimenter",
    "Hvem har lest alle Harry Potter bøkene",
    "Hvem er flinkest til å ta vare på miljøet",
    "Hvem ligner mest på Justin Bieber",
    "Hvem har best karakter",
    "Hvem hadde likt en typisk romantisk 'jentefilm' best",
    "Hvem har vært på TV",
    "Hvem har flest likes på profilbildet sitt på Facebook",
    "Hvem har flest følgere på Instagram",
    "Hvem kunne blitt statsminister",
    "Hvem har lest færrest bøker",
    "Hvem har lest flest bøker",
    "Hvem er mest filosofisk",
    "Hvem er den beste danseren",
    "Hvem er mest fotogen",
    "Hvem hadde blitt den beste vampyren",
    "Hvem hadde 0 dager fravær på skolen",
    "Hvem kommer til å flytte til månen først",
    "Hvem hadde overlevd lengst ute i naturen",
    "Hvem hadde klart å løse rubiks kube raskest",
    "Hvem har aldri sett en episode Seinfeld",
    "Hvem hadde ikke hoppet i fallskjerm",
    "Hvem kunne forandret navnet sitt",
    "Hvem vill vært først til å synge på en karaoke bar",
    "Hvem vil få flest barn",
    "Hvem gråt mest når Mufasa døde i Løvenes konge",
    "Hvem kunne hatt Aleksander Rybak sombakgrunnbilde på mobilen",
    "Hører på russemusikk i skjul",
    "Hvem kunne strøket undertøyet sitt",
    "Hvem har den merkeligste musikksmaken",
    "Hvem kunne blitt arrestert for å tisse på en offentlig plass",
    "Hvem er den verste sjåføren",
    "Hvem har spist flest McDonald's måltider i løpet av livet sitt",
    "Hvem kunne endt opp med 50 katter som samboere",
    "Hvem er den dårligste taperen",
    "Hvem ville du spurt om kjærlighetsråd",
    "Hvem har best klesstil",
    "Hvem har høyest selvtillit",
    "Hvem kunne kommet lengst i idol",
    "Hvem er den største drama queen",
    "Hvem kunne hengt opp en Die Hard filmplakat på soverommet",
    "Hvem kunne kommet på en million dollar idea",
    "Hvem er raskest på 100 meter",
    "Hvem har det kuleste navnet",
    "Hvem kunne samlet på Lady Gaga suvenirer i sjul",
    "Hvem hadde kommet lengst i Vil du bli millionær",
    "Hvem hadde vunnet en karaoke konkurranse",
    "Hvem ville vært den beste politikeren",
    "Hvem er mest opptatt av Paradise Hotel",
    "Hvem ville hatt den beste bloggen",
    "Hvem kunne vært i et band",
    "Hvem har spilt i korps",
    "Hvem har den beste radiostemmen",
    "Hvem bruker mest tid foran speilet",
    "Hvem bruker mest tid på utseende sitt",
    "Hvem er mest romantisk",
    "Hvem kunne dratt på en Lene Alexandra konsert og kjøpt en t-skjorte",
    "Hvem har den beste sangstemmen",
    "Hvem hadde klart seg lengst uten mobil og PC",
    "Hvem har på seg det dyreste antrekket",
    "Hvem kunne glemt bursdagen til moren sin",
    "Hvem kommer til å ende opp i fengsel",
    "Hvem kunne giftet seg med noen på grunn av penger",
    "Hvem kunne betalt blodpris for å se en Britney Spears konsert",
    "Hvem hadde spurt Eyvind Helstrøm om en autograf",
    "Hvem kunne knust skjermen på telefonen samme dag som de får den fra jobben",
    "Hvem klarer ikke å bruke en hammer",
    "Hvem ville vært først til å synge på en karaoke bar",
    "Hvem kommer til å finne opp noe en dag",
    "Hvem hadde overlevd lengst i en zombie apokalypse",
    "Hvem kunne hatt sitt eget reality show",
    "Hvem kunne trodd på en latterlig og usannsynlig historie",
    "Hvem kunne lagt ut bilde av maten sin på Instagram",
    "Hvem er den verste kokken",
    "Hvem hadde vunnet en freestyle rap battle",
  ],
  nsfw: [
    // Filler
    "Hvem ville sagt fra til deg hvis antrekket ditt var stygt",
    "Hvem ville klart å spise opp en 1000 grams burger raskest",
    "Hvem hadde ikke resirkulert søppel kun fordi det er mer arbeid",
    "Hvem kunne gått en uke uten å dusje",
    "Hvem ser yngst ut",
    "Hvem hadde du valgt sist til fotballaget ditt",
    "Hvem har googlet sitt eget navn mest",
    "Hvem har swipet mest på Tinder",
    "Hvem er lettest å lure",
    "Hvem kommer til å bli tjukkest",
    "Hvem kunne du crushet på",
    "Hvem kunne våknet uten å vite hvor de var",
    "Hvem har dårligst karakter",
    "Hvem ser best ut",
    "Hvem har fått flest fartsbøter",
    "Hvem kommer til å være mest hangover i morgen",
    "Hvem kunne tatt solarium en varm og solrik sommerdag",
    "Hvem kunne jobbet for mafia",
    "Hvem kunne havnet i fengsel",
    "Hvem har verst klesstil",
    "Hvem er mest hipster",
    "Hvem ser eldst ut",
    "Hvem ville blitt drept først i en skrekkfilm",
    "Hvem kunne tatt en tramp stamp tatovering",
    "Hvem kunne endt opp med å spy på toalettet på et utested",
    "Hvem vill hatt problemer med å ta i mot om du hadde kastet en ball til dem",
    "Hvem kommer til å gjøre noe de angrer på i kveld",
    "Hvem kunne hatt en Snapchat Story på flere hundre sekunder etter en kveld på fylla",
    "Hvem kunne stått naken på TV rett i ryggen og med høy hake",
    "Hvem er mest høylytt i senga",
    "Hvem har kysset flest",
    "Hvem holder lengst i senga",
    "Hvem liker å kle seg ut",
    "Hvem har mest kroppshår",
    "Hvem kunne frivillig stilt opp som nakenmodell",
    "Hvem kunne trodd på reklamene som sier det er single jenter i nærheten",
    "Hvem kunne endt opp med en kone fra Thailand",
    "Hvem er best til å kysse",
    "Hvem var yngst når de mistet jomfrudommen",
    "Hvem kunne shavet kjønnshårene i mønster",
  ],
};

const options = ["Snill", "Blandet", "Dristig"];

type HaveIType = typeof pointData.sfw;

const randomizeArray = (nonRandomArray: HaveIType) => {
  let randomized = [...nonRandomArray];
  for (let i = randomized.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomized[i], randomized[j]] = [randomized[j], randomized[i]];
  }
  return randomized;
};

export default function Point({ navigation, route }: NavigationProps<"Point">) {
  const [haveICount, setHaveICount] = useState(0);
  const [chosenMode, setChosenMode] = useState(options[1]);
  const [chosenHaveIArray, setChosenHaveIArray] = useState([
    ...pointData.sfw,
    ...pointData.nsfw,
  ]);
  const maxCount = chosenHaveIArray.length;

  useEffect(() => {
    if (!chosenMode) return;

    setHaveICount(0);

    let temporaryChosenHaveIArray = [];
    if (chosenMode === options[0]) {
      // Snill
      temporaryChosenHaveIArray = randomizeArray([...pointData.sfw]);
    } else if (chosenMode === options[2]) {
      // Dristig
      temporaryChosenHaveIArray = randomizeArray([...pointData.nsfw]);
    } else {
      temporaryChosenHaveIArray = randomizeArray([
        ...pointData.sfw,
        ...pointData.nsfw,
      ]);
    }

    setChosenHaveIArray(temporaryChosenHaveIArray);
  }, [chosenMode]);

  const onNext = () => {
    if (haveICount >= maxCount) return;
    setHaveICount((previous) => previous + 1);
  };

  return (
    <Container>
      {/* Options */}
      <View style={tw("w-full flex items-center")}>
        <View
          style={tw("flex flex-row justify-between bg-base-3 p-0.5 rounded-md")}
        >
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => setChosenMode(option)}
            >
              <View
                style={tw(
                  `${
                    chosenMode === option ? "bg-base" : ""
                  } p-2 rounded-md w-16 flex items-center`
                )}
              >
                <Text style={tw("text-theme text-xs")}>{option}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View>
        <Deck cards={chosenHaveIArray} textSize="text-lg" />
      </View>
    </Container>
  );
}
