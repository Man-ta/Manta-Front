import { View, Text } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Statisticaln = () => {

  const [apiResponse, setApiResponse] = useState([]);
  const startDate = useSelector((state:RootState) => state.startDate);
  const lastDate = useSelector((state: RootState) => state.lastDate);


  const statsCongestionApiCall = () => {
    // API 호출을 위한 파라미터 설정 (CongestionResponseDto 객체와 유사한 형식으로 설정)
    const CongestionResponseDto = {
      poiId : '10067845'
    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.10.80:8085/place/Statistical';
    const appKey = '031A3Rm7wp6ijdD8NMt877XuNFhkT7v62km8Jdk7';
    // const apiUrl = 'http://192.168.45.29:8085/place/Statistical';
    // const appKey = 'Glus98D8701NAVDh5d0iB7BRUTtA7NX77DbSioES';

    // API 호출
    axios.get(apiUrl, {
      params: CongestionResponseDto,
      headers: {
        appkey: appKey,
        'accept' : 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      // API 응답 결과를 상태에 저장
      setApiResponse(response.data.contents.stat);
      // console.log("시작날: ", JSON.stringify(response.data.contents.statStartDate))
      // console.log("마지막날: ", JSON.stringify(response.data.contents.statEndDate))
    })
    .catch(error => {
      console.error('통계성 혼잡도 API 호출 에러:', error);
    });
  };
  useEffect(() => {
    statsCongestionApiCall();    
  }, []);




  type x = {
    dow: string,
    hh : string,
    congestionLevel: number
  }

  let temp : any[] = []
  temp = apiResponse.map((item : x) => ({
    dotw : item.dow,
    hh : item.hh,
    congestionLevel: item.congestionLevel,
  }))


  let mon_temp = 0;
  for(let i=0; i<temp.length; i++) {
    if(temp[i].dotw === 'MON') {
      // console.log(i, "시의 혼잡도 레벨", temp[i].congestionLevel)
      mon_temp += temp[i].congestionLevel;
    }
  }
  
  const mon_congestionLvAvg = mon_temp / 24;
  
  console.log("총합 : ", mon_temp)
  console.log("평균 : ", mon_congestionLvAvg);

  console.log("temp : ", temp);

  console.log(apiResponse);
  console.log("temp : ", temp)

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