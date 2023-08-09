import { View, Text } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapModal } from "./modal/MapModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setPlacesList } from "../store";


// 제공가능장소를 보여주는 컴포넌트
const Place = () => {

  const dispatch = useDispatch();

  const [apiResponse, setApiResponse] = useState([[]]);
  const placesList = useSelector((state: RootState) => state.placesList);

  const handleApiCall = () => {

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.10.80:8085/place/data';
    // const apiUrl = 'http://192.168.45.29:8085/place/data';
    const appKey = '2g1pkfbjAB3LXPV8ymxV87iexe1q2KZbzmqgnbIf';

    // API 호출
    axios.get(apiUrl, {
      headers: {
        appkey: '2g1pkfbjAB3LXPV8ymxV87iexe1q2KZbzmqgnbIf',
        'accept' : 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      // API 응답 결과를 상태에 저장
      setApiResponse(response.data);
      dispatch(setPlacesList(response.data));
      console.log(JSON.stringify(response.data))
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
    });
  };

  useEffect(() => {
    handleApiCall();
  }, []);

  // console.log(apiResponse[1]);
  console.log(typeof placesList)

  console.log("------------------------------------------------------------------------------------")
  

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