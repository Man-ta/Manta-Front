import { configureStore, createSlice } from '@reduxjs/toolkit'

/* redux store 예시 코드 */

// state들의 타입 지정
export type RootState = {
  name : string
}

const name = createSlice({
  name: 'name', 
  initialState: '이진우', // state의 첫 상태값

  // 리듀서 안에 state와 관련된 함수 작성(여러 개 가능)
  reducers: {
    setName(state, action) {  // state = state 그 자체, action = 파라미터
      return action.payload;  // setname 함수에 들어온 파라미터로 name state를 변경
    }
  }
})

export default configureStore({
  
  // 리듀서 안에 {state 이름}: {state 이름}.reducer와 같은 형식으로 하나하나 적어줘야 함
  reducer: {
    name: name.reducer
  }
})

// state와 관련된 함수 모두 하나하나 export 해줘야 함
export const { setName } = name.actions;