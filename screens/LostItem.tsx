import React, { useState } from "react";
import {
  extendTheme,
  View,
  Box,
  Text,
  Heading,
  NativeBaseProvider,
  Select,
  VStack,
  HStack,
  ScrollView,
  Pressable,
  Center,
  Flex,
  Image,
} from "native-base";

const newColorTheme = {
  brand: {
    900: "#a5f3fc",
  },
};
const theme = extendTheme({ colors: newColorTheme });

interface LostItemProps {
  station: string;
  item: string;
  date: string;
}

const LostItem = ({ station, item, date }: LostItemProps) => (
  <Pressable
    rounded="8"
    overflow="hidden"
    borderWidth="1"
    borderColor="coolGray.300"
    w="320"
    h=" 150"
    shadow="1"
    bg="white"
    my={4}
    p="3">
    <HStack justifyContent="space-between" alignItems="center" space={3}>
      <Box>
        <Text
          mt="3"
          fontWeight="medium"
          fontSize="md"
          color="lightBlue.900"
          bold>
          {station}
        </Text>
        <Text mt="2" fontSize="sm" color="coolGray.700">
          {item}
        </Text>
        <Text mt="2" fontSize="sm" bold color="lightBlue.700">
          {date}
        </Text>
      </Box>
    </HStack>
  </Pressable>
);

const HourlyPlace: React.FC = () => {
  const [selectItem, setSelectItem] = useState("버스");
  const [selectPlace, setSelectPlace] = useState("2023-07-02");

  const items = ["버스", "지하철", "택시"];
  const places = ["날짜가져와라~"];

  return (
    <NativeBaseProvider theme={theme}>
      <View bg="white" flex={1}>
        <Box p={4} flex={1}>
          <Center>
            <Heading size="lg" mb={6} marginRight={90} >
              잃어버린 분실물 찾기📍
            </Heading>
          </Center>
          <VStack space={4} flex={1}>
            <Center>
              <HStack space={3} alignItems="center">
                <Select
                  selectedValue={selectItem}
                  minWidth={150}
                  onValueChange={setSelectItem}
                  placeholder="분실물 선택">
                  {items.map((item) => (
                    <Select.Item key={item} label={item} value={item} />
                  ))}
                </Select>
                <Select
                  selectedValue={selectPlace}
                  minWidth={150}
                  onValueChange={setSelectPlace}
                  placeholder="날짜 선택">
                  {places.map((place) => (
                    <Select.Item key={place} label={place} value={place} />
                  ))}
                </Select>
              </HStack>
            </Center>
            <Flex flexGrow={1}>
              <ScrollView flex={1}>
                <Box alignItems="center">
                  <LostItem
                    station="신도림역"
                    item="닌텐도스위치"
                    date="2023-07-02"
                  />
                  <LostItem
                    station="강남역"
                    item="닌텐도스위치"
                    date="2023-07-02"
                  />
                  <LostItem
                    station="신도림역"
                    item="닌텐도"
                    date="2023-07-02"
                  />
                  <LostItem
                    station="마곡역"
                    item="닌텐도스위치"
                    date="2023-07-02"
                  />
                  <LostItem
                    station="아현역"
                    item="닌텐도스위치"
                    date="2023-07-02"
                  />
                </Box>
              </ScrollView>
            </Flex>
          </VStack>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default HourlyPlace;
