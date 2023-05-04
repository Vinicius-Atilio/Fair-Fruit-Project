import { createAsyncThunk, createSlice, isAsyncThunkAction } from "@reduxjs/toolkit";
import { useAuthContext } from 'common/contexts/Auth';

function AtSlice() {
    // const {userAuth} = useAuthContext();

    const user = localStorage.getItem("user");

    const initialState = {
        user: user ? user : null,
        error: false,
        sucess: false,
        loading: false,
    }

    const register = createAsyncThunk("Auth/register", async (user, thunkAPI) => {
        const data = await null(user);
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

        // return {
        //     initialState,
        //     register,
        //     authSlice,
        //     reset,
        //     authReducer
        // }
    }

export default AtSlice;

