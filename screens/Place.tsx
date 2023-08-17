import { View, Text } from "react-native";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { RootState, setPlacesList, setPoiIDList, setProvidedList } from "../store";

// 제공가능장소를 보여주는 컴포넌트
const Place = () => {

  const dispatch = useDispatch();

  const placesList = useSelector((state: RootState) => state.placesList);
  const poiIdList = useSelector((state: RootState) => state.poiIDList);

  const providedListApiCall = () => {
    const apiUrl = 'http://192.168.0.53:8085/place/data';
    const appKey = '7xa32VL7NWaSlgfIyRZvja44gs5Uijk36GPMXKy1';

    axios.get(apiUrl, {
      headers: {
        appkey: appKey,
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      dispatch(setProvidedList(response.data.contents)); 
      console.log(response);
    })
    .catch(error => {
      console.error('API 호출 에러:', error);
    });
  };

  useEffect(() => {
    const poiIdArray = placesList.map((item: { poiId: string; }) => ({ poiId: item.poiId }));
    dispatch(setProvidedList(poiIdArray));
  }, []);

  useEffect(() => {
    providedListApiCall();
  }, []);

  return (
    <>
      <View>
        <Text>
          제공 가능 장소: {poiIdList.join(', ')} 배열을 쉼표로 연결하여 출력
        </Text>
      </View>
    </>
  );
}

export { Place };
