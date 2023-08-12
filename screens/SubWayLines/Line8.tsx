import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line8 = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 const stations =[
    {name: '암사'},
    {name: '천호'},
    {name: '강동구청'},
    {name: '몽촌토성'},
    {name: '잠실'},
    {name: '석촌'},
    {name: '송파'},
    {name: '가락시장'},
    {name: '문정'},
    {name: '장지'},
    {name: '복정'},
    {name: '남한산성입구'},
    {name: '단대오거리'},
    {name: '신흥'},
    {name: '수진'},
    {name: '모란'},
   
 ]   

  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                8호선 노선도
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

export { Line8 };


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