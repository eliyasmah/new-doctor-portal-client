import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg shadow-xl">
      <div className="card-body mx-auto">
        <h2 className="card-title text-secondary text-xl font-medium">
          {name}
        </h2>
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
        <div className="card-actions justify-center pt-6">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
