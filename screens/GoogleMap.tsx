import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { Alert, StyleSheet, View } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { setLocation } from "../store";

export default function GoogleMap() {

  // const [location, setLocation] = useState<any>('');

  const location = useSelector((state: RootState) => state.location);

  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text: any = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = { Latitude: location.coords.latitude, Longitude: location.coords.longitude };
    console.log(text)
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.44796396423006,
          longitude: 126.64947445180182,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
