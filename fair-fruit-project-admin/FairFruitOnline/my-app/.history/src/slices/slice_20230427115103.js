import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import { createContext, useState, useContext } from 'react';
import { useAuthContext } from 'common/contexts/Auth';
import apiService from "service/apiService";

export const AtSliceContext = createContext();
AtSliceContext.displayName = 'Slice';

export default function useAtSliceContext() {
    const {userAuth} = useAuthContext();

    const user = localStorage.getItem("user");

    const initialState = {
        user: user ? user : null,
        error: false,
        sucess: false,
        loading: false,
    }

    
    const register = createAsyncThunk("Auth/register", async (user, thunkAPI) => {
        console.log("register");

        const data = await userAuth(user);
        console.log(data);
        if(data.erros){
            return thunkAPI.rejectWithValue(data.erros)
        }

        return data;
    })

    const authSlice = createSlice({
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
    const {reset} = authSlice.actions;
    const authReducer = authSlice.reducer;
    
    return register;
}


    // const {userAuth} = useAuthContext();





