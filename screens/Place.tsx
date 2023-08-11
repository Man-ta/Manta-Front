import { View, Text } from "react-native";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { RootState, setPlacesList, setPoiIdList, setProvidedList } from "../store";

// 제공가능장소를 보여주는 컴포넌트
const Place = () => {

  const dispatch = useDispatch();

  const [apiResponse, setApiResponse] = useState('');
  const placesList = useSelector((state: RootState) => state.placesList);
  const poiIdList = useSelector((state: RootState) => state.poiIdList);
  const providedList = useSelector((state: RootState) => state.providedList);
  const [count, setCount] = useState();

  const handleApiCall = () => {
    const apiUrl = 'http://192.168.10.80:8085/place/data';
    const appKey = 'GIus98D87O1NAVDh5d0iB7BRUTtA7NX77DbSioES';

    axios.get(apiUrl, {
      headers: {
        appkey: 'GIus98D87O1NAVDh5d0iB7BRUTtA7NX77DbSioES',
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      setApiResponse(JSON.stringify(response.data.contents)); 
      dispatch(setProvidedList(response.data.contents)); 
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
    handleApiCall();
  }, []);

  // console.log(poiIdList)
  console.log(providedList);

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
