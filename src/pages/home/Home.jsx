import React from 'react';
import Hero from './Hero';
import FeaturedCollege from './FeaturedCollage';
import GraduateGallery from './GraduatedGellary';

const Home = () => {
    return (
        <section>
            <Hero />
            <FeaturedCollege />
            <GraduateGallery />
        </section>
    );
};

export default Home;