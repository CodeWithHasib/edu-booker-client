import React from 'react';

const Hero = () => {
    return (
        <section className="bg-blue-600 text-white flex flex-col justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Welcome to CollegeConnect</h1>
                <p className="text-lg mb-8">Find your dream college and book services and facilities easily.</p>
                <div className="max-w-sm mx-auto">
                    <input
                        type="text"
                        placeholder="Search for a college name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md text-white font-semibold mt-4 w-full">Search</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;