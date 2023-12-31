import { View, Text } from "react-native"
import { SubwayModal } from "./modal/SubwayModal";
import { SubwayDetail } from "./modal/SubwayDetail";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 사용자가 조회한 장소의 시간대별 혼잡도를 제공 컴포넌트
const HourlyPlace = () => {

  const [apiResponse, setApiResponse] = useState(null);

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (HourlyPlaceReponseDto 객체와 유사한 형식으로 설정)
    const HourlyPlaceReponseDto = {
      poiId : '10067845',
      date: '20230815'
    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.0.53:8085/place/hourly';
    const appKey = 'OVBKI4CwsKaddtucxy7kE1i95vPgNrFc5OjLxED4';

    // API 호출
    axios.get(apiUrl, {
      params: HourlyPlaceReponseDto,
      headers: {
        appkey: appKey,
        'accept' : 'application/json',
        'Content-Type': 'application/json',

      },
    })
    .then(response => {
      // API 응답 결과를 상태에 저장
      setApiResponse(response.data);
      console.log(JSON.stringify(response.data));
    })
    .catch(error => {
      // console.error('실시간 정보 API 호출 에러:', error);
    });
  };
  useEffect(() => {
    handleApiCall();
  }, []);
  

  return (
    <>
      <View>
        <Text>
        HourlyPlace
        </Text>
      </View>
    </>
  )
}

export { HourlyPlace };