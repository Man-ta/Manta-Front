import { View, Text, Button } from "react-native"
import { MapModal } from "./modal/MapModal";

const MapCongestion = () => {
  return (
    <>
      <View>
        <Text>
          지도 혼잡도
          <MapModal />
        </Text>
      </View>
    </>
  )
}

export { MapCongestion };