import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import BottomSheet from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { View } from "react-native";
import { tw } from "../../tailwind";
import { games } from "../games";
import useActiveGame from "../hooks/useActiveGame";
import useInfoModalIndex from "../hooks/useInfoModalIndex";

export default function InfoModal() {
  const { infoModalIndex, setInfoModalIndex } = useInfoModalIndex();
  const { activeGame } = useActiveGame();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoint = ["95%"];

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoint}
      // bottomInset={0} // add bottom inset to elevate the sheet
      // detached={true}
      backgroundStyle={tw("bg-base-3")} // TODO: TWEAK DRAWER COLORS
      index={infoModalIndex}
      enablePanDownToClose
      onChange={(currentInfoModalIndex) => {
        if (currentInfoModalIndex === -1)
          setInfoModalIndex(currentInfoModalIndex);
      }}
      style={tw("mx-3")}
      handleComponent={() => (
        <View style={tw("flex w-full justify-center items-center")}>
          <View style={tw("w-9 h-1 rounded-xl bg-base-dimmed mt-3")} />
        </View>
      )}
    >
      {/* <View style={tw("flex-1 items-center")}>{GameInfo && <GameInfo />}</View> */}
      <View style={tw("flex-1 mx-6")}>
        {games.map(({ game, GameInfo }, key) => {
          if (game === activeGame) return <View key={key}>{GameInfo}</View>;
        })}
      </View>
    </BottomSheet>
  );
}
