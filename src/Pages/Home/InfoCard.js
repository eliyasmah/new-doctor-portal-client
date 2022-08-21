import React from "react";

const InfoCard = ({ img, cardTitle, cardDetails, className }) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl ${className}`}>
      <figure className="pl-5">
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>{cardDetails}</p>
      </div>
    </div>
  );
};

export default InfoCard;
