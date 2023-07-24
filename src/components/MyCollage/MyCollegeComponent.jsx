import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';

const MyCollegeComponents = ({userData}) => {
  const { id } = useParams();

  // Assuming you receive the user data as props or fetch it from the backend
//   const userData = {
//     _id: "64be1bb816a7944673a9ea62",
//     candidateName: "Md . Rakibul Islam",
//     email: "boraborhasib@gmail.com",
//     subject: "Test ",
//     candidatePhone: "01319373523",
//     address: "pabna, Ishwardi",
//     additionalDetails: "Test",
//     college: {
//       name: "ABC College",
//       id: "64bcbc0e16abffa85217aafe",
//       image: "https://img.freepik.com/premium-photo/students-standing-with-open-books-looking-camera_23-2148166405.jpg?w=740"
//     }
//   };

  const [reviewData, setReviewData] = useState({
    rating: 0,
    reviewText: '',
  });
  console.log(reviewData)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRatingChange = (newRating) => {
    setReviewData((prevState) => ({
      ...prevState,
      rating: newRating,
    }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Handle review submission here (e.g., send data to the server)
    console.log(reviewData);
    // Reset the review form fields
    setReviewData({
      rating: 0,
      reviewText: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold mb-4">{userData.college.name}</h2>
          <img src={userData.college.image} alt={userData.college.name} className="w-96 h-64 object-cover rounded-lg mx-auto mb-4" />
          <p className="text-gray-600 mb-2">Candidate Name: {userData.candidateName}</p>
          <p className="text-gray-600 mb-2">Email: {userData.email}</p>
          <p className="text-gray-600 mb-2">Subject: {userData.subject}</p>
          <p className="text-gray-600 mb-2">Phone: {userData.candidatePhone}</p>
          <p className="text-gray-600 mb-2">Address: {userData.address}</p>
          <p className="text-gray-600 mb-2">Additional Details: {userData.additionalDetails}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Add a Review</h2>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                value={reviewData.rating}
                onChange={handleRatingChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Review</label>
              <textarea
                name="reviewText"
                value={reviewData.reviewText}
                onChange={handleInputChange}
                required
                rows="4"
                className="mt-1 p-2 w-full border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyCollegeComponents;
