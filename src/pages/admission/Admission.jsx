import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
// import { useParams, useHistory } from 'react-router-dom';

const Admission = ({ college }) => {

    const { user } = useAuth();



    const handleSubmit = (e) => {
        e.preventDefault();
        const from = new FormData(e.target);
        const data = Object.fromEntries(from);
        console.log(data);
        // fetch(`http://localhost:5000/admission`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data),
        // })
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result);
        //     })

    };

    if (!college) {
        return <div>College not found</div>;
    }

    return (
        <div className="
         py-8 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center mb-4">Apply for Admission to {college.name}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex gap-3 w-full">
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Candidate Name</label>
                            <input
                                type="text"
                                defaultValue={user?.displayName}
                                name="candidateName"
                                readOnly
                                title='You cannot change your name'
                                required
                                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Candidate Email</label>
                            <input
                                type="email"
                                defaultValue={user?.email}
                                readOnly
                                title='You cannot change your email address'
                                name="email"
                                required
                                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex w-full gap-3">
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Candidate Phone</label>
                            <input
                                type="tel"
                                name="candidatePhone"
                                required
                                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                    </div>

                    <div className='w-full'>
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            required
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Optional Details</label>
                        <input
                            type="text"
                            name="additionalDetails"
                            className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Admission;
