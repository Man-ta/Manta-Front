import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screen/Home';
import { MapCongestion } from './screen/MapCongestion';
import { SubwayCongestion } from './screen/SubwayCongestion';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // 컴포넌트 가장 바깥에서 Provider로 감싸주기
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MapCongestion" component={MapCongestion} />
          <Stack.Screen name="SubwayCongestion" component={SubwayCongestion} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}