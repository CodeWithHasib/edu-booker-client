import React from 'react';
import Hero from './Hero';
import FeaturedCollege from './FeaturedCollage';
import GraduateGallery from './GraduatedGellary';
import ResearchPapers from './ResearchPapers';
import CollegeReviews from './CollegeReview';

const Home = () => {
    return (
        <section>
            <Hero />
            <FeaturedCollege />
            <GraduateGallery />
            <ResearchPapers />
            <CollegeReviews />
        </section>
    );
};

export default Home;