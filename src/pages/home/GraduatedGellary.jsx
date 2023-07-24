import React from 'react';

const GraduateGallery = () => {
    
    const graduateImages = [
        'https://img.freepik.com/premium-photo/your-girl-just-got-qualified-portrait-young-woman-holding-her-diploma-graduation-day_590464-61542.jpg?w=740',
        'https://img.freepik.com/free-photo/happy-student-with-graduation-hat-diploma-grey_231208-12979.jpg?w=740&t=st=1690210497~exp=1690211097~hmac=24c144b6dc044ac0103357f2e29faaf5b1324f25fbebf539d185e90b5cf98570',
        'https://img.freepik.com/premium-photo/portrait-multiracial-graduates-holding-diploma-doing-selfie-phone-lifestule_115086-212.jpg?w=740',
        'https://img.freepik.com/free-photo/indian-graduate-graduation-robe-with-diploma-university-campus-copy-space_496169-1330.jpg?w=740&t=st=1690210567~exp=1690211167~hmac=88058a6dd147a21489fc854a6d928e0becd42585c30c6164422d8efd30b09298',
        'https://img.freepik.com/premium-photo/graduation-caps-thrown-happiness-success-cocnept_53876-27483.jpg?w=740',
    ];

    return (
        <section className="py-12 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">College Graduate Image Gallery</h2>
                <div className="flex md:flex-wrap flex-col lg:flex-row overflow-hidden space-x-4">
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
