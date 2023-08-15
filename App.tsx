import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { MapCongestion} from './screens/MapCongestion';
import { SubwayCongestion } from './screens/SubwayCongestion';
import { Place } from './screens/Place';
import { HourlyPlace } from './screens/HourlyPlace';
import { Statisticaln } from './screens/Statisticaln';
import { VisitorCount } from './screens/VisitorCount';
import React from 'react';
// import { PoiSearch } from './screens/PoiSearch';
import { Lost } from './screens/Lost';
import { TransitRoute } from './screens/TransitRoute';
import { PoiDetail } from './screens/PoiDetail';


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
          <Stack.Screen name="Place" component={Place} />
          <Stack.Screen name="HourlyPlace" component={HourlyPlace} />
          <Stack.Screen name="Statisticaln" component={Statisticaln} />
          <Stack.Screen name="VisitorCount" component={VisitorCount} />
          {/* <Stack.Screen name="PoiSearch" component={PoiSearch} /> */}
          <Stack.Screen name="Lost" component={Lost} />
          <Stack.Screen name="TransitRoute" component={TransitRoute} />
          <Stack.Screen name="PoiDetail" component={PoiDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}