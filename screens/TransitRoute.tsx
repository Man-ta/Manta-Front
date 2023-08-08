import { View, Text } from "react-native"
import { SubwayModal } from "./modal/SubwayModal";
import { SubwayDetail } from "./modal/SubwayDetail";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransitRoute = () => {

  const [apiResponse, setApiResponse] = useState(null);
  const [congestionData, setCongestionData] = useState([]);

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (TrainResponseDto 객체와 유사한 형식으로 설정)
    
    axios({
      method: 'POST',
      url: 'http://192.168.35.57:8085/transit/route',
      data: {
        startX: "127.02550910860451",
        startY: "37.63788539420793",
        endX: "127.030406594109",
        endY: "37.609094989686",
        searchDttm: "202308081750"
      },
      headers: { 
                  'Content-Type': 'application/json'
                }
    }).then(function (response) { //post 성공 시
              console.log("Heade With Authentication :" + response)
              console.log(response.data)
              setApiResponse(response.data);
            }
    )

}
  useEffect(() => {
    handleApiCall();
  }, []);


  return (
    <>
      <View>
        <Text>
          대중교통 경로 고
        </Text>
        <SubwayModal />
        <SubwayDetail />
      </View>
    </>
  )
}

export { TransitRoute };