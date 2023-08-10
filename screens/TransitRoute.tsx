import { SubwayModal } from "./modal/SubwayModal";
import { SubwayDetail } from "./modal/SubwayDetail";
import {ScrollView,Box,Flex,Pressable,HStack,Badge,Spacer, Text, VStack, Input,
Icon,
Stack,}  from "native-base"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const TransitRoute = () => {

  const [apiResponse, setApiResponse] = useState(null);
  const [congestionData, setCongestionData] = useState([]);

  const handleApiCall = () => {
    // API 호출을 위한 파라미터 설정 (TrainResponseDto 객체와 유사한 형식으로 설정)
    
    axios({
      method: 'POST',
      url: 'http://192.168.35.57:8085/transit/route',
      data: {
        startX: "127.02550910860451",
        startY: "37.63788539420793",
        endX: "127.030406594109",
        endY: "37.609094989686",
        searchDttm: "202308081750"
      },
      headers: { 
                  'Content-Type': 'application/json'
                }
    }).then(function (response) { //post 성공 시
              console.log("Heade With Authentication :" + response)
              console.log(response.data)
              setApiResponse(response.data);
            }
    )

}
  useEffect(() => {
    handleApiCall();
  }, []);


  return (
    <>
      <ScrollView>
      <VStack  mt={5} space={3}>
        <Stack alignItems={"center"}>
      <Input size={"lg"} variant="underlined" w={{
      base: "85%",
      md: "30%"
    }} InputRightElement={<Pressable >
            <Icon
                as={FontAwesome}
                name="search"
                size={5}
                mr="2"
                color="#555555"
              />
          </Pressable>} placeholder="  지하철역 검색" placeholderTextColor={"#555555"} />
          </Stack>
      <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden"  w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#0052A4" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            1호선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2} >
            소요산 - 인천/신창
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#D1E8FF"> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#00A84D" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
            2호선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2} >
            시청-시청
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#C2F0C7"> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#EF7C1C" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
            3호선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            대화-오금
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#FFB77B"> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden"  w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#00A5DE" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
            4호선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            진접-오이도
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#B1EBFF"> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
    <Box>
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden"  w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#8936E0" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
            5호선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            방화-마천/하남검단산
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#E0CCF4"> </Box>
    </Pressable>
    </Box>
      <Box >
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#CD7C2F" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
            6호선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            응암-신내
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#E3B78C"> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#747F00" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            7호선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            장암-석내
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#B2B77E"> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden"  w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#E6186C" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            8호선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            암사-모란
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#FFCDE1"> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#BDB092" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            9호선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            중앙보훈병원-개화
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#DDD1B6"> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden"  w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#77C4A3" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            경의•중앙선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            문산-지평
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#B6ECD5"> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden" w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#0090d2" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            공항철도
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            서울역-인천공항2터미널
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#92DDFF"> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => console.log("I'm Pressed")} rounded="8" overflow="hidden"  w="170" shadow="3" bg="white" p = "0">
        
          <Text color="#178c72" mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            경춘선
          </Text>
          <Text mt="1" fontSize="sm" color="coolGray.700"  ml={2}>
            청량리-춘천
          </Text>
      <Box mt ="4" h = "3"  backgroundColor="#8BCABC"> </Box>
    </Pressable>
    </Box>
    </HStack>
    </VStack>
      </ScrollView>
    </>
  )
}

export { TransitRoute };