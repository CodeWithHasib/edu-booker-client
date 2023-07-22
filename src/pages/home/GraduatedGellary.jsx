import React from 'react';
import { motion } from 'framer-motion';

const GraduateGallery = () => {
    // Dummy data for college graduate images
    const graduateImages = [
        'https://img.freepik.com/premium-photo/your-girl-just-got-qualified-portrait-young-woman-holding-her-diploma-graduation-day_590464-61542.jpg?w=740',
        'https://img.freepik.com/premium-photo/your-girl-just-got-qualified-portrait-young-woman-holding-her-diploma-graduation-day_590464-61542.jpg?w=740',
        'https://img.freepik.com/premium-photo/your-girl-just-got-qualified-portrait-young-woman-holding-her-diploma-graduation-day_590464-61542.jpg?w=740',
        'https://img.freepik.com/premium-photo/your-girl-just-got-qualified-portrait-young-woman-holding-her-diploma-graduation-day_590464-61542.jpg?w=740',
        'https://img.freepik.com/premium-photo/your-girl-just-got-qualified-portrait-young-woman-holding-her-diploma-graduation-day_590464-61542.jpg?w=740',
    ];

    return (
        <section className="py-12 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">College Graduate Image Gallery</h2>
                <div className="flex overflow-hidden space-x-4">
                    {graduateImages.map((image, index) => (
                        <div
                            key={index}
                            className="w-32 h-32 rounded-md"
                            data-aos="fade-up" 
                            data-aos-delay={index * 150} 
                        >
                            <div
                                className="w-full h-full rounded-md bg-cover bg-no-repeat bg-center hover:scale-105 transition duration-300 ease-in-out"
                                style={{ backgroundImage: `url(${image})` }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GraduateGallery;
