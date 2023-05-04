import { configureStore } from "@reduxjs/toolkit";
import useAtSliceContext from 'slices/slice';

function Store() {
    const {authReducer} = useAtSliceContext();
    return authReducer;
}

export const store = configureStore({
    reducer: {
        auth: Store(),
    },
});