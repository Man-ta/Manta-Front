import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line1 = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);
// 소요산
 const stations =[
    {name: '소요산'},
    {name: '동두천'},
    {name: '보산'},
    {name: '동두천중앙'},
    {name: '지행'},
    {name: '덕정'},
    {name: '덕계'},
    {name: '양주'},
    {name: '녹양'},
    {name: '가능'},
    {name: '의정부'},
    {name: '회룡'},
    {name: '망월사'},
    {name: '도봉산'},
    {name: '도봉'},
    {name: '방학'},
    {name: '창동'},
    {name: '녹천'},
    {name: '월계'},
    {name: '광운대'},
    {name: '석계'},
    {name: '신이문'},
    {name: '외대앞'},
    {name: '회기'},
    {name: '청량리'},
    {name: '제기동'},
    {name: '신설동'},
    {name: '동묘앞'},
    {name: '동대문'},
    {name: '종로5가'},
    {name: '종로3가'},
    {name: '종각'},
    {name: '시청'},
    {name: '서울역'},
    {name: '남영'},
    {name: '용산'},
    {name: '노량진'},
    {name: '대방'},
    {name: '신길'},
    {name: '영등포'},
    {name: '신도림'},
    {name: '구로'},
    {name: '오금'},
 ]   
// 경인선
 const stations2 =[
  {name: '구일'},
  {name: '개봉'},
  {name: '오류동'},
  {name: '온수'},
  {name: '구로'},
  {name: '소사'},
  {name: '부천'},
  {name: '중동'},
  {name: '송내'},
  {name: '부개'},
  {name: '부평'},
  {name: '백운'},
  {name: '동암'},
  {name: '간석'},
  {name: '주안'},
  {name: '도화'},
  {name: '제물포'},
  {name: '도원'},
  {name: '구로'},
  {name: '인천'},
 
]   
//경부선 
const stations3 =[
  {name: '가산디지털단지'},
  {name: '독산'},
  {name: '금천구청'},
  {name: '석수'},
  {name: '관악'},
  {name: '안양'},
  {name: '명학'},
  {name: '금정'},
  {name: '군포'},
  {name: '당정'},
  {name: '의왕'},
  {name: '성균관대'},
  {name: '화서'},
  {name: '수원'},
  {name: '세류'},
  {name: '병점'},
  {name: '세마'},
  {name: '오산대'},
  {name: '오산'},
  {name: '진위'},

  {name: '송탄'},
  {name: '서정리'},
  {name: '지제'},
  {name: '평택'},
  {name: '성환'},
  {name: '직산'},
  {name: '두정'},
  {name: '천안'},
  {name: '봉명'},
  {name: '쌍용'},
  {name: '아산'},
  {name: '탕정'},
  {name: '배방'},
  {name: '온양온천'},
  {name: '신창'},


 
]   

 return (
  <>
    <ScrollView>
      <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h="20">
          <Text color={"coolGray.600"} bold fontSize={"xl"} ml={15} mt={5}>
            1호선 노선도
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

{/* 빈칸 만들기 */}
<HStack
  backgroundColor={"white"}
  borderBottomWidth={1}
  borderBottomColor={"coolGray.100"}
  alignItems="center"
>
  <Text color={"coolGray.600"} bold fontSize={"xl"} ml={200} mt={0}>경일선(구일-인천)</Text>
  <Box width={"full"} backgroundColor={"white"} h="12"></Box>
</HStack>
{/* 경인선(구일-인천) */}
        {stations2.map((stations2, index2) => (
          <HStack
            key={index2}
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
              onPress={() => console.log(stations2.name)}
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
  <Text color={"coolGray.600"} bold fontSize={"lg"} ml={180} mt={0}>경부선</Text>
  <Box width={"full"} backgroundColor={"white"} h="12"></Box>
</HStack>

{/* 경부선 */}
{stations3.map((stations3, index3) => (
          <HStack
            key={index3}
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
              onPress={() => console.log(stations3.name)}
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
                  {stations3.name}
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




export { Line1 };


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