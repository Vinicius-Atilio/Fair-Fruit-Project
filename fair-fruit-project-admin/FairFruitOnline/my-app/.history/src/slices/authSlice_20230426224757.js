import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import { useSingUpContext } from 'common/contexts/Auth';

export default function AuthSlice() {

    const {userAuth} = useSingUpContext();


    const user = localStorage.getItem("user");

    const initialState = {
        user: user ? user : null,
        error: false,
        sucess: false,
        loading: false,
    }

    const register = createAsyncThunk("Auth/register", async (user, thunkAPI) => {
        const data = await userAuth(user);
        if(data.erros){
            return thunkAPI.rejectWithValue(data.erros)
        }

        return data;
    })

    const authCreateSlice = createSlice({
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
                })
            }
        })
    }



