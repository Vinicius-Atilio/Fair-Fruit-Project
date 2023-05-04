import { createAsyncThunk, isAsyncThunkAction } from "@reduxjs/toolkit";
import { useSingUpContext } from 'common/contexts/Auth';

export default function AuthSlice(params) {

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
    
}

