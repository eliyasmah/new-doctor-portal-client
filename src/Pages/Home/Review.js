import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg shadow-xl mt-8">
      <div class="card-body">
        <p className="text-sm">{review.review}</p>
        <div class="flex items-center mt-8">
          <div class="avatar">
            <div class="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div className="ml-6">
            <h1 className="font-medium text-accent">{review.name}</h1>
            <h2 className="text-sm">{review.location}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
