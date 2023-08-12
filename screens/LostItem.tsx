import React, { useEffect, useState } from "react";
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
} from "native-base";
import { XMLParser } from "fast-xml-parser";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

import { Modal } from 'react-native';


// 색상 테마를 확장
const newColorTheme = {
  brand: {
    900: "#a5f3fc",
  },
};
const theme = extendTheme({ colors: newColorTheme });

// LostItem 컴포넌트를 위한 props 타입을 정의
interface LostItemProps {
  category: string;
  item: string;
  date: string;
  compnay : string;
}

// 분실물 아이템을 렌더링하기 위한 컴포넌트
const LostItem = ({ category, item, date, compnay }: LostItemProps) => (
  <Pressable
    rounded="8"
    overflow="hidden"
    borderWidth="1"
    borderColor="coolGray.300"
    w="320"
    h="150"
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
          {category}
        </Text>
        <Text mt="2" fontSize="sm" color="coolGray.700">
          {item}
        </Text>
        <Text mt="2" fontSize="sm" bold color="lightBlue.700">
          {date}
        </Text>
        <Text mt="2" fontSize="sm" bold color="coolGray.700">
          {compnay}
        </Text>
      </Box>
    </HStack>
  </Pressable>
);

// 분실물 정보를 표시하는 메인 컴포넌트
const ShowLost: React.FC = () => {
  const [selectItem, setSelectItem] = useState("버스");
  const [data, setData] = useState<LostItemProps[]>([]);
  const [showPicker, setShowPicker] = useState<boolean>(true);

  // 어제 날짜를 문자열로 반환하는 함수
  const getYesterDay = (): string => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); // 오늘 날짜에서 1을 뺀 어제의 날짜

    const year = yesterday.getFullYear();
    const month = (yesterday.getMonth() + 1).toString().padStart(2, "0");
    const day = yesterday.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [selectedDate, setSelectedDate] = useState<string>(getYesterDay());

  // Date 객체를 문자열로 포맷하는 함수
  const formatDate = (date: Date): string => {
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // 날짜 선택 이벤트 핸들러
  const setDate = (event: DateTimePickerEvent, date?: Date) => {
    if (event.type === "set" && date) {
      const formattedDate = formatDate(date);
      setSelectedDate(formattedDate);
    }
  };

  // 데이터를 API로부터 가져오는 함수
  useEffect(() => {
    const fetchStationData = async () => {
      try {
        let xhr = new XMLHttpRequest();
        let url = `http://openapi.seoul.go.kr:8088/4b744f596a68617935346d58766468/xml/lostArticleInfo/1/200/ /${selectedDate}`;
        xhr.open("GET", url);
        xhr.onreadystatechange = function () {
          if (this.readyState == xhr.DONE) {
            if (xhr.status == 200 || xhr.status == 201) {
              let parser = new XMLParser();
              let xmlDoc = parser.parse(this.responseText);
              let rows = Array.isArray(xmlDoc.lostArticleInfo.row)
                ? xmlDoc.lostArticleInfo.row
                : [xmlDoc.lostArticleInfo.row];

              const parsedData: LostItemProps[] = rows.reduce(
                (acc: LostItemProps[], row: any) => {
                  let category = "";
                  const getPosition = row.GET_POSITION;
                  if (row.STATUS === "보관") { //보관정보인지 아닌지 확인
                    if ( //보관되어있는 분실물의 카테고리를 구분
                      getPosition.includes("운수") ||
                      getPosition.includes("버스") ||
                      getPosition.includes("여객")
                    ) {
                      category = "버스";
                    } else if (
                      getPosition.includes("택시") ||
                      getPosition.includes("자동차") ||
                      getPosition.includes("교통")
                    ) {
                      category = "택시";
                    }
                    acc.push({ //분실물 정보를 배열에 추가
                      category,
                      item: row.GET_NAME,
                      date: row.REG_DATE,
                      compnay: row.GET_POSITION,
                    });
                  }
                  return acc; //배열 반환
                },
                []
              );
              setData(parsedData); 
            }
          }
        };
        xhr.send("");
      } catch (error) {
        console.log("분실물 등록 없음", error);
      }
    };

    fetchStationData();
  }, [selectedDate]);

  const filteredData = data.filter(
    (lostItem) => lostItem.category === selectItem
  );

  return (
    <NativeBaseProvider theme={theme}>
      <View bg="white" flex={1}>
        <Box p={4} flex={1}>
          <Center>
            <Heading size="lg" mb={6} marginRight={90}>
              잃어버린 분실물 찾기📍
            </Heading>
          </Center>
          <VStack space={4} flex={1}>
            <Center>
              <HStack space={3} alignItems="center">
              <Modal
  transparent={true}
  visible={isSelectOpen}
  animationType="slide"
>
                <Select
                  selectedValue={selectItem}
                  minWidth={150}
                  onValueChange={setSelectItem}
                  placeholder="대중교통 선택">
                  <Select.Item label="버스" value="버스" />
                  <Select.Item label="택시" value="택시" />
                </Select>
                {showPicker && (
                  <RNDateTimePicker
                    value={new Date(getYesterDay())}
                    maximumDate={new Date(getYesterDay())}
                    onChange={setDate}
                    textColor="black"
                    accentColor="black"
                    style={{backgroundColor: "white"}} 
                    locale="ko-KR" 
                  />
                  
                )}
                </Modal>
              </HStack>
            </Center>
            <Flex flexGrow={1}>
              <ScrollView flex={1}>
                <Box alignItems="center">
                  {filteredData.length === 0 ? (
                    <Text mt="5" fontSize="xl" color="coolGray.600">
                      해당 날짜에 등록된 분실물이 없습니다.
                    </Text>
                  ) : (
                    filteredData.map((lostItem, index) => (
                      <LostItem
                        key={index}
                        category={lostItem.category}
                        item={lostItem.item}
                        date={lostItem.date}
                        compnay={lostItem.compnay}
                      />
                    ))
                  )}
                </Box>
              </ScrollView>
            </Flex>
          </VStack>
        </Box>
      </View>
    </NativeBaseProvider>
  );
};

export default ShowLost;
