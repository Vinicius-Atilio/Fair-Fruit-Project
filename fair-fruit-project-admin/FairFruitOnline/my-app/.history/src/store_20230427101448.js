import { Slice } from "./slices/slice.js";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        auth: Slice,
    },
});