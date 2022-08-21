import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      class="hero min-h-screen"
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt="img" />
        <div>
          <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p class="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
