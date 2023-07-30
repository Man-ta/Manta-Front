import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ReduxEX } from './ReduxEX';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    // 컴포넌트 가장 바깥에서 Provider로 감싸주기
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <ReduxEX></ReduxEX>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
