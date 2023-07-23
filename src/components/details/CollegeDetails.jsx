import React from 'react';
import { useParams } from 'react-router-dom';

const CollegeDetails = ({ college  }) => {
    // const { id } = useParams();
    // const college = colleges.find((college) => college._id === parseInt(id));

    if (!college) {
        return <div>College not found</div>;
    }

    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-3xl font-semibold mb-4">{college.name}</h2>
                <img src={college.image} alt={college.name} className="w-full h-auto mb-4 rounded-lg" />
                <p>Admission Date: {college.admissionDate}</p>
                <h3 className="mt-4">Events</h3>
                <ul>
                    {college.events.map((event) => (
                        <li key={event}>{event}</li>
                    ))}
                </ul>
                <h3 className="mt-4">Research History</h3>
                <p>{college.researchHistory}</p>
                <h3 className="mt-4">Sports</h3>
                <p>{college.sports}</p>

                {/* Additional Details Section */}
                <h3 className="mt-4">Details</h3>
                <div>
                    <h4 className="mt-2">Images</h4>
                    <div className="flex flex-wrap">
                        {college.details.images.map((image, index) => (
                            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-2">
                                <img src={image} alt={`Image ${index + 1}`} className="w-full rounded-lg" />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h4 className="mt-2">Admission Process</h4>
                    <p>{college.details.admissionProcess}</p>
                </div>
                <div>
                    <h4 className="mt-2">Events Details</h4>
                    <p>{college.details.eventsDetails}</p>
                </div>
                <div>
                    <h4 className="mt-2">Research Works</h4>
                    <p>{college.details.researchWorks}</p>
                </div>
                <div>
                    <h4 className="mt-2">Sports Categories</h4>
                    <p>{college.details.sportsCategories}</p>
                </div>

                {/* Admission Button */}
                <div className="flex justify-center mt-6">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
                        Apply for Admission
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetails;
