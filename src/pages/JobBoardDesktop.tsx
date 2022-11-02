import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchJobs } from "../store/reducers/actionCreator";
import { JobsCard } from "../components/JobsCard";
import { IJobsData } from "../modules/modules";

export function JobBoardDesktop():JSX.Element {
    const dispatch = useAppDispatch()
    const {jobs, isLoading, error} = useAppSelector(state => state.jobsReducer)

    useEffect(() =>{
        dispatch(fetchJobs())
    },[])


    return (
        <>
            { error && <h1 className="text-center mt-[50px] text-red-700 text-[40px] font-bold">{error}</h1> }
            {isLoading ?
                (<h1 className="text-center font-bold text-[40px] text-green-700 mt-[50px]">Loading...</h1>)
                :
                <div className="bg-[#F5F5F5] pt-[29px]">
                    <div className="flex flex-col mx-[260px]">
                        {jobs.map((el:IJobsData) => <JobsCard key={el.id} jobsData={el}/>)}
                    </div>
                </div>
            }
        </>
    );
}

