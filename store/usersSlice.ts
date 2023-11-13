import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Users, UserInfo } from "@/types";
import axiosInstance from "@/helpers/axios";



// Define initial state
const initialState = {
    users: [] as UserInfo[],
    loading: 'idle',
    error: null,
};

// First, create the thunk
export const fetchUsers = createAsyncThunk('users/fetchusers', async () => {
    try {
        const { data } = await axiosInstance.get('/api/users');
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
    reducers: {
        filterUsers: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            console.log('SEARCH TERM: ', searchTerm);
            state.users = state.users.filter((user) => user.name.toLowerCase().includes(searchTerm));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state: any, action) => {
                state.loading = 'failed';
                state.error = action.payload;
            });
    }
});

export const { filterUsers } = usersSlice.actions;
export default usersSlice.reducer;