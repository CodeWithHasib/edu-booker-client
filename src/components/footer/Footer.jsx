import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer className="bg-gray-800 py-6 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-semibold">CollegeConnect</h2>
                        <p className="text-sm">Your One-Stop College Booking Platform</p>
                    </div>
                    <div className="flex mt-4 md:mt-0">
                        <a
                            href="#"
                            className="mr-4 hover:text-gray-500 transition-colors duration-300"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="mr-4 hover:text-gray-500 transition-colors duration-300"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-gray-500 transition-colors duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
