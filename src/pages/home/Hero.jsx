import React from 'react';
import bgImg from '../../assets/bg-img.jpg'
const Hero = () => {
    return (
        <section style={{ backgroundImage: `url(${bgImg})` }} className="bg-cover  text-white flex flex-col justify-center items-center min-h-screen">
            <div className="h-screen w-full bg-black bg-opacity-70 flex flex-col justify-center items-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to CollegeConnect</h1>
                    <p className="text-lg mb-8">Find your dream college and book services and facilities easily.</p>
                    <div className="max-w-sm mx-auto">
                        <input
                            type="text"
                            placeholder="Search for a college name"
                            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-white font-semibold mt-4 w-full">Search</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;