import { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";
import React from "react";

const SubwayModal = ({ compartment }: { compartment: number[] }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  console.log(compartment);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // 각 값에 따라 "여유", "보통", "혼잡" 반환하는 함수
  const getCongestionStatus = (value: number) => {
    if (value <= 34) {
      return "여유";
    } else if (value <= 100) {
      return "보통";
    } else {
      return "혼잡";
    }
  };

  // 스타일을 동적으로 반환하는 함수
  const getCongestionStyle = (value: number) => {
    if (value <= 34) {
      return styles.greenText;
    } else if (value <= 100) {
      return styles.blueText;
    } else {
      return styles.redText;
    }
  };

  return (
    <>
      <View>
        <Button title="모달열기" onPress={toggleModal} />
        <Modal
          animationType="none"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modal}>
            {compartment.map((value, index) => (
              <Text key={index} style={getCongestionStyle(value)}>
                {getCongestionStatus(value)}
              </Text>
            ))}
            <Button title="모달닫기" onPress={toggleModal} />
          </View>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 300,
  },
  greenText: {
    color: "green",
    fontSize: 20,
  },
  blueText: {
    color: "blue",
    fontSize: 20,
  },
  redText: {
    color: "red",
    fontSize: 20,
  },
});

export { SubwayModal };
