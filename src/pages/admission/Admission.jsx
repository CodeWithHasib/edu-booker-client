import React, { useState } from 'react';
// import { useParams, useHistory } from 'react-router-dom';

const Admission = ({ college }) => {



    const [candidateData, setCandidateData] = useState({
        candidateName: '',
        subject: '',
        candidateEmail: '',
        candidatePhone: '',
        address: '',
        dateOfBirth: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCandidateData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to the server)
        console.log(candidateData);
        // Reset the form fields
        setCandidateData({
            candidateName: '',
            subject: '',
            candidateEmail: '',
            candidatePhone: '',
            address: '',
            dateOfBirth: '',
            image: '',
        });
        // Redirect back to the college details page after form submission
        // history.push(`/college/${id}`);
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
                                name="candidateName"
                                value={candidateData.candidateName}
                                onChange={handleInputChange}
                                required
                                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex w-full gap-3">
                        <div className='w-full'>
                            <label className="block text-sm font-medium text-gray-700">Candidate Email</label>
                            <input
                                type="email"
                                name="candidateEmail"
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
