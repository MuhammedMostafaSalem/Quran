import { configureStore } from "@reduxjs/toolkit";
import recitersReducer from "./Reducers/recitersReducer";
import livTvReducer from "./Reducers/livTvReducer";

export const store = configureStore({
    reducer: {
        reciters: recitersReducer,
        livTv: livTvReducer
    },
    devTools: true,
})