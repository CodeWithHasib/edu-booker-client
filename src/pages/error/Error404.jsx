import React from 'react';

import errorBg from '../../assets/error.svg';
import { useNavigate } from 'react-router-dom';
const Error404 = () => {
    const navigate = useNavigate();
    return (
        <div className='flex justify-center items-center '>
            <div className="text-center flex justify-center items-center space-y-4 flex-col">
                <img src={errorBg} alt="error" className="w-[300px] " />
                <h1 className='text-3xl'>Page Not Found</h1>
                <button onClick={()=>navigate('/')} className='bg-blue-600 px-5 py-2 rounded-lg text-white font-bold'>Back To Home </button>
            </div>
        </div>
    );
};

export default Error404;