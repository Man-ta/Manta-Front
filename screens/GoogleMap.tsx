import React, { useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setLocation } from "../store";

export default function LocationExample() {

  const dispatch = useDispatch();

  const location = useSelector((state: RootState) => state.location);  // 사용자의 위치 정보를 저장하는 state
  const [mapRegion, setMapRegion] = useState({  // 사용자의 초기 위치 정보를 저장하는 state
    latitude: location.latitude,
    longitude: location.longitude,
  });
  const [loading, setLoading] = useState(true);  // 위치 정보를 렌더링하는 동안 로딩을 표시하기 위한 state

  const list = [
    { "poiId": "497342", "poiName": "인천국제공항제1여객터미널", "lat": "37.44929181", "lon": "126.45079466" },
    { "poiId": "5411247", "poiName": "스타필드 하남", "lat": "37.54557217", "lon": "127.22399927" }
  ];

  useEffect(() => {
    (
      async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();  // 위치 정보 열람에 대한 권한을 받아와서 status에 저장
        console.log("승인 여부 : " + status);

        // 사용자의 위치 정보를 받아와서 state에 저장
        let userLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = userLocation.coords;
        dispatch(setLocation({ latitude, longitude }));
        console.log(location);

        setLoading(false);  // 위치 정보를 받아왔으니 로딩 상태를 false로 변경

      })();
  }, []);



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
              onRegionChange={onRegionChange}
            >
              {/* {
                list.map(item => (
                  <Marker
                    key={item.poiId}
                    coordinate={{
                      latitude: parseFloat(item.lat), // 문자열을 숫자로 변환해야 합니다.
                      longitude: parseFloat(item.lon), // 문자열을 숫자로 변환해야 합니다.
                    }}
                    title={item.poiName}
                  >
                    <View style={styles.balloonContainer}>
                      <View style={styles.balloon}>
                        <Text style={styles.ballon_levelThree}>혼잡</Text>
                        <Text style={styles.ballonText}>{item.poiName}</Text>
                      </View>
                      <View style={styles.arrow} />
                    </View>
                  </Marker>
                ))} */}
            </MapView>
          )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  aa: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
  },
  molla: {
    width: 200,
    height: 200,
    backgroundColor: 'red'
  },
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