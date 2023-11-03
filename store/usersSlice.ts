import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users } from "@/types";
import axiosInstance from "@/helpers/axios";



// Define initial state
const initialState = {
    users: [],
    loading: 'idle',
    error: null,
};

// First, create the thunk
export const fetchUsers = createAsyncThunk('users/fetchusers', async () => {
    try {
        const { data } = await axiosInstance.get('http://localhost:3000/api/users');
        return data.users;
    } catch (error) {
        throw error;
    }
});



export const usersSlice = createSlice({
    name: 'users',
    initialState,
    // reducers: {
    //     setUsers: (state, action: PayloadAction<Users>) => {
    //         return action.payload;
    //     }
    // }
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = 'failed';
                state.error = action.payload;
            });
    }
});


export default usersSlice.reducer;