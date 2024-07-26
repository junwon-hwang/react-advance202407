import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// 단하나의 리덕스 스토어
// 스토어에는 여러 리듀서를 제공할 수 있다.
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// 슬라이스 안에 reducers에 정의한 함수들을 내보내기

// 리액트의 index.js에게 store를 제공
export default store;