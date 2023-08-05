import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, Modal, Button, StyleSheet, Pressable, Image, Platform, TextInput } from "react-native"
import { Calendar } from "react-native-calendars";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

// 지도에서 혼잡도에 대한 정보를 필터링해서 볼 수 있도록 하는 컴포넌트
const MapModal = () => {

  const [modalVisible, setModalVisible] = useState<boolean>(false);  // 필터링 모달의 on/off를 관리하는 state - 모달의 초기 상태를 false로 설정하여 보이지 않게 함
  const [calendarVisible, setCalendarVisible] = useState<boolean>(false);  // 달력 모달의 on/off를 관리하는 state
  const [dotwVisible, setDotwVisible] = useState<boolean>(false);  // 요일 모달의 on/off를 관리하는 state
  const [timePickerVisible, setTimePickerVisible] = useState<boolean>(false);  // 시간을 선택하는 모달의 on/off를 관리하는 state
  const [whetherDay, setWhetherDay] = useState<boolean>(false);  // 모달에서 '여러 날짜' 혹은 '하루' 항목을 관리하는 state
  const [selectedDates, setSelectedDates] = useState<string[]>([]);  // '여러 날짜' 달력에서 선택된 값들을 관리하는 state
  const [selectedDate, setSelectedDate] = useState<string>('선택');  // '하루' 달력에서 선택된 값을 관리하는 state
  const [selectedDotw, setSelectedDotw] = useState('선택');  // 요일 피커에서 선택된 요일을 관리하는 state
  const [selectedTime, setSelectedTime] = useState('선택');  // 타임 피커에서 선택된 시간을 관리하는 state
  const [changeModal, setChangeModal] = useState<boolean>(true);  // true, false에 따라 모달의 상태를 변경하는 state


  // 달력에서 선택된 값을 state에 추가
  const addSelectedDates = (day: string) => {
    const dateString = day;

    setSelectedDates((prevSelectedDates) => {
      // 이미 선택된 날짜라면 선택 해제
      if (prevSelectedDates.includes(dateString)) {
        return prevSelectedDates.filter((date) => date !== dateString);
      }
      // 새로운 날짜를 선택한 경우 선택된 날짜에 추가
      else {
        return [...prevSelectedDates, dateString];
      }
    });
  };

  // 달력에서 선택된 값을 초기화
  const resetSelectedDates = () => {
    setSelectedDates([]);
  }
  const resetSelectedDate = () => {
    setSelectedDate('선택');
  }

  // 달력에서 사용할 markedDates를 생성하는 함수
  const generateMarkedDates = (selectedDates: any) => {

    let firstDate = new Date(selectedDates[0]);  // 달력에서 처음으로 선택된 날짜
    let lastDate = new Date(selectedDates[1]);  // 달력에서 마지막으로 선택된 날짜

    let allDates = [];
    firstDate = new Date(firstDate);
    
    // 첫 날짜 ~ 마지막 날짜를 배열로 만들고 Date 형식으로 변환
    while (firstDate <= lastDate) {
      allDates.push(new Date(firstDate));
      firstDate.setDate(firstDate.getDate() + 1);
    }

    // Date 형식의 배열을 다시 string 형식으로 변환
    let allDatesToStrings = allDates.map((date) => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    });

    let markedDates: { [key: string]: { selected: boolean } } = {};

    allDatesToStrings.map((date) => {
      markedDates[date] = { selected: true }
    });

    return markedDates;
  }

  const markedDates = generateMarkedDates(selectedDates);

  // console.log(selectedDates[0])
  // console.log(selectedDates[1])

  // function addDates() {
  //   let obj = dates.reduce(
  //     (c, v) =>
  //       Object.assign(c, {
  //         [v]: { marked: true, dotColor: 'red' },
  //       }),
  //     {}
  //   );
  //   setMarkedDates(obj);
  // }

  // console.log(selectedDay)
  // console.log(selectedDotw)
  // console.log(selectedTime)

  // let today = new Date();
  // let threeMonthT = new Date();
  // threeMonthT.setMonth(today.getMonth()-3);
  // console.log("3개월 전 오늘 : " + threeMonthT);


  // '여러 날짜' 영역과 '하루' 영역을 순환
  const toggleManyDays = () => {
    setWhetherDay((value) => !value);
    setChangeModal((value) => !value);
  }
  const toggleDay = () => {
    setWhetherDay((value) => !value);
    setChangeModal((value) => !value);
  }

  // 필터링 모달의 on/off 기능 - 모달의 상태를 true로 바꿔 보이게 함
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }

  // '초기화' 버튼을 누르면 선택된 값을 모두 리셋
  const resetSelectedValue = () => {
    setSelectedDate('선택')
    setSelectedDotw('선택')
    setSelectedTime('선택')
  }

  // 달력 모달의 on/off 기능
  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  }

  // 요일을 고르는 모달의 on/off 기능
  const toggleDotw = () => {
    setDotwVisible(!dotwVisible);
  }

  // 시간을 선택하는 모달의 on/off 기능
  const toggleTimePicker = () => {
    setTimePickerVisible(!timePickerVisible);
  }

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<any>('time');

  // const now = new Date();
  // const yesterday = new Date("2023-08-03");

  // console.log(now > yesterday); //true
  // console.log(now < yesterday); //false

  // timePicker의 값이 바뀔 때마다 출력
  const onChange = (event: any, time: any) => {
    let selectedValue = time;  // selectedValue는 객체타입
    setDate(selectedValue);
    selectedValue = selectedValue + 9;
    selectedValue = JSON.stringify(selectedValue);
    selectedValue = selectedValue.slice(16, 22);
    setSelectedTime(selectedValue)
  };

  return (
    <View style={styles.container}>

      <Button title="모달열기" onPress={toggleModal} />

      {
        changeModal ? (

          // '여러 날짜' 모달
          <>
            <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
              <View style={styles.backgroundTransparent}>
                <View style={styles.modalConatiner}>
                  <View style={styles.modal}>

                    {/* 날짜의 범위를 선택하는 모달의 헤더 */}
                    <View style={styles.header}>
                      <Pressable onPress={toggleModal} style={styles.closeButton}>
                        <Image source={require('../../assets/images/close-icon.png')} style={styles.closeIcon} />
                      </Pressable>
                      <View style={styles.dayView}>
                        <Pressable onPress={toggleManyDays} style={whetherDay === false ? styles.manyDaysSection : styles.oneDaySection}>
                          <Text style={styles.manyDays}>여러 날짜</Text>
                        </Pressable>
                        <Pressable onPress={toggleDay} style={whetherDay === true ? styles.manyDaysSection : styles.oneDaySection}>
                          <Text style={styles.oneDay}>하루</Text>
                        </Pressable>
                      </View>
                    </View>

                    {/* 모달의 주요 내용이 있는 영역 */}
                    <View style={styles.contents}>
                      <View style={styles.dateView}>
                        <Text style={styles.date}>
                          날짜
                        </Text>
                        <Pressable onPress={toggleCalendar}>
                          <Text style={styles.selectedDate}>
                            {selectedDates.length === 0 ? <Text style={styles.placeholder}>선택</Text> : <Text>{selectedDates[0]} ~ {selectedDates[1]}</Text>}
                          </Text>
                        </Pressable>
                      </View>
                      <Text style={styles.dotw}>
                        요일
                      </Text>
                      <Pressable onPress={toggleDotw}>
                        <Text style={styles.selectedDotw}>
                          {selectedDotw === '선택' ? <Text style={styles.placeholder}>{selectedDotw}</Text> : <Text>{selectedDotw}</Text>}
                        </Text>
                      </Pressable>
                      <Text style={styles.hour}>
                        시간
                      </Text>
                      <Pressable onPress={toggleTimePicker} style={styles.selectedHour}>
                        {selectedTime === '선택' ? <Text style={styles.placeholder}>{selectedTime}</Text> : <Text>{selectedTime}</Text>}
                      </Pressable>
                    </View>

                    {/* 완료, 초기화 버튼이 있는 모달의 하단 영역 */}
                    <View style={styles.footer}>
                      <View style={styles.checkView}>
                        <Pressable onPress={toggleModal} style={styles.confirmButton}>
                          <Text style={styles.confirm}>완료</Text>
                        </Pressable>
                        <Pressable onPress={resetSelectedValue} style={styles.resetButton}>
                          <Text style={styles.reset}>초기화</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </View>

                {/* 달력 모달 */}
                <Modal animationType="fade" transparent={true} visible={calendarVisible} onRequestClose={() => setCalendarVisible(false)}>
                  <View style={styles.backgroundTransparent}>
                    <View style={styles.calendarContainer}>
                      <Calendar
                        onDayPress={day => {
                          addSelectedDates(day.dateString);
                        }}
                        markedDates={
                          markedDates
                        }
                        style={styles.calendar}
                      />
                      <View style={styles.calendarButtonView}>
                        <Pressable style={styles.calendarConfirmButton} onPress={toggleCalendar}>
                          <Text style={styles.calendarConfirm}>확인</Text>
                        </Pressable>
                        <Pressable style={styles.calendarCancelButton} onPress={toggleCalendar}>
                          <Text style={styles.calendarCancel}>취소</Text>
                        </Pressable>
                        <Pressable style={styles.calendarResetButton} onPress={resetSelectedDates}>
                          <Text style={styles.calendarReset}>초기화</Text>
                        </Pressable>
                      </View>
                    </View>
                  </View>
                </Modal>

                {/* 요일을 선택하는 모달 */}
                <Modal animationType="fade" transparent={true} visible={dotwVisible} onRequestClose={() => setDotwVisible(false)}>
                  <View style={styles.backgroundTransparent}>
                    <View style={styles.dotwPicker}>
                      <Picker
                        selectedValue={selectedDotw}
                        onValueChange={
                          (itemValue, itemIndex) => setSelectedDotw(itemValue)
                        }>
                        <Picker.Item label="월요일" value="월요일" />
                        <Picker.Item label="화요일" value="화요일" />
                        <Picker.Item label="수요일" value="수요일" />
                        <Picker.Item label="목요일" value="목요일" />
                        <Picker.Item label="금요일" value="금요일" />
                        <Picker.Item label="토요일" value="토요일" />
                        <Picker.Item label="일요일" value="일요일" />
                      </Picker>
                      <Pressable onPress={toggleDotw} style={styles.timePickerConfirmButton}>
                        <Text style={styles.timePickerConfirm}>확인</Text>
                      </Pressable>
                    </View>
                    <Pressable onPress={toggleDotw} style={styles.timePickerCancelButton}>
                      <Text style={styles.timePickerCancel}>취소</Text>
                    </Pressable>
                  </View>

                </Modal>

                {/* 시간을 선택하는 timePicker 모달 */}
                <Modal animationType="fade" transparent={true} visible={timePickerVisible} onRequestClose={() => setTimePickerVisible(false)}>
                  <View style={styles.backgroundTransparent}>
                    <View style={styles.timePicker}>
                      <DateTimePicker
                        testID="timePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="spinner"
                        onChange={onChange}
                      />
                      <Pressable onPress={toggleTimePicker} style={styles.timePickerConfirmButton}>
                        <Text style={styles.timePickerConfirm}>확인</Text>
                      </Pressable>
                    </View>
                    <Pressable onPress={toggleTimePicker} style={styles.timePickerCancelButton}>
                      <Text style={styles.timePickerCancel}>취소</Text>
                    </Pressable>
                  </View>
                </Modal>

              </View>
            </Modal>
          </>
        ) :
          (
            // '하루' 모달
            <>
              <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View style={styles.backgroundTransparent}>
                  <View style={styles.modalConatiner}>
                    <View style={styles.modal}>

                      {/* 날짜의 범위를 선택하는 모달의 헤더 */}
                      <View style={styles.header}>
                        <Pressable onPress={toggleModal} style={styles.closeButton}>
                          <Image source={require('../../assets/images/close-icon.png')} style={styles.closeIcon} />
                        </Pressable>
                        <View style={styles.dayView}>
                          <Pressable onPress={toggleManyDays} style={whetherDay === false ? styles.manyDaysSection : styles.oneDaySection}>
                            <Text style={styles.manyDays}>여러 날짜</Text>
                          </Pressable>
                          <Pressable onPress={toggleDay} style={whetherDay === true ? styles.manyDaysSection : styles.oneDaySection}>
                            <Text style={styles.oneDay}>하루</Text>
                          </Pressable>
                        </View>
                      </View>

                      {/* 모달의 주요 내용이 있는 영역 */}
                      <View style={styles.contents}>
                        <View style={styles.dateView}>
                          <Text style={styles.date}>
                            날짜
                          </Text>
                          <Pressable onPress={toggleCalendar}>
                            <Text style={styles.selectedDate}>
                              {selectedDate === '선택' ? <Text style={styles.placeholder}>{selectedDate}</Text> : <Text>{selectedDate}</Text>}
                            </Text>
                          </Pressable>
                          <Text style={styles.dotw}>
                            추정 방문자 수
                          </Text>
                          <Pressable onPress={toggleDotw}>
                            <Text style={styles.selectedDotw}>
                              25,019명
                            </Text>
                          </Pressable>
                        </View>
                      </View>

                      {/* 완료, 초기화 버튼이 있는 모달의 하단 영역 */}
                      <View style={styles.footer}>
                        <View style={styles.checkView}>
                          <Pressable onPress={toggleModal} style={styles.confirmButton}>
                            <Text style={styles.confirm}>완료</Text>
                          </Pressable>
                          <Pressable onPress={resetSelectedValue} style={styles.resetButton}>
                            <Text style={styles.reset}>초기화</Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </View>

                  {/* 달력 모달 */}
                  <Modal animationType="fade" transparent={true} visible={calendarVisible} onRequestClose={() => setCalendarVisible(false)}>
                    <View style={styles.backgroundTransparent}>
                      <View style={styles.calendarContainer}>
                        <Calendar
                          onDayPress={day => {
                            setSelectedDate(day.dateString);
                          }}
                          markedDates={{
                            [selectedDate]: { selected: true, disableTouchEvent: true }
                          }}
                          style={styles.calendar}
                        />
                        <View style={styles.calendarButtonView}>
                          <Pressable style={styles.calendarConfirmButton} onPress={toggleCalendar}>
                            <Text style={styles.calendarConfirm}>확인</Text>
                          </Pressable>
                          <Pressable style={styles.calendarCancelButton} onPress={toggleCalendar}>
                            <Text style={styles.calendarCancel}>취소</Text>
                          </Pressable>
                          <Pressable style={styles.calendarResetButton} onPress={resetSelectedDate}>
                            <Text style={styles.calendarReset}>초기화</Text>
                          </Pressable>
                        </View>
                      </View>
                    </View>
                  </Modal>

                </View>
              </Modal>
            </>
          )
      }

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  calendarContainer: {
    width: '95%',
    height: '54%',
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    left: '2.5%',
    bottom: 180,
  },
  calendar: {
    width: '95%',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 15,
    left: '2.5%',
  },
  calendarButtonView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'white',
    position: 'absolute',
    top: '90%',
    left: '52%',
  },
  calendarConfirmButton: {
    marginRight: 25,
  },
  calendarConfirm: {
    fontSize: 17,
    color: '#2EB46B',
    fontWeight: 'bold'
  },
  calendarCancelButton: {
    marginRight: 25,
  },
  calendarCancel: {
    fontSize: 17,
    fontWeight: 'bold'
  },
  calendarResetButton: {
  },
  calendarReset: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red',
  },
  dotwPicker: {
    width: '95%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 10,
    left: '2.5%',
    position: 'absolute',
    bottom: 97,
  },
  timePicker: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'black',
    left: '2.5%',
    position: 'absolute',
    bottom: 97,
  },
  timePickerConfirmButton: {
    height: 55,
    paddingTop: 16,
    paddingBottom: 16,
    borderTopColor: '#f5f7f8',
    borderTopWidth: 1,
  },
  timePickerConfirm: {
    color: '#2EB46B',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 2
  },
  timePickerCancelButton: {
    width: '95%',
    height: 55,
    backgroundColor: 'white',
    left: '2.5%',
    position: 'absolute',
    borderRadius: 10,
    bottom: 33,
  },
  timePickerCancel: {
    color: '#2EB46B',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: 18,
  },
  modalConatiner: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 30,
  },
  header: {
    flexDirection: 'row',
    marginTop: 43,
    height: 60,
  },
  closeButton: {
    position: 'absolute',
    width: 18,
    height: 18,
    right: 8,
    bottom: 33,
  },
  closeIcon: {
    width: 18,
    height: 18,
    right: 10,
    bottom: 35,
  },
  dayView: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 2,
    margin: 10,
    marginLeft: 28,
    backgroundColor: '#f5f7f8',
    borderColor: '#f5f7f8',
    overflow: 'hidden',
    width: '85%',
    height: '75%'
  },
  manyDaysSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: '#f5f7f8',
    overflow: 'hidden',
  },
  manyDays: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  oneDaySection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  oneDay: {
    fontSize: 16,
    fontWeight: "bold",
  },
  contents: {
    flexDirection: 'column',
    marginTop: 5,
  },
  dateView: {
    marginTop: 10
  },
  date: {
    fontSize: 16,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  selectedDate: {
    fontSize: 15,
    borderRadius: 10,
    padding: 12,
    paddingLeft: 15,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#f5f7f8',
    borderColor: '#f5f7f8',
    overflow: 'hidden'
  },
  dotw: {
    fontSize: 16,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  selectedDotw: {
    fontSize: 15,
    borderRadius: 10,
    padding: 12,
    paddingLeft: 15,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#f5f7f8',
    borderColor: '#f5f7f8',
    overflow: 'hidden'
  },
  hour: {
    fontSize: 16,
    alignItems: 'flex-start',
    paddingLeft: 20,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  selectedHour: {
    fontSize: 15,
    borderRadius: 10,
    padding: 12,
    paddingLeft: 15,
    margin: 10,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#f5f7f8',
    borderColor: '#f5f7f8',
    overflow: 'hidden'
  },
  footer: {
    flexDirection: 'row',
    paddingTop: 30,
    paddingBottom: 45,
  },
  checkView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  confirmButton: {
    backgroundColor: '#2EB46B',
    width: '60%',
    padding: 16,
    marginRight: 10,
    borderRadius: 20,
    borderColor: '#2EB46B',
  },
  confirm: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  resetButton: {
    width: '29%',
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#f5f7f8',
  },
  reset: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center'
  },
  // 모달이 올라오면 배경색을 투명하게 만듦
  backgroundTransparent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 흐림 효과를 위한 투명한 배경
  },
  placeholder: {
    color: 'grey',
  },
});

export { MapModal };