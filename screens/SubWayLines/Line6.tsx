import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line6 = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 const stations =[
    {name: '역촌'},
    {name: '불광'},
    {name: '독바위'},
    {name: '연신내'},
    {name: '구산'},
    {name: '용암'},
    {name: '새절'},
    {name: '증산'},
    {name: '디지털미디어시티'},
    {name: '월드컵경기장'},
    {name: '마포구청'},
    {name: '망원'},
    {name: '합정'},
    {name: '상수'},
    {name: '광흥창'},
    {name: '대흥'},
    {name: '공덕'},
    {name: '효원공원앞'},
    {name: '삼각지'},
    {name: '녹사평'},
    {name: '이태원'},
    {name: '한강진'},
    {name: '버티고개'},
    {name: '약수'},
    {name: '청구'},
    {name: '신당'},
    {name: '동묘앞'},
    {name: '창신'},
    {name: '보문'},
    {name: '안암'},
    {name: '고려대'},
    {name: '월곡'},
    {name: '상월곡'},
    {name: '돌곶이'},
    {name: '석계'},
    {name: '태릉입구'},
    {name: '화랑대'},
    {name: '봉화산'},
    {name: '신내'},
   
 ]   

  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                6호선 노선도
            </Text>
        </Box>
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
        </VStack>
        
      </ScrollView>
    </>
  )
}

export { Line6 };


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