import { View, Text } from "react-native"
import { SubwayModal } from "./modal/SubwayModal";
import { SubwayDetail } from "./modal/SubwayDetail";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 지하철의 모든 노선을 보여주는 컴포넌트
const SubwayCongestion = () => {

  const [apiResponse, setApiResponse] = useState(null);

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (TrainResponseDto 객체와 유사한 형식으로 설정)
    const trainResponseDto = {
      stationCode : '120',
      dow: 'TUE',
      hh: '10',
    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.0.115:8085/trains/congestion';
    const appKey = 'Glus98D8701NAVDh5d0iB7BRUTtA7NX77DbSioES';

    // API 호출
    axios.get(apiUrl, {
      params: trainResponseDto,
      headers: {
        appkey: 'Glus98D8701NAVDh5d0iB7BRUTtA7NX77DbSioES',
        'accept' : 'application/json',
        'Content-Type': 'application/json',

      },
    })
    .then(response => {
      // API 응답 결과를 상태에 저장
      setApiResponse(response.data);
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