import React from 'react';
import { ApplyButton } from "./ApplyButton";
import { JobInfoProps } from "../modules/modules";


export function JobDescription({ jobInfo }: JobInfoProps):JSX.Element {
    const postDate = jobInfo?.createdAt?.slice(0, 10);

    return (
        <>
            { jobInfo && <>
                <div className="flex mt-[56px] justify-between  border-b-2 border-[#3A4562] max-[625px]:flex-col max-[625px]:border-none max-[625px]:mb-[32px]">
                    <h2 className="text-[28px] font-bold max-[625px]:border-b-2 border-[#3A4562] max-[625px]:mb-[20px] max-[625px]:pb-[20px]">Jobs Details</h2>
                    <div className="flex justify-between w-[240px]">
                        <div className="flex justify-between w-[140px] items-center">
                            <svg
                                className="cursor-pointer"
                                width="19" height="23" viewBox="0 0 19 23" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M1.5 4.00016C1.5 2.5274 2.69391 1.3335 4.16667 1.3335H14.8333C16.3061 1.3335 17.5 2.5274 17.5 4.00016V19.9936C17.5 21.1595 16.109 21.7639 15.2567 20.9682L10.4099 16.4428C9.89761 15.9645 9.10239 15.9645 8.59007 16.4428L3.74327 20.9682C2.89104 21.7639 1.5 21.1595 1.5 19.9936V4.00016Z"
                                      stroke="#70778B" strokeWidth="2"/>
                            </svg>
                            <p>Save to my List</p>
                        </div>
                        <div className="flex justify-between w-[70px] items-center">
                            <svg
                                className="cursor-pointer"
                                width="19" height="20" viewBox="0 0 19 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M13.54 14.9096L6.41 10.743C6.46 10.512 6.5 10.2811 6.5 10.0402C6.5 9.7992 6.46 9.56827 6.41 9.33735L13.46 5.21084C14 5.71285 14.71 6.0241 15.5 6.0241C17.16 6.0241 18.5 4.67871 18.5 3.01205C18.5 1.34538 17.16 0 15.5 0C13.84 0 12.5 1.34538 12.5 3.01205C12.5 3.25301 12.54 3.48394 12.59 3.71486L5.54 7.84137C5 7.33936 4.29 7.02811 3.5 7.02811C1.84 7.02811 0.5 8.37349 0.5 10.0402C0.5 11.7068 1.84 13.0522 3.5 13.0522C4.29 13.0522 5 12.741 5.54 12.239L12.66 16.4157C12.61 16.6265 12.58 16.8474 12.58 17.0683C12.58 18.6847 13.89 20 15.5 20C17.11 20 18.42 18.6847 18.42 17.0683C18.42 15.4518 17.11 14.1365 15.5 14.1365C14.74 14.1365 14.06 14.4378 13.54 14.9096Z"
                                      fill="#70778B"/>
                            </svg>
                            <p>Share</p>
                        </div>
                    </div>
                </div>
                <div className="max-[625px]:hidden">
                    <ApplyButton />
                </div>
                <div className="flex justify-between mb-[7px]">
                    <div className="w-[400px] max-[625px]:w-full">
                        <p className="text-[24px] font-bold">{ jobInfo.title }</p>
                    </div>
                    <div className="flex flex-col max-[625px]:hidden">
                        <p className="text-[20px] font-bold">$ { jobInfo.salary }</p>
                        <p className="text-[18px] font-normal">Brutto,per year</p>
                    </div>
                </div>
                <p className="text-[18px] text-slate-400 mb-[7px] max-[625px]:hidden">Posted: { postDate! }</p>
                <div className="hidden my-[5px] max-[625px]:flex justify-between">
                    <div className="flex items-center">
                        <p className="text-[18px] text-slate-400 mb-[7px]">Posted: { postDate! }</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[20px] font-bold">$ { jobInfo.salary }</p>
                        <p className="text-[18px] font-normal">Brutto,per year</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-[18px]">Description:</span>
                        <p className="text-[18px] mb-[7px]">{ jobInfo.description }</p>
                    <span className="font-bold text-[18px]">Benefits:</span>
                    { jobInfo.benefits?.map((el:string,index:number) => <li key={ index } className="text-[18px]"> { el }</li>) }
                </div>
                <div className="max-[625px]:flex justify-center">
                    <ApplyButton />
                </div>
            </> }
        </>
    );
}