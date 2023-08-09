import { configureStore, createSlice } from '@reduxjs/toolkit'

// state들의 타입 지정
export type RootState = {
  placesList: any,
  searchedName: string,
  selectedDate: string,
  selectedDates: string[],
  selectedDotw: any,
  selectedTime: any,
  location: any,
}

const placesList = createSlice({
  name: 'placesList',
  initialState: [],
  reducers: {
    setPlacesList(state, action) {
      return action.payload;
    }
  }
})

const searchedName = createSlice({
  name: 'searchedName',
  initialState: '',
  reducers: {
    setSearchedName(state, action) {
      return action.payload;
    }
  }
})

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

const location = createSlice({
  name: 'location',
  initialState: {
    coords: {
      latitude: 0,
      longitude: 0
    }
  },
  reducers: {
    setLocation(state, action) {
      return action.payload;
    },
  },
});

export default configureStore({
  reducer: {
    placesList: placesList.reducer,
    searchedName: searchedName.reducer,
    selectedDate: selectedDate.reducer,
    selectedDates: selectedDates.reducer,
    selectedDotw: selectedDotw.reducer,
    selectedTime: selectedTime.reducer,
    location: location.reducer
  }
})

export const { setPlacesList } = placesList.actions;
export const { setSearchedName } = searchedName.actions;
export const { setSelectedDate } = selectedDate.actions;
export const { setSelectedDates } = selectedDates.actions;
export const { setSelectedDotw } = selectedDotw.actions;
export const { setSelectedTime } = selectedTime.actions;
export const { setLocation } = location.actions;