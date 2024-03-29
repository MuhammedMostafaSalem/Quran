import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hook/useGetData";

export const getAllLive = createAsyncThunk('livTv/getAllLive', async () => {
    try {
        const response = await useGetData(`https://mp3quran.net/api/v3/live-tv?language=ar`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error; // Re-throw for error handling in the reducer
    }
});