import React from 'react';


export function JobContacts(): JSX.Element  {

    return (
        <div className="flex flex-col mb-[20px] w-[730px] mx-[56px] max-[1430px]:items-center max-[1430px]:m-[0] max-[800px]:w-[600px] max-[625px]:w-[420px] max-[425px]:w-[300px]">
            <h3 className="invisible max-[1430px]:visible text-[28px] text-left w-full font-bold mb-[9px] border-b-2  border-[#3A4562]">Contacts</h3>
            <div className="invisible max-[1430px]:visible mt-[20px]">
                <img className="visible" src={require("../media/Contacts_section.png")} alt="contacts"/>
            </div>
        </div>
    );
}