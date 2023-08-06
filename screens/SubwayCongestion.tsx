/* global Tmapv3 */
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
declare var Tmapv3: any;
const SubwayCongestion = () => {
  const [trainData, setTrainData] = useState("");
  const [compartment, setCompartment] = useState<number[]>([]);
  //tmap 가져오기
  const script = document.createElement("script");
  script.src =
    "https://apis.openapi.sk.com/tmap/vectorjs?version=1&appKey=GIus98D87O1NAVDh5d0iB7BRUTtA7NX77DbSioES";
  script.async = true;

  document.body.appendChild(script);
  document.body.appendChild(script);
  script.onload = () => {
    // 지도 초기화 로직
    let map;

    // Tmapv3.Map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
    map = new Tmapv3.Map("map_div", {
        center: new Tmapv3.LatLng(37.56520450, 126.98702028),
        width: "100%",   // 지도의 넓이
        height: "100px", // 지도의 높이
        zoom: 16         // 지도 줌레벨
    });
};

  useEffect(() => {
    fetchTrainData();
  }, [trainData]);

  const fetchTrainData = async () => {
    try {
      const appKey = "GIus98D87O1NAVDh5d0iB7BRUTtA7NX77DbSioES";
      const response = await fetch(
        "https://apis.openapi.sk.com/puzzle/subway/congestion/rltm/trains/2/2299",
        {
          headers: {
            appkey: appKey,
          },
        }
      );
      // console.log(response);
      const data = await response.json();
      setTrainData(data.data.congestionResult.congestionCar);
      splitDataToArray(trainData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //칸별 혼잡도를 담는 함수
  function splitDataToArray(trainData: string) {
    const data = trainData.split("|").map((item) => parseInt(item, 10));
    setCompartment(data);
  }

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
