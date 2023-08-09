import { View, Text } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 분실물을 보여주는 컴포넌트
const Lost = () => {

  const [apiResponse, setApiResponse] = useState(null);

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (LostDto 객체와 유사한 형식으로 설정)
    const LostDto = {
      //http://openapi.seoul.go.kr:8088/(인증키)/xml/lostArticleInfo/1/5/
      key : '65424667746d696e35395951787263',
      type: 'json',
      service: 'CardSubwayStatsNew',
      start_Index:'1',
      end_Index: '5',
      date: '20230805'

    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.45.29:8085/place/lost';

    // API 호출
    axios.get(apiUrl, {
      params: LostDto,
    })
    .then(response => {
      // API 응답 결과를 상태에 저장
      setApiResponse(response.data);
      console.log(JSON.stringify(response.data));
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
        분실물
        </Text>
      
      </View>
    </>
  )
}

export { Lost };