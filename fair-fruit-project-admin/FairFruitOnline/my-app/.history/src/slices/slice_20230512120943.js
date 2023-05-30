import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import { useAuthContext } from 'common/contexts/Login';
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

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
    const res = await authService.auth(user);
    if(res.code === "ERR_BAD_RESPONSE"){
        return thunkAPI.rejectWithValue(res.response.data.message);
    }
    console.log(res);
    return res.data;
});

export const registerUser = createAsyncThunk("auth/register", async (user, thunkAPI) => {
    console.log("slice:" + user);
    const data = await authService.register(user);
    if(data.erros){
        return thunkAPI.rejectWithValue(data.erros)
    }
});

export const logout = createAsyncThunk("auth/logout", async () =>
{
    await authService.asyncAuthService.logout();
})

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        resetLogin: (state) => {
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
        resetRegister: (state) => {
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

export const {resetLogin} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
export const {resetRegister} = registerSlice.actions;
export const registerReducer = registerSlice.reducer;

