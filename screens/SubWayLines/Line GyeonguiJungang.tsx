import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line_GyeonguiJungang = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 // 문산가좌
 const stations =[
  {name: '문산'},
  {name: '파주'},
  {name: '월롱'},
  {name: '금릉'},
  {name: '운정'},
  {name: '야당'},
  {name: '탄현'},
  {name: '일산'},
  {name: '풍산'},
  {name: '백마'},
  {name: '곡산'},
  {name: '대곡'},
  {name: '능곡'},
  {name: '행신'},
  {name: '강매'},
  {name: '화전'},
  {name: '수색'},
  {name: '디지털미디어시티'},
  {name: '가좌'},
  
]  

// 신촌-서울역
const stations2 =[
  {name: '신촌'},
  {name: '서울역'},
  

]  

// 홍대입구-용문
const stations3 =[
  {name: '홍대입구'},
  {name: '서강대'},
  {name: '공덕'},
  {name: '효창공원앞'},
  {name: '용산'},
  {name: '이촌'},
  {name: '서빙고'},
  {name: '한남'},
  {name: '옥수'},
  {name: '응봉'},
  {name: '왕십리'},
  {name: '청량리'},
  {name: '회기'},
  {name: '중랑'},

  {name: '상봉'},
  {name: '망우'},
  {name: '양원'},
  {name: '구리'},
  {name: '도농'},
  {name: '양정'},
  {name: '덕소'},
  {name: '도심'},
  {name: '팔당'},
  {name: '운길산'},
  {name: '양수'},
  {name: '신원'},
  {name: '국수'},
  {name: '아신'},

  {name: '오빈'},
  {name: '양평'},
  {name: '원덕'},
  {name: '용문'},
  {name: '지평'},
]  
  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                경의•중앙선 노선도
            </Text>
        </Box>
        {/* 문산가좌 */}
        {stations.map((station, index) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
       <Image source={require('../../assets/images/lineGyeonguiJungang.png')} style={styles.line} />
        <Image source={require('../../assets/images/lineGyeonguiJungangdown.png')} style={styles.linedown} />
        <Pressable key={index} onPress={() => console.log(station.name)}  overflow="hidden" h = "12"   w={"80%"} shadow="3" bg="white" p="0">
        <Box alignItems={"center"}>
          <Text color="coolGray.600" fontWeight="medium" fontSize="lg" textAlign="right" ml={15} mt={"2"}>
            {station.name}
          </Text>
         
        </Box>
      </Pressable>
      </HStack>
    ))}

    {/* 빈칸 만들기 */}
<HStack
  backgroundColor={"white"}
  borderBottomWidth={1}
  borderBottomColor={"coolGray.100"}
  alignItems="center"
>
  <Text color={"coolGray.600"} bold fontSize={"xl"} ml={160} mt={0}>신촌-서울역</Text>
  <Box width={"full"} backgroundColor={"white"} h="12"></Box>
</HStack>


{/* 신촌-서울역 */}
        {stations2.map((stations2, index2) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/lineGyeonguiJungang.png')} style={styles.line} />
        <Image source={require('../../assets/images/lineGyeonguiJungangdown.png')} style={styles.linedown} />
        <Pressable key={index2} onPress={() => console.log(stations2.name)}  overflow="hidden" h = "12"   w={"80%"} shadow="3" bg="white" p="0">
        <Box alignItems={"center"}>
          <Text color="coolGray.600" fontWeight="medium" fontSize="lg" textAlign="right" ml={15} mt={"2"}>
            {stations2.name}
          </Text>
         
        </Box>
      </Pressable>
      </HStack>
    ))}

  {/* 빈칸 만들기 */}
  <HStack
  backgroundColor={"white"}
  borderBottomWidth={1}
  borderBottomColor={"coolGray.100"}
  alignItems="center"
>
  <Text color={"coolGray.600"} bold fontSize={"xl"} ml={160} mt={0}>홍대입구-용문</Text>
  <Box width={"full"} backgroundColor={"white"} h="12"></Box>
</HStack>


{/* 홍대입구-용문 */}
        {stations3.map((stations3, index3) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
         <Image source={require('../../assets/images/lineGyeonguiJungang.png')} style={styles.line} />
        <Image source={require('../../assets/images/lineGyeonguiJungangdown.png')} style={styles.linedown} />
        <Pressable key={index3} onPress={() => console.log(stations3.name)}  overflow="hidden" h = "12"   w={"80%"} shadow="3" bg="white" p="0">
        <Box alignItems={"center"}>
          <Text color="coolGray.600" fontWeight="medium" fontSize="lg" textAlign="right" ml={15} mt={"2"}>
            {stations3.name}
          </Text>
         
        </Box>
      </Pressable>
      </HStack>
    ))}
        </VStack>
        
      </ScrollView>
    </>
  )
}

export { Line_GyeonguiJungang };


const styles = StyleSheet.create({
    line: {
      width:3,
      height: 50,
      marginLeft:80
    },
    linedown: {
        width:3,
        height: 50,
        marginLeft:60
      },
});