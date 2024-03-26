import { configureStore } from "@reduxjs/toolkit";
import recitersReducer from "./Reducers/recitersReducer";

export const store = configureStore({
    reducer: {
        reciters: recitersReducer,
    },
    devTools: true,
})