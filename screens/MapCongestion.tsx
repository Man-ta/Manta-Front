import { View, Text, StyleSheet, Image, Pressable, Modal, TextInput, TouchableHighlight } from "react-native"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapModal } from "./modal/MapModal";
import GoogleMap from "./GoogleMap";
import { useDispatch, useSelector } from "react-redux";
import { RootState, setLocation, setSearchedName, setPoiIDList, setPoiList } from "../store";
import { PoiSearch } from "./PoiSearch";


// 실시간 장소 혼잡도를 보여주는 컴포넌트
const MapCongestion = () => {

  const dispatch = useDispatch();

  const [apiResponse, setApiResponse] = useState('');
  const poiList = useSelector((state: RootState) => state.poiList);
  const poiIDList = useSelector((state: RootState) => state.poiIDList);
  const [explainVisible, setExplainVisible] = useState<boolean>(false);  // 혼잡 레벨에 대해 상세 설명이 있는 모달에 관한 on/off를 관리하는 state
  const searchedName = useSelector((state: RootState) => state.searchedName);

  const modalVisible = useSelector((state: RootState) => state.modalVisible);

  const selectedID = useSelector((state:RootState) => state.selectedID);


  type Poi = {
    id: string,
    name: string,
    centerLat: string,
    centerLon: string,
    newAddressList: any
  }

  const arr = ["497342", "5411247", "219821"];
  const a = "497342"

  const extractedID = poiList.map((item: Poi, i: number) => ({
    id: item.id
  }));

  // console.log(poiList)

  // dispatch(setPoiIDList(extractedID));

  const handleApiCall = (value: any) => {
    const CongestionResponseDto = {
      poiId: value,
    };

    const apiUrl = 'http://192.168.10.80:8085/place/congestion';
    const appKey = '2g1pkfbjAB3LXPV8ymxV87iexe1q2KZbzmqgnbIf';

    axios.get(apiUrl, {
      params: CongestionResponseDto,
      headers: {
        appkey: appKey,
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        setApiResponse(JSON.stringify(response.data));
      })
      .catch(error => {
        console.error('API 호출 에러:', error);
      });
  };

  useEffect(() => {
    handleApiCall("2930148");
    console.log(apiResponse);
  }, [selectedID]);

  // searchedName의 state를 TextInput에 입력한 글자로 바꿈
  const textChange = (text: string) => {
    dispatch(setSearchedName(text));
  }

  // TextInput에 값을 입력하고 엔터키를 누르면 작동
  const handleEnterPress = () => {
    if (searchedName) {
      handleApiCall(searchedName);
    }
  }

  const toggleExplainModal = () => {
    setExplainVisible(!explainVisible);
  }

  // {"latitude": 37.44789568747357, "longitude": 126.64944946904347}
  const setCurrentLocation = () => {
    // dispatch(setLocation(location));
    // console.log("클릭")
  }

  return (
    <>
      <View style={styles.container}>
        

        <GoogleMap />
        {
          modalVisible === false ? <MapModal /> : null
        }

        {/* 상단 검색영역  */}
        <View style={styles.searchContainer}>
          <View style={styles.searchView}>
            <Image source={require('../assets/images/search-icon.png')} style={styles.searchIcon} />
            <TextInput
              placeholder="장소를 검색하세요!"
              value={searchedName}
              onChangeText={textChange}
              onSubmitEditing={handleEnterPress}
              style={styles.searchText}
            />
          </View>
        </View>

        {/* 우측 상단 물음표 아이콘 */}
        <Pressable onPress={toggleExplainModal} style={styles.questionButton}>
          <Image source={require('../assets/images/question-icon.png')} style={styles.questionIcon} />
        </Pressable>

        {/* 장소에 대한 정보가 있는 툴팁 */}
        {/* <View style={styles.balloonContainer}>
          <View style={styles.balloon}>
            <Text style={styles.ballon_levelThree}>혼잡</Text>
            <Text style={styles.ballonText}>롯데백화점 인천점</Text>
          </View>
          <View style={styles.arrow} />
        </View> */}

        {/* 혼잡 레벨에 대해 상세 설명이 있는 모달 */}
        <Modal animationType="none" transparent={true} visible={explainVisible} onRequestClose={() => setExplainVisible(false)}>
          <View style={styles.explainContainer}>
            <View style={styles.explainView}>
              <Pressable onPress={toggleExplainModal} style={styles.closeButton}>
                <Image source={require('../assets/images/close-icon.png')} style={styles.closeIcon} />
              </Pressable>
              <Text style={styles.ex_levelOne}><Text style={{ color: '#C2F5EF', fontWeight: 'bold' }}>여유(1단계)</Text> : 전방의 시야가 트여있는 상태</Text>
              <Text style={styles.ex_levelTwo}><Text style={{ color: '#7BD1D1', fontWeight: 'bold' }}>보통(2단계)</Text> : 전방의 시야가 다소 막힌 상태</Text>
              <Text style={styles.ex_levelThree}><Text style={{ color: '#F5B06C', fontWeight: 'bold' }}>혼잡(3단계)</Text> : 지나가는 사람과 서로 부딪힐 수 있는 상태</Text>
              <Text style={styles.ex_levelFour}><Text style={{ color: '#D36E85', fontWeight: 'bold' }}>매우혼잡(4단계)</Text> : 매우 혼잡하여 불쾌할 수 있는 상태</Text>
              <Text style={styles.ex_congestion}>
                * 혼잡도는 특정 장소의 추정 방문자 수를 연면적('㎡')으로 나눈 값으로, 단위 면적('㎡')당 추정 방문자의 수를 의미합니다. {'\n'}
                직관적인 이해를 위해 수준을 총 4단계로 구분하여 제공합니다.
              </Text>
            </View>
          </View>
        </Modal>

        {/* 사용자의 현재 위치로 이동하는 아이콘 */}
        <Pressable onPress={setCurrentLocation} style={styles.locationButton}>
          <Image source={require('../assets/images/location-icon.png')} style={styles.locationIcon} />
        </Pressable>

        <MapModal />

        {/* 우측 하단 혼잡 레벨에 관한 모달 */}
        <View style={styles.infoView}>
          <Text style={styles.floatingPop}>유동인구</Text>
          <Text style={styles.info_levelOne}>여유</Text>
          <Text style={styles.info_levelTwo}>보통</Text>
          <Text style={styles.info_levelThree}>혼잡</Text>
          <Text style={styles.info_levelFour}>매우혼잡</Text>
        </View>

      </View>

    </>
  )
}

export { MapCongestion };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    width: '83%',
    height: 42,
    top: 12,
    left: 15,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: '#999999',
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    fontSize: 16,
    left: 31,
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    left: 11,
    width: 14,
    height: 14,
  },
  questionButton: {
    position: 'absolute',
    top: 21,
    right: 14,
  },
  questionIcon: {
    width: 20,
    height: 20,
  },
  balloonContainer: {
    position: 'absolute',
    top: 120,
    left: 20,
    flexDirection: "column",
    alignItems: "center",
  },
  balloon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: "white",
    opacity: 0.95,
    height: 40,
    padding: 10,
    paddingRight: 14,
    borderRadius: 10,
  },
  ballon_levelOne: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#ACF1E9',
    height: 24,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#ACF1E9',
    overflow: 'hidden',
    textAlign: 'center',
  },
  ballon_levelTwo: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#54B2B2',
    height: 24,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#54B2B2',
    overflow: 'hidden',
    textAlign: 'center',
  },
  ballon_levelThree: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#F39C46',
    height: 24,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#F39C46',
    overflow: 'hidden',
    textAlign: 'center',
  },
  ballon_levelFour: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#D36E85',
    height: 24,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#D36E85',
    overflow: 'hidden',
    textAlign: 'center',
  },
  ballonText: {
    fontSize: 15,
    left: 5,
  },
  arrow: {
    opacity: 0.95,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 18,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "white",
  },
  explainContainer: {
    flex: 1,
    alignItems: 'center',
    top: '37%'
  },
  closeButton: {
    position: 'absolute',
    top: 11,
    right: 11,
    zIndex: 1,
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
  explainView: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 340,
    height: 192,
    paddingTop: 20,
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#CBCBCB'
  },
  ex_levelOne: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
  },
  ex_levelTwo: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
  },
  ex_levelThree: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
  },
  ex_levelFour: {
    fontSize: 15,
    padding: 5,
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 10,
  },
  ex_congestion: {
    fontSize: 12,
    color: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 7,
  },
  locationButton: {
    position: 'absolute',
    bottom: 37,
    left: 36,
    zIndex: 1,
  },
  locationIcon: {
    width: 45,
    height: 45,
  },
  infoView: {
    position: 'absolute',
    width: 80,
    height: 161,
    bottom: 32,
    left: '72%',
    borderWidth: 0.5,
    borderRadius: 7,
    borderColor: '#CBCBCB',
    backgroundColor: 'white',
    padding: 5,
  },
  floatingPop: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
  },
  info_levelOne: {
    fontSize: 14,
    backgroundColor: '#C2F5EF',
    marginTop: 13,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    overflow: 'hidden',
    textAlign: 'center',
  },
  info_levelTwo: {
    fontSize: 14,
    backgroundColor: '#7BD1D1',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    overflow: 'hidden',
    textAlign: 'center',
  },
  info_levelThree: {
    fontSize: 14,
    backgroundColor: '#F5B06C',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    overflow: 'hidden',
    textAlign: 'center',
  },
  info_levelFour: {
    fontSize: 14,
    backgroundColor: '#D36E85',
    marginTop: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    overflow: 'hidden',
    textAlign: 'center',
    marginBottom: 5,
  },
});