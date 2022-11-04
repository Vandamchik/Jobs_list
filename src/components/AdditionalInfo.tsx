import React from 'react';
import { AdditionalInfoProps } from "../modules/modules";


export function AdditionalInfo({info}: AdditionalInfoProps):JSX.Element {
    const {employment_type, benefits} = info;

    return (
        <div className="flex flex-col mt-[20px]">
            <h3 className="text-[28px] font-bold mb-[9px]">Additional info</h3>
            <div className="flex flex-col justify-between border-t-2 border-[#3A4562]">
                <p className="text-[18px] my-[10px]">Employment type</p>
                <div className="flex justify-evenly max-[625px]:flex-wrap">
                    {employment_type.map((el:string,index:number) =>
                        <div
                            key={index}
                            className=" flex justify-center items-center py-[15px] w-[220px] bg-slate-400 text-[#55699E] font-bold border-cyan-700 border-2 rounded-[8px] max-[625px]:w-[150px] max-[425px]:w-[130px]"
                        >
                            {el}
                        </div> )}
                </div>
                <p className="text-[18px] my-[10px]">Benefits</p>
                <div className="flex justify-evenly  max-[625px]:flex-wrap">
                    {benefits.map((el:string,index:number) =>
                        <div
                            key={index}
                            className=" flex justify-center items-center py-[15px] w-[220px] bg-yellow-200 text-[#988B49] font-bold border-[#FFCF00] border-2 rounded-[8px] max-[625px]:w-[150px] max-[425px]:w-[130px]"
                        >
                            {el}
                        </div> )}
                </div>
            </div>
        </div>
    );
};
