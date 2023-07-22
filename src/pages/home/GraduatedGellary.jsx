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
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 10,
            }}
            className="flex"
          >
            {graduateImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Graduate ${index + 1}`}
                className="w-32 h-32 object-cover rounded-md mr-4"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GraduateGallery;
