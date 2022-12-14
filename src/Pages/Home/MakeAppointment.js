import React from "react";
import doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-content items-center"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-110px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 lg:pr-24 py-10 px-8">
        <h1 className="text-secondary">Appointment</h1>
        <h1 className="text-2xl text-white my-4">Make an appointment today</h1>
        <p className="text-white mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
