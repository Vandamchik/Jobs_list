import React from 'react';
import { InfoDetailsProps } from "../modules/modules";
import { AdditionalInfo } from "./AdditionalInfo";
import { AttachedImages } from "./AttachedImages";
import { JobDescription } from "./JobDescription";

export function JobInfo({infoData}:InfoDetailsProps):JSX.Element {

    return (
        <>
            <JobDescription description={infoData}/>
            <AdditionalInfo info={infoData}/>
            <AttachedImages images={infoData?.pictures}/>
        </>
    );
};

