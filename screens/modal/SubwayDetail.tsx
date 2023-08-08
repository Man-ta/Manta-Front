import { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native"
import React from "react"
import { WebView } from "react-native-webview";


// 특정 지하철역을 클릭하면 해당 지하철역의 상세정보를 화면 하단에 보여주는 컴포넌트 
const SubwayDetail = () => {

  const [modalVisible, setModalVisible] = useState<boolean>(false);  // 모달의 초기 상태를 false로 설정하여 보이지 않게 함

  const toggleModal = () => {
    setModalVisible(!modalVisible);  // 모달의 상태를 true로 바꿔 보이게 함
  }

  return (
    <>
      <View>
        <Button title="모달열기" onPress={toggleModal} />
        <Modal animationType="none" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modal}>
            <Text>
              화면 하단에 올라오는 지하철 역의 상세정보에 대한 팝업
            </Text>
            <WebView
              style={styles.webview} // 여기에 스타일 추가
              source={{
                uri: "https://puzzle.geovision.co.kr/map?lat=37.48412142074317&lng=127.03628540039102&zoom=10&poiId=317&poiType=subway&overlayType=",
              }}
              onError={(syntheticEvent) => {
                const { nativeEvent } = syntheticEvent;
                console.warn('WebView error: ', nativeEvent);
              }}
            />
            <Button title="모달닫기" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 200,  // marginTop를 조정해서 모달의 위치를 변경해봅니다.
    height: '100%',  // 모달의 높이 조정
    width: '100%'    // 모달의 너비 조정s
  },
  webview: {
    width: '100%',   // WebView의 너비를 100%로 설정
    height: '60%',   // WebView의 높이를 60%로 설정
  }
});

export { SubwayDetail };