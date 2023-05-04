import { configureStore } from "@reduxjs/toolkit";
import useAtSliceContext from 'slices/slice';

export default function Store(params) {
    const {authReducer} = useAtSliceContext();

    const store = configureStore({
        reducer: {
            auth: authReducer,
        },
    });
    
    return {
        store,
    }

}

