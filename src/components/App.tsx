import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchJobs } from "../store/reducers/actionCreator";


export function App():JSX.Element {
    const dispatch = useAppDispatch()
    const {jobs, isLoading, error} = useAppSelector(state => state.jobsReducer)

    useEffect(() =>{
        dispatch(fetchJobs())
    },[])

    console.log(jobs)


  return (
    <div className='text-red-400'>
     work
    </div>
  );
}
