import { View, Text } from "react-native"
import { SubwayModal } from "./modal/SubwayModal";
import { SubwayDetail } from "./modal/SubwayDetail";

// 지하철의 모든 노선을 보여주는 컴포넌트
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