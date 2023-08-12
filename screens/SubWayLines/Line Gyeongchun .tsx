import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line_Gyeongchun  = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 const stations =[
    {name: '청량리'},
    {name: '회기'},
    {name: '중랑'},
    {name: '상봉'},
    {name: '망우'},
    {name: '신내'},
    {name: '갈매'},
    {name: '별내'},
    {name: '퇴계원'},
    {name: '사릉'},
    {name: '금곡'},
    {name: '평내호평'},
    {name: '천마산'},
    {name: '마석'},
    {name: '대성리'},
    {name: '청평'},
    {name: '상천'},
    {name: '가평'},
    {name: '굴봉산'},
    {name: '백양리'},
    {name: '강촌'},
    {name: '김유정'},
    {name: '남춘선'},
    {name: '춘천'},
  
   
   
 ]   

  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                경춘선 노선도
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

export { Line_Gyeongchun };


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