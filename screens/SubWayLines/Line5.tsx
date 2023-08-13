import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line5 = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 // 본선
 const stations =[
  {name: '방화'},
  {name: '개화산'},
  {name: '김포공항'},
  {name: '송정'},
  {name: '마곡'},
  {name: '발산'},
  {name: '우장산'},
  {name: '화곡'},
  {name: '까치산'},
  {name: '신정'},
  {name: '목동'},
  {name: '오목교'},
  {name: '양평'},
  {name: '영등포구청'},
  {name: '영등포시장'},
  {name: '신길'},
  {name: '여의도'},
  {name: '여의나루'},
  {name: '마포'},
  {name: '공덕'},
  {name: '애오개'},
  {name: '충정로'},
  {name: '서대문'},
  {name: '광화문'},
  {name: '종로3가'},
  {name: '종로4가'},
  {name: '동대문역사문화공원'},
  {name: '청구'},
  {name: '신금호'},
  {name: '행당'},
  {name: '왕십리'},
  {name: '마장'},
  {name: '답십리'},
  {name: '장한평'},
  {name: '군자'},
  {name: '아치산'},
  {name: '광나루'},
  {name: '천호'},
  {name: '강동'},
  
]  

// 하남방향
const stations2 =[
  {name: '길동'},
  {name: '굽은다리'},
  {name: '명일'},
  {name: '고덕'},
  {name: '상일동'},
  {name: '강일'},
  {name: '미사'},
  {name: '하남풍산'},
  {name: '하남시청'},
  {name: '하남검단산'},

]  

// 마천지선
const stations3 =[
  {name: '둔촌동'},
  {name: '올림픽공원'},
  {name: '방이'},
  {name: '오금'},
  {name: '개롱'},
  {name: '거여'},
  {name: '마천'},
]  
  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                5호선 노선도
            </Text>
        </Box>
        {/* 본선 */}
        {stations.map((station, index) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/line5.png')} style={styles.line} />
        <Image source={require('../../assets/images/line5down.png')} style={styles.linedown} />
    
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
  <Text color={"coolGray.600"} bold fontSize={"xl"} ml={160} mt={0}>하남방향</Text>
  <Box width={"full"} backgroundColor={"white"} h="12"></Box>
</HStack>


{/* 하남방향 */}
        {stations2.map((stations2, index2) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/line5.png')} style={styles.line} />
        <Image source={require('../../assets/images/line5down.png')} style={styles.linedown} />
    
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
  <Text color={"coolGray.600"} bold fontSize={"xl"} ml={160} mt={0}>마천지선</Text>
  <Box width={"full"} backgroundColor={"white"} h="12"></Box>
</HStack>


{/* 마천지선 */}
        {stations3.map((stations3, index3) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/line5.png')} style={styles.line} />
        <Image source={require('../../assets/images/line5down.png')} style={styles.linedown} />
    
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

export { Line5 };


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