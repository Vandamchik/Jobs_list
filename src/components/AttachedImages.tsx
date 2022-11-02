import React from 'react';
import { AttachedImagesProps } from "../modules/modules";

export function AttachedImages({images}: AttachedImagesProps):JSX.Element {

    return (
        <div className="flex flex-col">
            <h3 className="text-[28px] font-bold mb-[9px]">Attached images</h3>
            <div className="flex justify-between border-t-2 border-[#3A4562]">
                {images.map((el:string,index:number) =>
                    <img key={index} alt={`pict${index}`} src={el} className="my-[30px] w-[220px] h-[150px] rounded-[8px]"/>
                )}
            </div>
        </div>
    );
}
