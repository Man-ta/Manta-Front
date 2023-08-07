import { View, Text, StyleSheet, Image, Pressable, Modal } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapModal } from "./modal/MapModal";

// 실시간 장소혼잡도를 보여주는 컴포넌트
const MapCongestion = () => {

  const [apiResponse, setApiResponse] = useState(null);

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (CongestionResponseDto 객체와 유사한 형식으로 설정)
    const CongestionResponseDto = {
      poiId : '10067845'
    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.35.57:8085/place/congestion';
    const appKey = 'Glus98D8701NAVDh5d0iB7BRUTtA7NX77DbSioES';

    // API 호출
    axios.get(apiUrl, {
      params: CongestionResponseDto,
      headers: {
        appkey: 'Glus98D8701NAVDh5d0iB7BRUTtA7NX77DbSioES',
        'accept' : 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      // API 응답 결과를 상태에 저장
      setApiResponse(response.data);
      console.log(response.data);
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
    });
  };
  useEffect(() => {
    handleApiCall();
  }, []);

  // ----------------------------------------------------------------------------------------------------------------------------------------------

  const [explainVisible, setExplainVisible] = useState<boolean>(false);  // 혼잡 레벨에 대해 상세 설명이 있는 모달에 관한 on/off를 관리하는 state

  const toggleExplainModal = () => {
    setExplainVisible(!explainVisible);
  }

  return (
    <>
      <View style={styles.container}>

        <MapModal />

        {/* 우측 상단 물음표 아이콘 */}
        <Pressable onPress={toggleExplainModal} style={styles.questionButton}>
          <Image source={require('../assets/images/question-icon.png')} style={styles.questionIcon} />
        </Pressable>

        {/* 혼잡 레벨에 대해 상세 설명이 있는 모달 */}
        <Modal animationType="none" transparent={true} visible={explainVisible} onRequestClose={() => setExplainVisible(false)}>
          <View style={styles.explainContainer}>
            <View style={styles.explainView}>
              <Pressable onPress={toggleExplainModal} style={styles.closeButton}>
                <Image source={require('../assets/images/close-icon.png')} style={styles.closeIcon} />
              </Pressable>
              <Text style={styles.ex_levelOne}><Text style={{ color: '#C2F5EF', fontWeight: 'bold' }}>여유(1단계)</Text> : 전방의 시야가 트여있는 상태</Text>
              <Text style={styles.ex_levelTwo}><Text style={{ color: '#7BD1D1', fontWeight: 'bold' }}>보통(2단계)</Text> : 전방의 시야가 다소 막힌 상태</Text>
              <Text style={styles.ex_levelThree}><Text style={{ color: '#F5B06C', fontWeight: 'bold' }}>혼잡(3단계)</Text> : 지나가는 사람과 서로 부딪힐 수 있는 상태</Text>
              <Text style={styles.ex_levelFour}><Text style={{ color: '#D36E85', fontWeight: 'bold' }}>매우혼잡(4단계)</Text> : 매우 혼잡하여 불쾌할 수 있는 상태</Text>
              <Text style={styles.ex_congestion}>
                * 혼잡도는 특정 장소의 추정 방문자 수를 연면적('㎡')으로 나눈 값으로, 단위 면적('㎡')당 추정 방문자의 수를 의미합니다. {'\n'}
                직관적인 이해를 위해 수준을 총 4단계로 구분하여 제공합니다.
              </Text>
          </View>
          </View>
        </Modal>

        {/* 우측 하단 혼잡 레벨에 관한 모달 */}
        <View style={styles.infoView}>
          <Text style={styles.floatingPop}>유동인구</Text>
          <Text style={styles.info_levelOne}>여유</Text>
          <Text style={styles.info_levelTwo}>보통</Text>
          <Text style={styles.info_levelThree}>혼잡</Text>
          <Text style={styles.info_levelFour}>매우혼잡</Text>
        </View>

      </View>

    </>
  )
}

export { MapCongestion };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  questionButton: {
    position: 'absolute',
    top: 15,
    right: 14,
  },
  questionIcon: {
    width: 20,
    height: 20,
  },
  explainContainer: {
    flex: 1,
    alignItems: 'center',
    top: '37%'
  },
  closeButton: {
    position: 'absolute',
    top: 11,
    right: 11,
    zIndex: 1,
  },
  closeIcon: {
    width: 15,
    height: 15,
  },  
  explainView: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 340,
    height: 192,
    paddingTop: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#CBCBCB'
  },
  ex_levelOne: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
  },
  ex_levelTwo: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
  },
  ex_levelThree: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
  },
  ex_levelFour: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 10,
  },
  ex_congestion: {
    fontSize: 12,
    color: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
  },
  infoView: {
    position: 'absolute',
    width: 80,
    height: 161,
    bottom: 40,
    left: '72%',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#CBCBCB',
    backgroundColor: 'white',
    padding: 5,
  },
  floatingPop: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
  },
  info_levelOne: {
    fontSize: 14,
    backgroundColor: '#C2F5EF',
    marginTop: 13,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    overflow: 'hidden',
    textAlign: 'center',
  },
  info_levelTwo: {
    fontSize: 14,
    backgroundColor: '#7BD1D1',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    overflow: 'hidden',
    textAlign: 'center',
  },
  info_levelThree: {
    fontSize: 14,
    backgroundColor: '#F5B06C',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    overflow: 'hidden',
    textAlign: 'center',
  },
  info_levelFour: {
    fontSize: 14,
    backgroundColor: '#D36E85',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    overflow: 'hidden',
    textAlign: 'center',
  },
});