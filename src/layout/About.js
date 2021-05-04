import React from "react";
import Photo from "../assets/MainPage.png";

function About() {
  return (
    <div
      className="flex flex-col items-center text-4xl font-bold pt-20"
      id="About"
    >
      <div className="max-w-prose items-center flex flex-col flex-wrap">
        <h1 className="text-4xl font-bold pb-10">About Us</h1>
        <div className="px-5">
          <img src={Photo} alt="big" className="w-full rounded-full" />
        </div>
        <p className="text-base md:text-2xl text-center font-normal pt-5 px-5">
          Trees Only MI is a family-owned and operated company offering
          excellent customer service and a genuine care for our clients'
          property and safety. Our skilled and knowledgeable crew, along with
          our equipment, allow us to complete projects quickly, professionally,
          and safely.
        </p>
      </div>
    </div>
  );
}

export default About;
