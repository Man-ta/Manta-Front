import { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native"
import React from "react"
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
    marginTop: 600
  }
});

export { SubwayDetail };