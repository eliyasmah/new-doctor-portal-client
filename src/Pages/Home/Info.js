import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 text-white">
      <InfoCard
        img={clock}
        cardTitle="Opening Hours"
        cardDetails="Lorem Ipsum is simply dummy text of the pri"
        className="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
      <InfoCard
        img={marker}
        cardTitle="Visit our location"
        cardDetails="Brooklyn, NY 10036, United States"
        className="bg-neutral"
      ></InfoCard>
      <InfoCard
        img={phone}
        cardTitle="Contact us now"
        cardDetails="01936261375"
        className="bg-gradient-to-r from-secondary to-primary"
      ></InfoCard>
    </div>
  );
};

export default Info;
