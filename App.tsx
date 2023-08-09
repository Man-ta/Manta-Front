import { Provider } from "react-redux";
import store from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./screens/Home";
import React from "react";
import { Place } from "./screens/Place";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { NativeBaseProvider } from "native-base";
import LostItem from "./screens/LostItem";
import { SafeAreaView, StatusBar } from "react-native";
import { MapCongestion } from "./screens/MapCongestion";
import { SubwayCongestion } from "./screens/SubwayCongestion";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // 컴포넌트 가장 바깥에서 Provider로 감싸주기
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <NativeBaseProvider>
            <Tab.Navigator>
              <Tab.Screen
                name="Home"
                component={Home}
                options={{
                  headerShown: false,
                  title: "홈",
                  tabBarIcon: ({ size, focused }) => (
                    <Image
                      style={{ width: size, height: size }}
                      source={
                        focused
                          ? require("./assets/bottom-tabs-icon/home_icon_on.png")
                          : require("./assets/bottom-tabs-icon/home_icon_off.png")
                      }
                    />
                  ),
                }}
              />

              <Tab.Screen
                name="LostItem"
                component={LostItem}
                options={{
                  headerShown: false,
                  title: "분실물 찾기",
                  tabBarIcon: ({ size, focused }) => (
                    <Image
                      style={{ width: size, height: size }}
                      source={
                        focused
                          ? require("./assets/bottom-tabs-icon/lost_icon_on.png")
                          : require("./assets/bottom-tabs-icon/lost_icon_off.png")
                      }
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="Place"
                component={Place}
                options={{
                  headerShown: false,
                  title: "길찾기",
                  tabBarIcon: ({ size }) => (
                    <Image
                      style={{ width: size, height: size }}
                      source={require("./assets/bottom-tabs-icon/MainLogo3.png")}
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="MapCongestion"
                component={MapCongestion}
                options={{
                  headerShown: false,
                  title: "장소혼잡도",
                  tabBarIcon: ({ size, focused }) => (
                    <Image
                      style={{ width: size, height: size }}
                      source={
                        focused
                          ? require("./assets/bottom-tabs-icon/local_icon_on.png")
                          : require("./assets/bottom-tabs-icon/local_icon_off.png")
                      }
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="SubwayCongestion"
                component={SubwayCongestion}
                options={{
                  headerShown: false,
                  title: "역별 혼잡도",
                  tabBarIcon: ({ size, focused }) => (
                    <Image
                      style={{ width: size, height: size }}
                      source={
                        focused
                          ? require("./assets/bottom-tabs-icon/station_icon_on.png")
                          : require("./assets/bottom-tabs-icon/station_icon_off.png")
                      }
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </NativeBaseProvider>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}
