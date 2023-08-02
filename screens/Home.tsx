import { View, Text, StatusBar, StyleSheet, Button } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

// 홈 화면
const Home = ({ navigation } : {navigation : any}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>홈 화면임</Text>
        <StatusBar />
        <Button title="장소 혼잡도 고" onPress={() => navigation.navigate('MapCongestion')} />
        <Button title="지하철 혼잡도 고" onPress={() => navigation.navigate('SubwayCongestion')} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Home };