import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { jobsReducer } from './reducers/jobsSlice'

const rootReducer = combineReducers({
    jobsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']