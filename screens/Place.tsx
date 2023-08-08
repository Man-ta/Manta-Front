import { View, Text } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapModal } from "./modal/MapModal";

// 제공가능장소를 보여주는 컴포넌트
const Place = () => {

  const [apiResponse, setApiResponse] = useState(null);

  const handleApiCall = () => {

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://43.201.115.180:8085/place/data';
    const appKey = 'Glus98D8701NAVDh5d0iB7BRUTtA7NX77DbSioES';

    // API 호출
    axios.get(apiUrl, {
      headers: {
        appkey: 'Glus98D8701NAVDh5d0iB7BRUTtA7NX77DbSioES',
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
          제공 가능 장소
        </Text>
      </View>
    </>
  )
}

export { Place };