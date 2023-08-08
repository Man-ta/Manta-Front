import { View, Text } from "react-native";
import { SubwayModal } from "./modal/SubwayModal";
import { SubwayDetail } from "./modal/SubwayDetail";
import React, { useState, useEffect } from "react";
import { XMLParser } from "fast-xml-parser";
import axios from "axios";

// 첫 화면 지하철 노선도 불러오기
// 역 검색
// 역 검색 후 역의 모든 노선 불러오기
//  (2) 역 코드를 이용하여 역의 모든 노선을 받아옴
// (3) 역의 모든 노선을 이용하여 열차의 혼잡도를 받아옴
// (4) 열차의 혼잡도를 이용하여 열차의 각 칸의 혼잡도를 받아옴
// (5) 열차의 각 칸의 혼잡도를 이용하여 열차의 각 칸의 혼잡도에 대한 정보를 보여줄 팝업창을 띄움

// 지하철의 모든 노선을 보여주는 컴포넌트
declare var Tmapv3: any;
const SubwayCongestion = () => {
  const [trainData, setTrainData] = useState("");
  const [compartment, setCompartment] = useState<number[]>([]);
  //tmap 가져오기
  const APP_KEY = "4b744f596a68617935346d58766468";

  //현재 시각 가져오기
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
 

  // 검색역에 들어오고 있는 열차 번호를 서울공공데이터에서 가져오는 함수
  const fetchStationData = async () => {
    try {
      const xhr = new XMLHttpRequest();
      var url = `http://swopenapi.seoul.go.kr/api/subway/${APP_KEY}/xml/realtimeStationArrival/0/5/서울`; /* URL */
      xhr.open("GET", url);
      xhr.onreadystatechange = function () {
        if (this.readyState == xhr.DONE) {
          if (xhr.status == 200 || xhr.status == 201) {
            let parser = new XMLParser();
            let xmlDoc = parser.parse(this.responseText);
            let trains = xmlDoc.realtimeStationArrival.row;
            let closestTrain = trains[0]; // 첫 번째 열차로 가장 가까운 열차 초기화
            for (let train of trains) {
              if (train.statnNm === "서울") {
                // 서울역에 도착하는 모든 열차
                if (parseInt(train.barvlDt) < parseInt(closestTrain.barvlDt)) {
                  // 현재 열차가 가장 가까운 열차보다 더 가깝다면
                  closestTrain = train; // 가장 가까운 열차 업데이트
                }
              }
            }
            console.log("가장 먼저 도착예정인 열차: ", closestTrain.btrainNo); // 가장 먼저 도착 예정인 열차번호 출력
          }
        }
      };
      xhr.send("");
    } catch (error) {
      console.log(error);
    }
  };

  // 열차의 혼잡도를 sk open ai에서 가져오는 함수
  const fetchTrainData = async () => {
    try {
      const appKey = "GIus98D87O1NAVDh5d0iB7BRUTtA7NX77DbSioES";
      const response = await fetch(
        "https://apis.openapi.sk.com/puzzle/subway/congestion/stat/car/stations/133?dow=TUE&hh=24",
        {
          headers: {
            appkey: appKey,
          },
        }
      );
      const data = await response.json();
      console.log("출력값", data);
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
