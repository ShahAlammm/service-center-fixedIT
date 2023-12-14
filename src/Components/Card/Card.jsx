// import { Typography } from "@mui/material";

import { Rating } from "@mui/material";

const Card = ({ item }) => {
  const { name, image, averageRatings, parcelsDelivered } = item || {};
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4"></div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-28 h-28 mb-3 rounded-full shadow-lg"
          src={image}
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Product Repair :{" "}
          <span className="text-red-600 font-bold">{parcelsDelivered}</span>
        </span>
        <div className="flex mt-4 md:mt-6">
          <Rating name="half-rating-read" defaultValue={averageRatings} precision={0.5} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Card;
