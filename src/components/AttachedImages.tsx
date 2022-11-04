import React from 'react';
import { AttachedImagesProps } from "../modules/modules";


export function AttachedImages({images}: AttachedImagesProps):JSX.Element {

    return (
        <div className="flex flex-col mt-[50px]">
            <h3 className="text-[28px] font-bold mb-[9px]">Attached images</h3>
            <div className="flex justify-between border-t-2 border-[#3A4562]">
                {images.map((el:string,index:number) =>
                    <img key={index} alt={`pict${index}`} src={el} className="my-[30px] w-[220px] h-[150px] rounded-[8px] max-[800px]:w-[170px] max-[625px]:w-[130px] max-[425px]:w-[90px] max-[425px]:h-[100px]"/>
                )}
            </div>
        </div>
    );
}
