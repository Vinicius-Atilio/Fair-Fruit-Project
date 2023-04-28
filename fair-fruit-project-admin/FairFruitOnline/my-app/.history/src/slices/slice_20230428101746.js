import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import { useAuthContext } from 'common/contexts/Auth';
import apiService from "service/apiService";
import asyncAuthService from "service/authService";



    // const {userAuth} = useAuthContext();

const user = localStorage.getItem("user");

const initialState = {
    user: user ? user : null,
    error: false,
    sucess: false,
    loading: false,
}

export const auth = createAsyncThunk("Auth/register", async (user, thunkAPI) => {
    console.log("register");

    const data = await asyncAuthService.asyncAuthService(user);
    console.log("data (slice): ", data);
    if(data.erros){
        return thunkAPI.rejectWithValue(data.erros)
    }

    return data;
});

export const logout = createAsyncThunk("auth/logout", async () =>
{
    await asyncAuthService.logout();
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.sucess = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(auth.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(auth.fulfilled, (state, action) => {
            state.loading = false
            state.sucess = true;
            state.error = null;
            state.user = action.payload;
        }).addCase(auth.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        }).addCase(logout.rejected, (state, action) => {
            state.loading = false;
            state.sucess = true;
            state.error = null;
            state.user = null;
        })
    }
})

export const {reset} = authSlice.actions;
export const authReducer = authSlice.reducer;

