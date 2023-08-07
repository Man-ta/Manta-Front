import { View, Text, StyleSheet, Image } from "react-native"
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

  return (
    <>
      <View style={styles.container}>
        <Text>
          실시간 장소 혼잡도
        </Text>
        {/* <MapModal /> */}

        <View style={styles.explainContainer}>
          <View style={styles.explainView}>
            <Text style={styles.ex_congestion}>
              * 혼잡도는 특정 장소의 추정 방문자 수를 연면적('㎡')으로 나눈 값으로, 단위 면적('㎡')당 추정 방문자의 수를 의미합니다. {'\n'}
              직관적인 이해를 위해 수준을 총 4단계로 구분하여 제공합니다.
            </Text>
            <Text style={styles.ex_levelOne}><Text style={{ color: '#C2F5EF', fontWeight: 'bold' }}>여유(1단계)</Text> : 전방 시야가 탁 트인 상태</Text>
            <Text style={styles.ex_levelTwo}><Text style={{ color: '#7BD1D1', fontWeight: 'bold' }}>보통(2단계)</Text> : 전방 시야가 다소 막힌 상태</Text>
            <Text style={styles.ex_levelThree}><Text style={{ color: '#F5B06C', fontWeight: 'bold' }}>혼잡(3단계)</Text> : 지나가는 사람과 서로 부딪힐 수 있는 상태</Text>
            <Text style={styles.ex_levelFour}><Text style={{ color: '#D36E85', fontWeight: 'bold' }}>매우혼잡(4단계)</Text> : 매우 혼잡하여 불쾌할 수 있는 상태</Text>
          </View>
        </View>

        <Image source={require('../assets/images/question-icon.png')} style={styles.questionIcon} />
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
  questionIcon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 15,
    right: 14,
  },
  explainContainer: {
    flex: 1,
    alignItems: 'center',
    top: '35%'
  },
  explainView: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 320,
    height: 177,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ACACAC'
  },
  ex_congestion: {
    fontSize: 12,
    color: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
  },
  ex_levelOne: {
    marginTop: 10,
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
  },
  infoView: {
    position: 'absolute',
    width: 80,
    height: 167,
    bottom: 40,
    left: '72%',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#ACACAC',
    backgroundColor: 'white',
    padding: 5,
  },
  floatingPop: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
  info_levelOne: {
    fontSize: 15,
    backgroundColor: '#C2F5EF',
    marginTop: 13,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    overflow: 'hidden',
    textAlign: 'center',
  },
  info_levelTwo: {
    fontSize: 15,
    backgroundColor: '#7BD1D1',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    overflow: 'hidden',
    textAlign: 'center',
  },
  info_levelThree: {
    fontSize: 15,
    backgroundColor: '#F5B06C',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    overflow: 'hidden',
    textAlign: 'center',
  },
  info_levelFour: {
    fontSize: 15,
    backgroundColor: '#D36E85',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'black',
    overflow: 'hidden',
    textAlign: 'center',
  },
});