import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';

const CollegeReviews = () => {
    // Dummy data for college reviews
    const [collegeReviews, setCollegeReviews] = useState([]);

    useEffect(() => {
        fetch('https://edu-booker.vercel.app/review')
            .then((res) => res.json())
            .then((data) => {
                setCollegeReviews(data);
            });
    }, []);

    return (
        <section className="py-12 px-6 md:px-12" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">College Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {collegeReviews.map((review) => (
                        <div key={review._id} className="bg-white rounded-md shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-2">{review.college}</h3>
                            <div className="flex items-center mb-2">
                                <StarRatings
                                    rating={review.rating}
                                    starRatedColor="gold"
                                    starEmptyColor="gray"
                                    starHoverColor="gold"
                                    starDimension="20px"
                                    starSpacing="2px"
                                />
                                <span className="ml-1 text-gray-600">{review.rating}</span>
                            </div>
                            <p className="text-sm text-gray-500 mb-2">{review.reviewText}</p>
                            <h1 className="mt-3 text-sm">
                                <span className="font-bold">By:</span> {review.name || 'anonymous'}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollegeReviews;
