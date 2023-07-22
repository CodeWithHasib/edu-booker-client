import React from 'react';

const ResearchPapers = () => {
    // Dummy data for research papers
    const researchPapers = [
        {
            id: 1,
            title: "Advancements in Artificial Intelligence",
            author: "John Doe",
            link: "https://example.com/paper1",
        },
        {
            id: 2,
            title: "Machine Learning Techniques for Data Analysis",
            author: "Jane Smith",
            link: "https://example.com/paper2",
        },
        {
            id: 3,
            title: "Blockchain Technology and its Applications",
            author: "Michael Johnson",
            link: "https://example.com/paper3",
        },
    ];

    return (
        <section className="py-12 px-6 md:px-12" data-aos="fade-up">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Research Papers</h2>
                <div className="grid grid-cols-3 gap-4">
                    {researchPapers.map((paper, isx) => (
                        <div key={paper.id}
                            data-aos="fade-up"
                            data-aos-delay={isx * 200}
                            className="bg-white rounded-md shadow-md p-4">
                            <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">Author: {paper.author}</p>
                            <a href={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                                Read Paper
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ResearchPapers;
