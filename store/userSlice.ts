import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInfo } from "@/types";

const initialState = {
    userInfo: {
        _id: '',
        name: '',
        email: '',
        pic: ''
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserInfo>) => {
            state.userInfo = action.payload;
        }
    }
});

export const { setUserInfo } = userSlice.actions;

export default userSlice.reducer;   