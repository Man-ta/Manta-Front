import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line4 = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 const stations =[
    {name: '진접'},
    {name: '오남'},
    {name: '풍양'},
    {name: '별내별가람'},
    {name: '당고개'},
    {name: '상계'},
    {name: '노원'},
    {name: '창동'},
    {name: '쌍문'},
    {name: '수유'},
    {name: '미아'},
    {name: '미아사거리'},
    {name: '길음'},
    {name: '성신여대입구'},
    {name: '한성대입구'},
    {name: '혜화'},
    {name: '동대문'},
    {name: '동대문역사문화공원'},
    {name: '충무로'},
    {name: '명동'},
    {name: '회현'},
    {name: '서울역'},
    {name: '숙대입구'},
    {name: '삼각지'},
    {name: '신용산'},
    {name: '이촌'},
    {name: '동작'},
    {name: '총신대입구(이수)'},
    {name: '사당'},
    {name: '남태령'},
    {name: '선바위'},
    {name: '경마공원'},
    {name: '대공원'},
    {name: '과천'},
    {name: '정부과천청사'},
    {name: '인덕원'},
    {name: '평촌'},
    {name: '범계'},
    {name: '금정'},
    {name: '산본'},
    {name: '수리산'},
    {name: '대야미'},
    {name: '반월'},
    {name: '상록수'},
    {name: '한대앞'},
    {name: '중앙'},
    {name: '고잔'},
    {name: '초지'},
    {name: '안산'},
    {name: '신길온천'},
    {name: '정왕'},
    {name: '오이도'},
 ]   



  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                4호선 노선도
            </Text>
        </Box>
        {stations.map((station, index) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/line4.png')} style={styles.line} />
        <Image source={require('../../assets/images/line4down.png')} style={styles.linedown} />
    
        <Pressable key={index} onPress={() => console.log("I'm Pressed")}  overflow="hidden" h = "12"   w={"80%"} shadow="3" bg="white" p="0">
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

export { Line4 };


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