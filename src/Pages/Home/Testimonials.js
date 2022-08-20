import React from "react";
import quote from "../../assets/icons/quote.svg";
import photo1 from "../../assets/images/people1.png";
import photo2 from "../../assets/images/people2.png";
import photo3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
  const reviews = [
    {
      _id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: photo1,
      location: "California",
    },
    {
      _id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: photo2,
      location: "California",
    },
    {
      _id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: photo3,
      location: "California",
    },
  ];
  return (
    <section className="my-24">
      <div className="flex justify-between">
        <div>
          <h1 className="text-secondary font-bold text-xl">Testimonial</h1>
          <h2 className="text-3xl text-accent">What Our Patients Says</h2>
        </div>
        <div>
          <img className="w-[98px] lg:w-[192px]" src={quote} alt="quote" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
