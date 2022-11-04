import React from 'react';
import { Route, Routes } from "react-router-dom";
import { JobBoardDesktop } from "../pages/JobBoardDesktop";
import { JobDetailDesktop } from "../pages/JobDetailDesktop";


export function App():JSX.Element {

  return (
    <>
        <Routes>
            <Route path='/' element={ <JobBoardDesktop /> } />
            <Route path='/:details' element={ <JobDetailDesktop /> } />
        </Routes>
    </>
  );
}
