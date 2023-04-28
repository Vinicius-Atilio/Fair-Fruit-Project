import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import { useAuthContext } from 'common/contexts/Auth';
import apiService from "service/apiService";

async function AtSlice(user) {
    const {userAuth} = useAuthContext();
    console.log("AtSlice");
    return userAuth(user);
}


    // const {userAuth} = useAuthContext();

const user = localStorage.getItem("user");

const initialState = {
    user: user ? user : null,
    error: false,
    sucess: false,
    loading: false,
}

export const register = createAsyncThunk("Auth/register", async (user, thunkAPI) => {
    console.log("register");

    const data = await AtSlice(user);
    if(data.erros){
        return thunkAPI.rejectWithValue(data.erros)
    }

    return data;
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
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = false;
        }).addCase(register.fulfilled, (state, action) => {
            state.loading = false
            state.sucess = true;
            state.error = null;
            state.user = action.payload;
        }).addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user = null;
        })
    }
})

export const {reset} = authSlice.actions;
export const authReducer = authSlice.reducer;

