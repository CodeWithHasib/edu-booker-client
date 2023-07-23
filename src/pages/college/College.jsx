import React, { useEffect, useState } from 'react';

const College = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/college')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])
    console.log(data)
    return (
        <div className='w-[80%] mx-auto mt-10 pt-10'>
            <div className="grid md:gap-5 my-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map((college, index) => (
                        <div key={college.id} className="bg-white rounded-md shadow-md p-4 md:p-6 flex flex-col justify-between h-full">
                            <div>
                                <img src={college.image} alt={college.name} className="w-full h-36 object-cover mb-4 rounded-md" />
                                <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
                                <p className="text-sm text-gray-500 mb-2">Admission Date: {college.admissionDate}</p>
                                <ul className="list-disc pl-6 mb-4">
                                    {college.events.map((event) => (
                                        <li key={event}>{event}</li>
                                    ))}
                                </ul>
                                <p className="text-sm text-gray-600 mb-4">{college.researchHistory}</p>
                                <p className="text-sm text-gray-600">Sports: {college.sports}</p>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-white font-semibold mt-4">Details</button>
                        </div>))
                }
            </div>
        </div>
    );
};

export default College;