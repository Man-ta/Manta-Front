import { View, Text, Button, Image } from "react-native"
import { MapModal } from "./modal/MapModal";

// 지도에 혼잡도를 보여주는 컴포넌트
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