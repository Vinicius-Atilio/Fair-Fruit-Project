import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "slices/slice";

export const store = configureStore({
    reducer: {
        auth: null,
    },
});