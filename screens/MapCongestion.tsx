import { View, Text, Button, Image } from "react-native"
import { MapModal } from "./modal/MapModal";
import React from "react";

// 지도에 혼잡도를 보여주는 컴포넌트
const MapCongestion = () => {
  return (
    <>
      <View>
          <MapModal />

      </View>
    </>
  )
}

export { MapCongestion };