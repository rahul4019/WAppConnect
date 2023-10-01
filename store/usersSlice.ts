import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Users } from "@/types";

const initialState: Users = {
    users: []
};

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<Users>) => {
            return action.payload;
        }
    }
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;