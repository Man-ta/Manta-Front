import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line2 = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 // 본선
 const stations =[
  {name: '성수'},
  {name: '건대입구'},
  {name: '구의'},
  {name: '강변'},
  {name: '잠실나루'},
  {name: '잠실'},
  {name: '잠실시내'},
  {name: '종합운동장'},
  {name: '삼성'},
  {name: '선릉'},
  {name: '역삼'},
  {name: '강남'},
  {name: '교대'},
  {name: '서초'},
  {name: '방배'},
  {name: '사당'},
  {name: '낙성대'},
  {name: '서울대입구'},
  {name: '봉천'},
  {name: '신림'},
  {name: '신대방'},
  {name: '구로디지털단지'},
  {name: '대림'},
  {name: '신도림'},
  {name: '문래'},
  {name: '영등포구청'},
  {name: '당산'},
  {name: '합정'},
  {name: '홍대입구'},
  {name: '신촌'},
  {name: '이대'},
  {name: '아현'},
  {name: '충정로'},
  {name: '시청'},
  {name: '을지로입구'},
  {name: '을지로3가'},
  {name: '을지로4가'},
  {name: '동대문역사문화공원'},
  {name: '신당'},
  {name: '상왕십리'},
  {name: '왕십리'},
  {name: '한양대'},
  {name: '뚝섬'},
  {name: '성수'},
]  

// 성수지선
const stations2 =[
  {name: '성수(지선)'},
  {name: '용답'},
  {name: '신답'},
  {name: '용두'},
  {name: '신설동'},
]  

// 신정지선
const stations3 =[
  {name: '신도림(지선)'},
  {name: '도림천'},
  {name: '양구구청'},
  {name: '신정네거리'},
  {name: '까치산'},
]  
  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                2호선 노선도
            </Text>
        </Box>
        {/* 본선 */}
        {stations.map((station, index) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/line4.png')} style={styles.line} />
        <Image source={require('../../assets/images/line4down.png')} style={styles.linedown} />
    
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
  <Text color={"coolGray.600"} bold fontSize={"xl"} ml={160} mt={0}>성수지선</Text>
  <Box width={"full"} backgroundColor={"white"} h="12"></Box>
</HStack>


{/* 성수지선 */}
        {stations2.map((stations2, index2) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/line4.png')} style={styles.line} />
        <Image source={require('../../assets/images/line4down.png')} style={styles.linedown} />
    
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
  <Text color={"coolGray.600"} bold fontSize={"xl"} ml={160} mt={0}>신정지선</Text>
  <Box width={"full"} backgroundColor={"white"} h="12"></Box>
</HStack>


{/* 신정지선 */}
        {stations3.map((stations3, index3) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/line4.png')} style={styles.line} />
        <Image source={require('../../assets/images/line4down.png')} style={styles.linedown} />
    
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

export { Line2 };


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