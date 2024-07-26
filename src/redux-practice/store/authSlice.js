import { createSlice } from "@reduxjs/toolkit";

// 인증 관련 초기 상태값
const initialAuthState = {
  isLoggedIn: false
};

// 인증 관련 슬라이스 추가
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.isLoggedIn = false;
    }
  }
});


// 단하나의 리덕스 스토어
// 스토어에는 여러 리듀서를 제공할 수 있다.

export const authActions = authSlice.actions;
export default authSlice.reducer;