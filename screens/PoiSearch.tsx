import { View, Text } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";

// 장소 통합 검색을 보여주는 컴포넌트
const PoiSearch = () => {

  const dispatch = useDispatch();

  const [apiResponse, setApiResponse] = useState(null);
  const searchedName = useSelector((state: RootState) => state.searchedName);

  // 한글을 URL 인코딩하는 함수
  const encodeKorean = (text: string) => {
    return encodeURIComponent(text);
  };

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (PoiSearchDto 객체와 유사한 형식으로 설정)
    const PoiSearchDto = {
      version : '1',
      searchKeyword: encodeKorean(searchedName),  // TextInput에서 입력한 값을 파라미터로 이용
      searchType: 'all',
      areaLLCode:'11',
      searchtypCd: 'A',  
      centerLat: '37.56648210',
      centerLon: '126.98502043',
      reqCoordType: 'WGS84GEO',
      resCoordType: 'WGS84GEO',
      radius : '1',
      page: '1',
      count: '20',
      multiPoint : 'N',
      poiGroupYn: 'N',
    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.10.80:8085/place/search';
    const appKey = '2g1pkfbjAB3LXPV8ymxV87iexe1q2KZbzmqgnbIf';

    // API 호출
    axios.get(apiUrl, {
      params: PoiSearchDto,
      headers: {
        appkey: '2g1pkfbjAB3LXPV8ymxV87iexe1q2KZbzmqgnbIf',
        'accept' : 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      // API 응답 결과를 상태에 저장
      setApiResponse(response.data);
      console.log(JSON.stringify(response.data))
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
    });
    console.log("장소 이름 : ", searchedName);
  };
  useEffect(() => {
    handleApiCall();
  }, []);
  

  return (
    <>
      <View>
        <Text>
        장소 통합 검색
        </Text>
      
      </View>
    </>
  )
}

export { PoiSearch };