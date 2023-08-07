import { configureStore, createSlice } from '@reduxjs/toolkit'

// state들의 타입 지정
export type RootState = {
  selectedDate: string,
  selectedDates: string[],
  selectedDotw: any,
  selectedTime: any,
}

const selectedDate = createSlice({
  name: 'selectedDate',
  initialState: '선택',
  reducers: {
    setSelectedDate(state, action) {
      return action.payload;
    }
  }
})

const selectedDates = createSlice({
  name: 'selectedDates',
  initialState: [],
  reducers: {
    setSelectedDates(state, action) {
      return action.payload;
    }
  }
})

const selectedDotw = createSlice({
  name: 'selectedDotw',
  initialState: '선택',
  reducers: {
    setSelectedDotw(state, action) {
      return action.payload;
    }
  }
})

const selectedTime = createSlice({
  name: 'selectedTime',
  initialState: '선택',
  reducers: {
    setSelectedTime(state, action) {
      return action.payload;
    }
  }
})

export default configureStore({
  reducer: {
    selectedDate: selectedDate.reducer,
    selectedDates: selectedDates.reducer,
    selectedDotw: selectedDotw.reducer,
    selectedTime: selectedTime.reducer
  }
})

export const { setSelectedDate } = selectedDate.actions;
export const { setSelectedDates } = selectedDates.actions;
export const { setSelectedDotw } = selectedDotw.actions;
export const { setSelectedTime } = selectedTime.actions;
