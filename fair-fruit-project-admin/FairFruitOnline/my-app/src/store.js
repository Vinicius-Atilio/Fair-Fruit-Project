import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "slices/slice";

export const store = configureStore({
    reducer: {
        auth: loginReducer,
    },
});