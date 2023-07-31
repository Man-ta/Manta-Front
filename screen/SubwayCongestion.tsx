import { View, Text } from "react-native"
import { SubwayModal } from "./modal/SubwayModal";
import { SubwayDetail } from "./modal/SubwayDetail";

const SubwayCongestion = () => {
  return (
    <>
      <View>
        <Text>
          지하철 혼잡도
        </Text>
        <SubwayModal />
        <SubwayDetail />
      </View>
    </>
  )
}

export { SubwayCongestion };