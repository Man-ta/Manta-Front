import { View, Text, Image, Pressable } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollView, VStack } from "native-base";

import { useDispatch, useSelector } from "react-redux";



// 제공가능장소를 보여주는 컴포넌트
const Line4 = () => {

 
  return (
    <>
      <ScrollView>
        <VStack flex="1">
            <Pressable>
        <Image source={require('../../assets/images/line4.png')} ></Image>
               <Text>눌러바~</Text>
            </Pressable>

        </VStack>
      </ScrollView>
    </>
  )
}

export { Line4 };