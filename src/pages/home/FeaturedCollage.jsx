import React from 'react';

const FeaturedCollege = () => {
    // Dummy data for featured colleges
    const featuredColleges = [
        {
            id: 1,
            name: "ABC College",
            image: "https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg?w=740&t=st=1690013394~exp=1690013994~hmac=60b5bb6c8a4850b8a204516d6c656bf9cff1233fb852900763991f1ed4e49592",
            admissionDate: "August 15, 2023",
            events: ["Fresher's Party", "Tech Fest", "Sports Day"],
            researchHistory: "Established in 1950, one of the top research institutes.",
            sports: "Football, Basketball, Cricket",
        },
        {
            id: 2,
            name: "XYZ University",
            image: "https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg?w=740&t=st=1690013394~exp=1690013994~hmac=60b5bb6c8a4850b8a204516d6c656bf9cff1233fb852900763991f1ed4e49592",
            admissionDate: "September 1, 2023",
            events: ["Cultural Fest", "Science Exhibition", "Alumni Meet"],
            researchHistory: "Pioneering research center with cutting-edge facilities.",
            sports: "Tennis, Volleyball, Badminton",
        },
        {
            id: 3,
            name: "PQR Institute",
            image: "https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg?w=740&t=st=1690013394~exp=1690013994~hmac=60b5bb6c8a4850b8a204516d6c656bf9cff1233fb852900763991f1ed4e49592",
            admissionDate: "July 30, 2023",
            events: ["Annual Convocation", "Coding Competition", "Literary Fest"],
            researchHistory: "Renowned for innovative research and academic excellence.",
            sports: "Athletics, Swimming, Table Tennis",
        },
    ];

    return (
        <section className="bg-gray-100 py-12 px-6 md:px-12">
            <div className="max-w-4xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3">
                {featuredColleges.map((college) => (
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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCollege;
