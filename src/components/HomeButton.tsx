import React from 'react';
import { Link } from "react-router-dom";


export function HomeButton():JSX.Element {

    return (
        <div className="flex w-[213px] h-[50px] rounded-[12px] justify-evenly bg-slate-400 justify-center items-center my-[100px] ml-[258px] max-[800px]:ml-[50px]">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M9.66053 0.401157C10.1272 0.915451 10.108 1.72975 9.61804 2.21833L3.37247 8.69844C3.21164 8.8613 3.21164 9.13559 3.37247 9.29845L9.62137 15.7786C10.1105 16.2671 10.128 17.0814 9.66053 17.5957C9.19305 18.1186 8.41725 18.1357 7.92894 17.6386L0.390931 9.96703C-0.114047 9.45274 -0.13238 8.61272 0.350933 8.08129L7.92894 0.358299C8.41809 -0.138852 9.19389 -0.113138 9.66053 0.401157Z"
                      fill="#384564"/>
            </svg>
            <Link to={`/`}>RETURN TO JOB BOARD</Link>
        </div>
    );
}