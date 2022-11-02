import React from 'react';
import { DetailsDataProps } from "../modules/modules";
import { JobInfo } from "./JobInfo";


export function DetailsCard({detailsData}: DetailsDataProps):JSX.Element {

    return (
        <div className="flex flex-col">
            <div className="flex flex-col w-[723px] ml-[348px]">
                <JobInfo infoData={detailsData} />
            </div>
        </div>
    );
};

