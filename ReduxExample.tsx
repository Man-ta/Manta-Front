import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setName } from "./store";

/* redux store 적용 예시 코드 */

function ReduxExample() {

  const name = useSelector((state: RootState) => state.name); // useSelector 훅 이용해 store에서 name 가져옴
  const dispatch = useDispatch(); // reducers 안에 있는 함수 사용하기 위해 사용하는 훅

  const nameClick = (value: string) => {
    dispatch(setName(value))  // 함수는 반드시 dispatch로 감싸주기 
  }

  return (
    <View>
      <Text>{name}</Text>
      <Button title="nameChange" onPress={() => nameClick('양하연')} />
    </View>
  )
}

export { ReduxExample };