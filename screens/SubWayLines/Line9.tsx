import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line9 = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 const stations =[
    {name: '개화'},
    {name: '김포공항'},
    {name: '공항시장'},
    {name: '마곡나루'},
    {name: '양천향교'},
    {name: '가양'},
    {name: '증미'},
    {name: '등촌'},
    {name: '신목동'},
    {name: '선유도'},
    {name: '국회의사당'},
    {name: '여의도'},
    {name: '샛강'},
    {name: '노량진'},
    {name: '노들'},
    {name: '흑석'},
    {name: '동작'},
    {name: '구반포'},
    {name: '신반포'},
    {name: '고속터미널'},
    {name: '사평'},
    {name: '신논현'},
    {name: '언주'},
    {name: '선정릉'},
    {name: '삼성중앙'},
    {name: '봉은사'},
    {name: '종합운동장'},
    {name: '삼전'},
    {name: '석촌'},
    {name: '송파나루'},
    {name: '한성백제'},
    {name: '올림픽공원'},
    {name: '둔춘오륜'},
    {name: '중앙보훈병원'},
 ]   


 return (
  <>
    <ScrollView>
      <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h="20">
          <Text color={"coolGray.600"} bold fontSize={"xl"} ml={15} mt={5}>
            9호선 노선도
          </Text>
        </Box>
        {stations.map((station, index) => (
          <HStack
            key={index}
            backgroundColor={"white"}
            borderBottomWidth={1}
            borderBottomColor={"coolGray.100"}
          >
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/images/line4.png')} style={styles.line} />
              <Image source={require('../../assets/images/line4.png')} style={styles.linedown} />
              <Image source={require('../../assets/images/line4.png')} style={styles.line} />
              <Image source={require('../../assets/images/line4.png')} style={styles.linedown} />
            </View>
            <Pressable
              onPress={() => console.log(station.name)}
              overflow="hidden"
              h="12"
              w={"80%"}
              shadow="3"
              bg="white"
              p="0"
            >
              <Box alignItems={"center"}>
                <Text
                  color="coolGray.600"
                  fontWeight="medium"
                  fontSize="lg"
                  textAlign="right"
                  ml={-210}
                  mt={2}
                >
                  {station.name}
                </Text>
              </Box>
            </Pressable>
          </HStack>
        ))}



      </VStack>

    
    </ScrollView>

    
  </>
  
);
}




export { Line9 };


const styles = StyleSheet.create({
imageContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginLeft: 220,
},
line: {
  width: 3,
  height: 50,
  marginRight: 60,
 
},
linedown: {
  width: 3,
  height: 50,
  marginRight: 25,
},
});