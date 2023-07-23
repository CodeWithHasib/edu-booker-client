import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Admission from './Admission';

const AdmissionWrapper = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className='mt-10 pt-10 bg-gray-200'>
            <Admission college={data}/>
        </div>
    );
};

export default AdmissionWrapper;