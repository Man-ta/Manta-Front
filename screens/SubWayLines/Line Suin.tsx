import { View,  Image, StyleSheet } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, ScrollView, VStack,ZStack , Text, Pressable, Flex, HStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line_Suin = () => {
    const [placement, setPlacement] = useState('bottom');
    const [open, setOpen] = useState(false);

 const stations =[
    {name: '청량리'},
    {name: '왕십리'},
    {name: '서울숲'},
    {name: '압구정로데오'},
    {name: '강남구청'},
    {name: '선정릉'},
    {name: '선릉'},
    {name: '한티'},
    {name: '도곡'},
    {name: '구룡'},
    {name: '개포동'},
    {name: '대모산입구'},
    {name: '수서'},
    {name: '북정'},
    {name: '가천대'},
    {name: '태평'},
    {name: '모란'},
    {name: '야탑'},
    {name: '이매'},
    {name: '서현'},
    {name: '수내'},
    {name: '정자'},
    {name: '미금'},
    {name: '오리'},
    {name: '죽전'},
    {name: '보정'},
    {name: '구성'},
    {name: '신갈'},
    {name: '기흥'},
    {name: '상갈'},
    {name: '청명'},
    {name: '영통'},
    {name: '망포'},
    {name: '매탄권선'},
    {name: '수원시청'},
    {name: '매교'},
    {name: '수원'},
    {name: '고색'},
    {name: '오목천'},
    {name: '어천'},
    {name: '야목'},
    {name: '사리'},
    {name: '반월'},
    {name: '한대앞'},
    {name: '중앙'},
    {name: '고잔'},
    {name: '초지'},
    {name: '안산'},
    {name: '신길온천'},
    {name: '정왕'},
    {name: '오이도'},
    {name: '달월'},
    {name: '월곶'},
    {name: '소래포구'},
    {name: '인천논현'},
    {name: '호구포'},
    {name: '남동인더파크'},
    {name: '원인재'},
    {name: '연수'},
    {name: '송도'},
    {name: '인하대'},
    {name: '숭의'},
    {name: '신포'},
    {name: '인천'},
 ]   

  return (
    <>
      <ScrollView>
  
        <VStack space={0} alignItems="center">
        <Box width={"full"} backgroundColor={"white"} h = "20">
            <Text color={"coolGray.600"} bold fontSize={"xl"} ml={5} mt={5}>
                수인•분당선 노선도
            </Text>
        </Box>
        {stations.map((station, index) => (
       <HStack backgroundColor={"white"} borderBottomWidth={1} borderBottomColor={"coolGray.100"} >
        <Image source={require('../../assets/images/lineSuin.png')} style={styles.line} />
        <Image source={require('../../assets/images/lineSuindown.png')} style={styles.linedown} />
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

export { Line_Suin };


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