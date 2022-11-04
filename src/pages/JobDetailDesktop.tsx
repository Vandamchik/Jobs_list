import React, { useEffect } from 'react';
import {  useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchJobs } from "../store/reducers/actionCreator";
import { HomeButton } from "../components/HomeButton";
import { JobContacts } from "../components/JobContacts";
import { JobInfo } from "../components/JobInfo";


export function JobDetailDesktop():JSX.Element {
    const dispatch = useAppDispatch()
    const { details } = useParams();
    const { jobs, isLoading, error } = useAppSelector(state => state.jobsReducer)
    const jobIssues = jobs.find(el => el.id === details)


    useEffect(() =>{
        dispatch(fetchJobs())
    },[])

    return (
        <>
            { error && <h1 className="text-center mt-[50px] text-red-700 text-[40px] font-bold">{error}</h1> }
            { isLoading ?
                (<h1 className="text-center font-bold text-[40px] text-green-700 mt-[50px]">Loading...</h1>)
                :
                (<>
                    <div className="flex max-[1430px]:flex-col max-[1430px]:items-center">
                        <JobInfo infoData={jobIssues!} />
                        <JobContacts />
                    </div>
                    <HomeButton />
                </>)
            }
        </>
    );
}