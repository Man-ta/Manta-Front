import { SubwayModal } from "./modal/SubwayModal";
import { SubwayDetail } from "./modal/SubwayDetail";
import {ScrollView,Box,Flex,Pressable,HStack,Badge,Spacer, Text, VStack, Input,
Icon,
Stack,}  from "native-base"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const TransitRoute = ({ navigation } : {navigation : any}) => {

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


  const lines = [
    { color: "#0052A4", name: "1호선", description: "소요산 - 인천/신창", backgroundColor: "#D1E8FF" },
    { color: "#00A84D", name: "2호선", description: "시청-시청", backgroundColor: "#C2F0C7" },
    { color: "#EF7C1C", name: "3호선", description: "대화-오금", backgroundColor: "#FFB77B" },
    { color: "#00A5DE", name: "4호선", description: "진접-오이도", backgroundColor: "#B1EBFF" },
    { color: "#8936E0", name: "5호선", description: "방화-마천/하남검단산", backgroundColor: "#E0CCF4" },
    { color: "#CD7C2F", name: "6호선", description: "응암-신내", backgroundColor: "#E3B78C" },
    { color: "#747F00", name: "7호선", description: "장암-석내", backgroundColor: "#B2B77E" },
    { color: "#E6186C", name: "8호선", description: "암사-모란", backgroundColor: "#FFCDE1" },
    { color: "#BDB092", name: "9호선", description: "중앙보훈병원-개화", backgroundColor: "#DDD1B6" },
    { color: "#77C4A3", name: "경의•중앙선", description: "문산-지평", backgroundColor: "#B6ECD5" },
    { color: "#0090d2", name: "공항철도", description: "서울역-인천공항2터미널", backgroundColor: "#92DDFF" },
    { color: "#178c72", name: "경춘선", description: "청량리-춘천", backgroundColor: "#8BCABC" },
    // 색상 바꿀 예정
    { color: "#574623", name: "수인•분당선", description: "청량리-인천", backgroundColor: "#574623" },
    { color: "#4A141E", name: "신분당선", description: "신사-광교", backgroundColor: "#4A141E" },
    { color: "#2F5F33", name: "우이신설선", description: "북한산우이-신설동", backgroundColor: "#2F5F33" },
  ];
  
  const linesDetail =  () => {
    
  }


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
      <Pressable onPress={() => navigation.navigate('Line1')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[0].color} fontWeight="medium" fontSize="2xl" ml={2} mt={2} bold>
            {lines[0].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
            {lines[0].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[0].backgroundColor}> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => navigation.navigate('Line2')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[1].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
          {lines[1].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
          {lines[1].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[1].backgroundColor}> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => navigation.navigate('Line3')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[2].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            {lines[2].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
            {lines[2].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[2].backgroundColor}> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => navigation.navigate('Line4')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[3].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
          {lines[3].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
          {lines[3].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[3].backgroundColor}> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => navigation.navigate('Line5')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[4].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            {lines[4].name}
          </Text>
          <Text fontSize="sm" color="coolGray.700" ml={2} mt={1}>
            {lines[4].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[4].backgroundColor}> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => navigation.navigate('Line6')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[5].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
          {lines[5].name}
          </Text>
          <Text fontSize="sm" color="coolGray.700" ml={2} mt={1}>
          {lines[5].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[5].backgroundColor}> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => navigation.navigate('Line7')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[6].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            {lines[6].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
            {lines[6].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[6].backgroundColor}> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => navigation.navigate('Line8')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[7].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
          {lines[7].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1} >
          {lines[7].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[7].backgroundColor}> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => navigation.navigate('Line9')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[8].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            {lines[8].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1} >
            {lines[8].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[8].backgroundColor}> </Box>
    </Pressable>
    </Box>
    <Box>
      {/* Line_GyeonguiJungang */}
      <Pressable onPress={() => navigation.navigate('Line_GyeonguiJungang')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[9].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
          {lines[9].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
          {lines[9].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[9].backgroundColor}> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => navigation.navigate('Line_Arex')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[10].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2} bold>
            {lines[10].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
            {lines[10].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[10].backgroundColor}> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => navigation.navigate('Line_Gyeongchun')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[11].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
          {lines[11].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
          {lines[11].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[11].backgroundColor}> </Box>
    </Pressable>
    </Box>
    </HStack>

    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => navigation.navigate('Line_Suin')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[12].color} fontWeight="medium" fontSize="2xl" ml={2} mt={2} bold>
            {lines[12].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
            {lines[12].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[12].backgroundColor}> </Box>
    </Pressable>
    </Box>
    <Box>
      <Pressable onPress={() => navigation.navigate('Line_Sbd')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[13].color} mt="1" fontWeight="medium" fontSize="2xl" ml={2} marginTop={2}  bold>
          {lines[13].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
          {lines[13].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[13].backgroundColor}> </Box>
    </Pressable>
    </Box>
    </HStack>
    <HStack space={3} justifyContent="center">
      <Box >
      <Pressable onPress={() => navigation.navigate('Line_Ui')} w="170" rounded="8" bg="white" p="0" shadow="1">
        
          <Text color={lines[14].color} fontWeight="medium" fontSize="2xl" ml={2} mt={2} bold>
            {lines[14].name}
          </Text>
          <Text  fontSize="sm" color="coolGray.700" ml={2} mt={1}>
            {lines[14].description}
          </Text>
      <Box mt ="4" h = "3"  backgroundColor={lines[14].backgroundColor}> </Box>
      
    </Pressable>
    </Box>
    
    </HStack>
    </VStack>
      </ScrollView>
    </>
  )
}

export { TransitRoute };