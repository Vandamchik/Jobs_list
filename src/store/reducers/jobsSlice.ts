import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchJobs } from './actionCreator'
import { IJobsData, JobsState } from "../../modules/modules";

const initialState: JobsState = {
    jobs: [],
    isLoading: false,
    error: "",
}

export const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchJobs.fulfilled.type]: (state, action: PayloadAction<IJobsData[]>) => {
            state.isLoading = false;
            state.error = "";
            state.jobs = action.payload;
        },
        [fetchJobs.pending.type]: (state) => {
            state.isLoading = true;
        },
        [fetchJobs.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export const jobsReducer = jobsSlice.reducer;