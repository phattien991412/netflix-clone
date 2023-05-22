import { createSlice } from "@reduxjs/toolkit";

const UserInfo = createSlice({
  name: "user",
  initialState: {userInfo: {}},
  reducers: {
    user: (state, action) => {
      state.userInfo = action.payload
    },

    logout: (state, actions) => {
      state.userInfo = {}
    },

    updateUser:  (state, action) => {
      const {type, value} = action.payload;
      state.userInfo = {...state.userInfo, [type]: value}
    }

  }
});

const { reducer, actions } = UserInfo;
export const { user, logout, updateUser } = actions;
export default reducer;
