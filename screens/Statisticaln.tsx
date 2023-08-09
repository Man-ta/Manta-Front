import { View, Text } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Statisticaln = () => {

  const [apiResponse, setApiResponse] = useState(null);

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (CongestionResponseDto 객체와 유사한 형식으로 설정)
    const CongestionResponseDto = {
      poiId : '10067845'
    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.10.80:8085/place/Statistical';
    const appKey = '2g1pkfbjAB3LXPV8ymxV87iexe1q2KZbzmqgnbIf';

    // API 호출
    axios.get(apiUrl, {
      params: CongestionResponseDto,
      headers: {
        appkey: '2g1pkfbjAB3LXPV8ymxV87iexe1q2KZbzmqgnbIf',
        'accept' : 'application/json',
        'Content-Type': 'application/json',

      },
    })
    .then(response => {
      // API 응답 결과를 상태에 저장
      setApiResponse(response.data);
      console.log(response.data)
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
          통계성 혼잡도
        </Text>
      </View>
    </>
  )
}

export { Statisticaln };