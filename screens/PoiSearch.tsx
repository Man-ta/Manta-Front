import { View, Text, ScrollView } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { RootState, setPoiList } from "../store";

// 장소 통합 검색을 보여주는 컴포넌트
const PoiSearch = () => {

  const dispatch = useDispatch();

  const [apiResponse, setApiResponse] = useState<any>('');
  const searchedName = useSelector((state: RootState) => state.searchedName);

  // const [poiList, setPoiList] = useState([]); // 상태 변수 추가
  const poiList = useSelector((state: RootState) => state.poiList);

  type Poi = {
    id: string,
    name: string,
    centerLat: string,
    centerLon: string,
    newAddressList: any
  }

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
      centerLat: '37.56648210',  // 중심 위도
      centerLon: '126.98502043',  // 중심 경도
      reqCoordType: 'WGS84GEO',
      resCoordType: 'WGS84GEO',
      radius : '1',
      page: '1',
      count: '20',
      multiPoint: 'Y', 
      poiGroupYn: 'N',
    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.10.80:8085/place/search';
    const appKey = 'FKk8erAcVB1Cnz7V5iH5zaddyWkGmrRv2tg9mfGJ';

    // API 호출
    axios.get(apiUrl, {
      params: PoiSearchDto,
      headers: {
        appkey: appKey,
        'accept' : 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      const pois = response.data.searchPoiInfo.pois.poi; // 호출한 api로부터 필요한 정보만 추출
      const extractedData = pois.map((poi: Poi) => ({
        id: poi.id,  // 장소 id
        name: poi.name,  // 장소 이름
        centerLat: poi.newAddressList.newAddress[0].centerLat,  // 위도
        centerLon: poi.newAddressList.newAddress[0].centerLon,  // 경도
      }));

      dispatch(setPoiList(extractedData)); // 추출한 데이터를 상태에 저장
    })
    .catch(error => {
      console.error('Ph API 호출 에러:', error);
    });
    console.log("장소 이름 : ", searchedName);
  };
  useEffect(() => {
    handleApiCall();
  }, []);
  
  console.log("_______________________________________________________-")

  return (
    <>

      <ScrollView>

      <View>
        <Text>
            장소 통합 검색
        </Text>
          {
            poiList.map((poi: Poi) => (
              <View key={poi.id}>
                <Text>장소 ID: {poi.id}</Text>
                <Text>이름: {poi.name}</Text>
                <Text>위도: {poi.centerLat}</Text>
                <Text>경도: {poi.centerLon}</Text>
              </View>
          ))
          }
        </View>
      </ScrollView>
    </>
  )
}

export { PoiSearch };