import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card lg:max-w-lg shadow-xl">
      <div class="card-body mx-auto">
        <h2 class="card-title text-secondary text-xl font-medium">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-small text-red-600">"try another day"</span>
          )}
        </p>
        <p>
          {slots.length}{" "}
          {slots.length > 1 ? "spaces available" : "space available"}
        </p>
        <div class="card-actions justify-center pt-6">
          <button class="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
