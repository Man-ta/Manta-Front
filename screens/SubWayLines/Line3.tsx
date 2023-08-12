import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line3 = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 const stations =[
    {name: '대화'},
    {name: '주엽'},
    {name: '정발산'},
    {name: '마두'},
    {name: '백석'},
    {name: '대곡'},
    {name: '화정'},
    {name: '원당'},
    {name: '원흥'},
    {name: '삼송'},
    {name: '지축'},
    {name: '구파발'},
    {name: '연신내'},
    {name: '불광'},
    {name: '녹번'},
    {name: '홍제'},
    {name: '무악재'},
    {name: '독립문'},
    {name: '경복궁'},
    {name: '안국'},
    {name: '종로3가'},
    {name: '충무로'},
    {name: '동대입구'},
    {name: '약수'},
    {name: '금호'},
    {name: '옥수'},
    {name: '압구정'},
    {name: '신사'},
    {name: '잠원'},
    {name: '고속터미널'},
    {name: '교대'},
    {name: '남부터미널'},
    {name: '양재'},
    {name: '매봉'},
    {name: '도곡'},
    {name: '대치'},
    {name: '학여울'},
    {name: '대청'},
    {name: '일원'},
    {name: '수서'},
    {name: '가락시장'},
    {name: '경찰병원'},
    {name: '오금'},
 ]   

  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                3호선 노선도
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

export { Line3 };


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