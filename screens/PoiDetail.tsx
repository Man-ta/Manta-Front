import { View, Text } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { RootState, setPlacesList } from "../store";

// 명칭 상세 정보 검색을 보여주는 컴포넌트
const PoiDetail = () => {

  const [apiResponse, setApiResponse] = useState(null);
  const placesList = useSelector((state: RootState) => state.placesList);

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (PoiSearchDto 객체와 유사한 형식으로 설정)
    const PoiDetailDto = {
      poiInfo:'1128603',
      version : '1',
      findOption: 'id',
      resCoordType: 'WGS84GEO'
    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.10.80:8085/place/detail';
    const appKey = 'OVBKI4CwsKaddtucxy7kE1i95vPgNrFc5OjLxED4';

    // API 호출
    axios.get(apiUrl, {
      params: PoiDetailDto,
      headers: {
        appkey: appKey,
        'accept' : 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      // API 응답 결과를 상태에 저장
      
      setApiResponse(response.data);
      console.log("PoiDetail 아이디 ---> ", JSON.stringify(response.data.poiDetailInfo.id));
      console.log("PoiDetail 이름 ---> ", JSON.stringify(response.data.poiDetailInfo.name));
      console.log("PoiDetail lat ---> ", JSON.stringify(response.data.poiDetailInfo.lat));
      console.log("PoiDetail lot ---> ", JSON.stringify(response.data.poiDetailInfo.lon));
      console.log("--------------------------------------------------------------------------")
    })
    .catch(error => {
      console.error('PoiDetail API 호출 에러:', error);
    });
  };
  useEffect(() => {
    handleApiCall();
  }, []);
  

  return (
    <>
      <View>
        <Text>
        명칭 상세 정보 검색
        </Text>
      
      </View>
    </>
  )
}

export { PoiDetail };