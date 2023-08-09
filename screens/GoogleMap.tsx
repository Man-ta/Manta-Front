import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { ActivityIndicator, StyleSheet, View } from "react-native";
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
  const [temp, setTemp] = useState('');
  const [loading, setLoading] = useState(true);  // 위치 정보를 렌더링하는 동안 로딩을 표시하기 위한 state

  useEffect(() => {
    (
      async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();  // 위치 정보 열람에 대한 권한을 받아와서 status에 저장
        console.log("승인 여부 : " + status);

        // 사용자의 위치 정보를 받아와서 state에 저장
        let userLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = userLocation.coords;
        dispatch(setLocation({ latitude, longitude }));

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
                  latitude: location.latitude,
                  longitude: location.longitude,
                  latitudeDelta: 0.006,
                  longitudeDelta: 0.006
                }
              }
              onRegionChange={onRegionChange}
            />
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
});