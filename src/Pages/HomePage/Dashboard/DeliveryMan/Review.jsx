import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import useAuth from "../../../../hooks/useAuth";


const Review = () => {
const axiosPublic =useAxiosPublic()
const {user} = useAuth()

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews", user.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/reviews?email=${user.email}`);


      return res.data;
    },
  });

console.log(reviews)

//   const reviews = [
//     {
//       id: 1,
//       reviewerName: 'Alice Johnson',
//       reviewerImage: '/images/user-avatar-1.jpg',
//       reviewDate: 'December 15, 2023',
//       rating: 4,
//       feedback: 'Great service! The delivery was on time and the package arrived in perfect condition.',
//     },
//     {
//       id: 2,
//       reviewerName: 'Bob Smith',
//       reviewerImage: '/images/user-avatar-2.jpg',
//       reviewDate: 'December 12, 2023',
//       rating: 5,
//       feedback: 'Excellent delivery experience. The delivery man was friendly and professional.',
//     },
    // Add more reviews as needed
//   ];

  return (
    <div className="my-reviews-page p-8">
      <h1 className="text-4xl font-bold mb-8">My Reviews</h1>
      {reviews.map((review) => (
        <div key={review._id} className="review-card bg-white rounded-md p-6 mb-6 shadow-md">
          <div className="flex items-center mb-4">
            <img className="rounded-full w-12 h-12 object-cover mr-4" src={review.image} alt={review.name} />
            <div>
              <h2 className="text-xl font-bold">{review.reviewerName}</h2>
              <p className="text-gray-500">{review.reviewDate}</p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            {/* Display rating stars */}
            {Array.from({ length: review.rating }, (_, index) => (
              <span key={index} className="text-yellow-500 mr-1">&#9733;</span>
            ))}
          </div>
          <p>{review.feedback}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
