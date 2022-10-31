import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IJobsData } from "../../modules/modules";


export const fetchJobs = createAsyncThunk(
    "jobs/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IJobsData[]>('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue("Something goes wrong")
        }
    }
)