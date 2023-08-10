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
        <Button title="실시간 혼잡도 고" onPress={() => navigation.navigate('HourlyPlace')} />
        <Button title="제공가능장소 고" onPress={() => navigation.navigate('Place')} />
        <Button title="통계성 혼잡도 고" onPress={() => navigation.navigate('Statisticaln')} />
        <Button title="일자별 추정 방문자수 고" onPress={() => navigation.navigate('VisitorCount')} />
        <Button title="대중교통 경로 고" onPress={() => navigation.navigate('TransitRoute')} />
        <Button title="검색 고" onPress={() => navigation.navigate('PoiSearch')} />
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