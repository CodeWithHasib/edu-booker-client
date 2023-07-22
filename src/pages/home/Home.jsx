import React from 'react';
import Hero from './Hero';
import FeaturedCollege from './FeaturedCollage';
import GraduateGallery from './GraduatedGellary';
import ResearchPapers from './ResearchPapers';

const Home = () => {
    return (
        <section>
            <Hero />
            <FeaturedCollege />
            <GraduateGallery />
            <ResearchPapers />
        </section>
    );
};

export default Home;