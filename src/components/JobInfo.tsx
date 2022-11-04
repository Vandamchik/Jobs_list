import React from 'react';
import { InfoDetailsProps } from "../modules/modules";
import { AdditionalInfo } from "./AdditionalInfo";
import { AttachedImages } from "./AttachedImages";
import { JobDescription } from "./JobDescription";

export function JobInfo({infoData}:InfoDetailsProps):JSX.Element {


    return (
            <div className="flex flex-col">
                <div className="flex flex-col w-[723px] ml-[348px] max-[1430px]:ml-[0px] max-[800px]:w-[600px] max-[625px]:w-[420px] max-[425px]:w-[300px]">
                    <JobDescription descriptionInfo={infoData}/>
                    <AdditionalInfo info={infoData}/>
                    <AttachedImages images={infoData?.pictures}/>
                </div>
            </div>
    );
}

