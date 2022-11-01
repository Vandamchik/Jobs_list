import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IJobsData } from "../../modules/modules";


const BASE_URL = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
const ACCESS_TOKEN = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";

export const fetchJobs = createAsyncThunk(
    "jobs/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IJobsData[]>(`${BASE_URL}?access_token=${ACCESS_TOKEN}`)
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Something goes wrong")
        }
    }
)