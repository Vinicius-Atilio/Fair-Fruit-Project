import { configureStore } from "@reduxjs/toolkit";
import useAtSliceContext from 'slices/slice';

function Store(params) {
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

