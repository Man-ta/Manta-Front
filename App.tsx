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
import { PoiSearch } from './screens/PoiSearch';
import { Lost } from './screens/Lost';
import { TransitRoute } from './screens/TransitRoute';
import { NativeBaseProvider } from 'native-base';
import { Line4 } from './screens/SubWayLines/Line4'
import { Line3 } from './screens/SubWayLines/Line3';
import { Line1 } from './screens/SubWayLines/Line1';
import { Line6 } from './screens/SubWayLines/Line6';
import { Line7 } from './screens/SubWayLines/Line7';
import { Line8 } from './screens/SubWayLines/Line8';
import { Line_Arex } from './screens/SubWayLines/Line AREX';
import { Line_Gyeongchun } from './screens/SubWayLines/Line Gyeongchun ';
import Example from './screens/modal/LineModal';
import { Line2 } from './screens/SubWayLines/Line2';
import { Line5 } from './screens/SubWayLines/Line5';
import { Line9 } from './screens/SubWayLines/Line9';
import { Line_GyeonguiJungang } from './screens/SubWayLines/Line GyeonguiJungang';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // 컴포넌트 가장 바깥에서 Provider로 감싸주기
    <NativeBaseProvider>
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
          <Stack.Screen name="PoiSearch" component={PoiSearch} />
          <Stack.Screen name="Lost" component={Lost} />
          <Stack.Screen name="TransitRoute" component={TransitRoute} />
          <Stack.Screen name="Line1" component={Line1} />
          <Stack.Screen name="Line2" component={Line2} />
          <Stack.Screen name="Line3" component={Line3} />
          <Stack.Screen name="Line4" component={Line4} />
          <Stack.Screen name="Line5" component={Line5} />
          <Stack.Screen name="Line6" component={Line6} />
          <Stack.Screen name="Line7" component={Line7} />
          <Stack.Screen name="Line8" component={Line8} />
          <Stack.Screen name="Line9" component={Line9} />
          <Stack.Screen name="Line_Arex" component={Line_Arex} />
          <Stack.Screen name="Line_Gyeongchun" component={Line_Gyeongchun} />
          <Stack.Screen name="Line_GyeonguiJungang" component={Line_GyeonguiJungang} />

          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    </NativeBaseProvider>
  );
}