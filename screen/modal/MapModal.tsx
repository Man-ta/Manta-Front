import { useState } from "react";
import { View, Text, Modal, Button, StyleSheet } from "react-native"

const MapModal = () => {

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
              지도에서 혼잡도에 대한 정보를 필터링해서 볼 수 있게 돕는 팝업창
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
    marginTop: 300
  }
});

export { MapModal };