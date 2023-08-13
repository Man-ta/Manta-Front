import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line7 = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 const stations =[
    {name: '장암'},
    {name: '도봉산'},
    {name: '수락산'},
    {name: '마들'},
    {name: '노원'},
    {name: '중계'},
    {name: '하계'},
    {name: '공릉'},
    {name: '태릉입구'},
    {name: '먹골'},
    {name: '중화'},
    {name: '상봉'},
    {name: '면목'},
    {name: '사가정'},
    {name: '용마산'},
    {name: '중곡'},
    {name: '군자'},
    {name: '어린이대공원'},
    {name: '건대입구'},
    {name: '뚝섬유원지'},
    {name: '청담'},
    {name: '강남구청'},
    {name: '학동'},
    {name: '논현'},
    {name: '반포'},
    {name: '고속터미널'},
    {name: '내방'},
    {name: '이수'},
    {name: '남성'},
    {name: '숭실대입구'},
    {name: '상도'},
    {name: '장승배기'},
    {name: '신대방사거리'},
    {name: '보라매'},
    {name: '신풍'},
    {name: '대림'},
    {name: '남구로'},
    {name: '가산디지털단지'},
    {name: '철산'},
    {name: '광명사거리'},
    {name: '천왕'},
    {name: '온수'},
    {name: '까치울'},
    {name: '부천종합운동장'},
    {name: '춘의'},
    {name: '신중동'},
    {name: '부천시청'},
    {name: '상동'},
    {name: '삼산체육관'},
    {name: '굴포천'},
    {name: '부평구청'},
    {name: '산곡'},
    {name: '석남'},
 ]   

  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                7호선 노선도
            </Text>
        </Box>
        {stations.map((station, index) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/line7.png')} style={styles.line} />
        <Image source={require('../../assets/images/line7down.png')} style={styles.linedown} />
    
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

export { Line7 };


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