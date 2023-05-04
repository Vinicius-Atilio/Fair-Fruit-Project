import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import { useAuthContext } from 'common/contexts/Auth';
import apiService from "service/apiService";
import authService from "service/authService";



    // const {userAuth} = useAuthContext();

const user = localStorage.getItem("user");

const initialState = {
    user: user ? user : null,
    error: false,
    sucess: false,
    loading: false,
}

export const login = createAsyncThunk("Auth/register", async (user, thunkAPI) => {
    const data = await authService.auth(user);
    if(data.erros){
        return thunkAPI.rejectWithValue(data.erros)
    }

    return data;
});

export const register = createAsyncThunk("Auth/register", async (user, thunkAPI) => {
    const data = await authService.register(user);
    if(data.erros){
        return thunkAPI.rejectWithValue(data.erros)
    }

    return data;
});

export const logout = createAsyncThunk("auth/logout", async () =>
{
    await authService.asyncAuthService.logout();
})

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.sucess = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.sucess = true;
            state.error = null;
            state.user = action.payload;
        }).addCase(login.rejected, (state, action) => {
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

export const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.sucess = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.sucess = true;
            state.error = null;
            state.user = action.payload;
        }).addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        })
    }
})

export const {reset} = loginSlice.actions;
export const authReducer = loginSlice.reducer;

