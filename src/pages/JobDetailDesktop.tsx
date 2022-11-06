import React, { useEffect } from 'react';
import {  useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchJobs } from "../store/reducers/actionCreator";
import { HomeButton } from "../components/HomeButton";
import { JobContacts } from "../components/JobContacts";
import { JobDescription } from "../components/JobDescription";
import { AdditionalInfo } from "../components/AdditionalInfo";
import { AttachedImages } from "../components/AttachedImages";


export function JobDetailDesktop():JSX.Element {
    const dispatch = useAppDispatch()
    const { details } = useParams();
    const { jobs, isLoading, error } = useAppSelector(state => state.jobsReducer)
    const jobIssues = jobs.find(el => el.id === details)

    useEffect(() => {
        dispatch(fetchJobs())
    },[])

    return (
        <>
            { error && <h1 className="text-center mt-[50px] text-red-700 text-[40px] font-bold">{ error }</h1> }
            { isLoading ?
                ( <h1 className="text-center font-bold text-[40px] text-green-700 mt-[50px]">Loading...</h1> )
                :
                ( <>
                    <div className="flex max-[1430px]:flex-col max-[1430px]:items-center">
                        <div className="flex flex-col">
                            <div className="flex flex-col w-[723px] ml-[348px] max-[1430px]:ml-[0px] max-[800px]:w-[600px] max-[625px]:w-[420px] max-[425px]:w-[300px]">
                                <JobDescription jobInfo={ jobIssues! } />
                                <AdditionalInfo jobInfo={ jobIssues! } />
                                <AttachedImages jobInfo={ jobIssues! } />
                            </div>
                        </div>
                        <JobContacts />
                    </div>
                    <HomeButton />
                </> )
            }
        </>
    );
}