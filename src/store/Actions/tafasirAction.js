import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hook/useGetData";

export const getAllTafasir = createAsyncThunk('tafasir/getTafasir', async () => {
    try {
        const response = await useGetData(`/api/v3/tafsir?language=ar`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error; // Re-throw for error handling in the reducer
    }
});