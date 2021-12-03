import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { tw } from "../../tailwind";
import Swiper from "react-native-deck-swiper";

export default function Deck({ cards, textSize }) {
  const [disableSwipe, setDisableSwipe] = useState(false);

  const cardsWithInstructions = [
    "Swipe for å starte",
    ...cards,
    "Ferdig for denne gang!",
  ];

  return (
    <Swiper
      backgroundColor={"#1a1a1a"}
      cards={cardsWithInstructions}
      cardIndex={0}
      stackSize={6}
      animateCardOpacity
      onSwiped={(card) => {
        if (card === cardsWithInstructions.length - 2) setDisableSwipe(true);
      }}
      verticalSwipe={false}
      horizontalSwipe={!disableSwipe}
      renderCard={(card) => (
        <View
          style={[
            tw(
              "h-3/4 bg-bfc-base-3 rounded-xl flex items-center justify-center"
            ),
            styles.cardShadow,
          ]}
        >
          <Text style={tw(`text-bfc-theme text-center ${textSize}`)}>
            {card}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.5,
  },
});
