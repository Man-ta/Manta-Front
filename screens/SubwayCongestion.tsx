import { View, Text } from "react-native";
import { SubwayModal } from "./modal/SubwayModal";
import { SubwayDetail } from "./modal/SubwayDetail";
import React, { useState, useEffect } from "react";
import axios from "axios";

// 첫 화면 지하철 노선도 불러오기
// 역 검색
// 역 검색 후 역의 모든 노선 불러오기
//  (2) 역 코드를 이용하여 역의 모든 노선을 받아옴
// (3) 역의 모든 노선을 이용하여 열차의 혼잡도를 받아옴
// (4) 열차의 혼잡도를 이용하여 열차의 각 칸의 혼잡도를 받아옴
// (5) 열차의 각 칸의 혼잡도를 이용하여 열차의 각 칸의 혼잡도에 대한 정보를 보여줄 팝업창을 띄움

// 지하철의 모든 노선을 보여주는 컴포넌트
const SubwayCongestion = () => {
  const [trainData, setTrainData] = useState("");
  const [compartment, setCompartment] = useState<number[]>([]);

  //현재 시각 가져오기
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const APP_KEY = process.env.REACT_APP_SK_API_KEY;
  // 열차의 혼잡도를 sk open ai에서 가져오는 함수
  const fetchTrainData = async () => {
    try {
      const appKey = APP_KEY;
      const response = await axios.get("https://apis.openapi.sk.com/puzzle/subway/congestion/stat/car/stations/133?dow=TUE&hh=24", {
        headers: {
          'appkey': appKey
        }
      }).then(response => {
        // API 응답 결과를 상태에 저장
        console.log(response.data);
      })
      .catch(error => {
        console.error('API 호출 에러:', error);
      });


      
      // 상행과 하행을 분리하여 저장할 배열을 선언
      let upTrain = [];
      let downTrain = [];

      // 모든 열차 데이터에 대해 반복
      // for(let train of data.contents) {
      //   // 상행인 경우
      //   if(train.stat.updnLine === 0) {
      //     upTrain.push(train);
      //   }
      //   // 하행인 경우
      //   else if(train.stat.updnLine === 1) {
      //     downTrain.push(train);
      //   }
      // }

      // // 가장 먼저 도착하는 열차 출력
      // console.log("상행 첫 번째 열차:", upTrain[0]);
      // console.log("하행 첫 번째 열차:", downTrain[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //칸별 혼잡도를 담는 함수
  function splitDataToArray(trainData: string) {
    const data = trainData.split("|").map((item) => parseInt(item, 10));
    setCompartment(data);
  }
  // useEffect(() => {
  //   fetchTrainData();
  // }, [trainData]);
  // fetchStationData();
  return (
    <>
      <View>
        <View id="map_div"></View>
        <Text>지하철 혼잡도</Text>
        <SubwayModal compartment={compartment} />
        <SubwayDetail />
      </View>
    </>
  );
};

export { SubwayCongestion };