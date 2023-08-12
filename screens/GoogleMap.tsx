import React, { useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { ActivityIndicator, StyleSheet, View, Text, ToastAndroid } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setPoiList } from "../store";
import { setLocation } from "../store";
import axios from "axios";

export default function LocationExample() {

  const dispatch = useDispatch();

  const location = useSelector((state: RootState) => state.location);  // 사용자의 위치 정보를 저장하는 state
  const [mapRegion, setMapRegion] = useState({  // 사용자의 초기 위치 정보를 저장하는 state
    latitude: location.latitude,
    longitude: location.longitude,
  });
  const [loading, setLoading] = useState(true);  // 위치 정보를 렌더링하는 동안 로딩을 표시하기 위한 state
  const poiList = useSelector((state: RootState) => state.poiList);  // 장소의 id, 이름, 좌표를 관리하는 state
  const searchedName = useSelector((state: RootState) => state.searchedName);  // 검색창에 입력된 값

  type Poi = {
    id: string,
    name: string,
    centerLat: string,
    centerLon: string,
    newAddressList: any
  }

  const encodeKorean = (text: string) => {
    return encodeURIComponent(text);
  };

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (PoiSearchDto 객체와 유사한 형식으로 설정)
    const PoiSearchDto = {
      version: '1',
      searchKeyword: encodeKorean(searchedName),  // TextInput에서 입력한 값을 파라미터로 이용
      searchType: 'all',
      areaLLCode: '11',
      searchtypCd: 'A',
      centerLat: '37.56648210',  // 중심 위도
      centerLon: '126.98502043',  // 중심 경도
      reqCoordType: 'WGS84GEO',
      resCoordType: 'WGS84GEO',
      radius: '1',
      page: '1',
      count: '10',
      multiPoint: 'Y',
      poiGroupYn: 'N',
    };

    // API 호출 URL과 API 키 설정 (실제 값으로 수정)
    const apiUrl = 'http://192.168.10.80:8085/place/search';
    const appKey = 'GIus98D87O1NAVDh5d0iB7BRUTtA7NX77DbSioES';

    // API 호출
    axios.get(apiUrl, {
      params: PoiSearchDto,
      headers: {
        appkey: appKey,
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log("값 : ", response.data)
        const pois = response.data.searchPoiInfo.pois.poi; // 호출한 api로부터 필요한 정보만 추출
        const extractedData = pois.map((item: Poi) => ({
          id: item.id,  // 장소 id
          name: item.name,  // 장소 이름
          centerLat: item.newAddressList.newAddress[0].centerLat,  // 위도
          centerLon: item.newAddressList.newAddress[0].centerLon,  // 경도
        }));

        dispatch(setPoiList(extractedData)); // 추출한 데이터를 상태에 저장
      })
      .catch(error => {
        console.error('PoiSearch API 호출 에러:', error);
      });
    console.log("장소 이름 : ", searchedName);
  };

  useEffect(() => {

    handleApiCall();  

    (
      async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();  // 위치 정보 열람에 대한 권한을 받아와서 status에 저장
        console.log("승인 여부 : ", status);

        // 사용자의 위치 정보를 받아와서 state에 저장
        let userLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = userLocation.coords;
        setMapRegion({
          latitude: latitude,
          longitude: longitude
        })
        setLoading(false);  // 위치 정보를 받아왔으니 로딩 상태를 false로 변경
      })();
  }, [searchedName]);

  const onRegionChange = (region: any) => {
    // setLocation({"latitude": region.latitude, "longitude": region.longitude});
    // console.log(region.latitude + " + " + region.longitude);
  }

  // console.log(location);
  // console.log(temp);

  return (
    <View style={styles.container}>
      {
        loading ? (
          <ActivityIndicator style={styles.activityIndicator} />
        ) :
          (
            <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              region={
                {
                  latitude: mapRegion.latitude,
                  longitude: mapRegion.longitude,
                  latitudeDelta: 0.006,
                  longitudeDelta: 0.006
                }
              }
            // onRegionChange={onRegionChange}
            >
              {
                poiList.map((item: Poi) => (
                  <Marker
                    key={item.id}
                    coordinate={{
                      latitude: parseFloat(item.centerLat), // 문자열을 숫자로 변환해야 합니다.
                      longitude: parseFloat(item.centerLon), // 문자열을 숫자로 변환해야 합니다.
                    }}
                    // title={item.name}
                  >
                    <View style={styles.balloonContainer}>
                      <View style={styles.balloon}>
                        <Text style={styles.ballon_levelThree}>혼잡</Text>
                        <Text style={styles.ballonText}>{item.name}</Text>
                      </View>
                      <View style={styles.arrow} />
                    </View>
                  </Marker>
                ))}

            </MapView>

          )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: "100%",
    height: "100%",
  },
  balloonContainer: {
    position: "absolute",
    alignItems: "center",
  },
  balloon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "white",
    opacity: 0.95,
    height: 40,
    padding: 10,
    paddingRight: 14,
    borderRadius: 10,
  },
  ballon_levelOne: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#ACF1E9',
    height: 24,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ACF1E9',
    overflow: 'hidden',
    textAlign: 'center',
  },
  ballon_levelTwo: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#54B2B2',
    height: 24,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#54B2B2',
    overflow: 'hidden',
    textAlign: 'center',
  },
  ballon_levelThree: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#F39C46',
    height: 24,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F39C46',
    overflow: 'hidden',
    textAlign: 'center',
  },
  ballon_levelFour: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#D36E85',
    height: 24,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#D36E85',
    overflow: 'hidden',
    textAlign: 'center',
  },
  ballonText: {
    fontSize: 15,
    left: 5,
  },
  arrow: {
    opacity: 0.95,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 18,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "white",
  },
});