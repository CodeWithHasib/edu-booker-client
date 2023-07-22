import React from 'react';

const CollegeReviewsSection = () => {
    // Dummy data for college reviews
    const collegeReviews = [
        {
            id: 1,
            college: "ABC College",
            review: "Excellent facilities and supportive faculty. Loved my time here!",
            rating: 4.5,
        },
        {
            id: 2,
            college: "XYZ University",
            review: "Great campus and diverse student community. Highly recommended!",
            rating: 4.8,
        },
        {
            id: 3,
            college: "PQR Institute",
            review: "Incredible research opportunities and top-notch education.",
            rating: 4.7,
        },
    ];

    return (
        <section className="py-12 px-6 md:px-12" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">College Reviews</h2>
                <div className="grid gap-4">
                    {collegeReviews.map((review) => (
                        <div key={review.id} className="bg-white rounded-md shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-2">{review.college}</h3>
                            <p className="text-sm text-gray-500 mb-2">{review.review}</p>
                            <div className="flex items-center">
                                <span className="text-yellow-500 text-lg">&#9733;</span>
                                <span className="ml-1 text-gray-600">{review.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollegeReviewsSection;
