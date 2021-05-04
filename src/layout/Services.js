import React from "react";
import Card from "../components/Card";
import Photo from "../assets/MainPage.png";

function Services() {
  return (
    <div
      className="flex flex-col items-center text-4xl font-bold pt-20"
      id="Services"
    >
      <h1 className="text-4xl font-bold pb-10">Services</h1>
      <div className="min-h-full max-w-full justify-around flex flex-row flex-wrap lg:flex-nowrap z-1">
        <Card
          pic={Photo}
          title="Tree Trimming"
          desc="Light/Heavy Elevation, Clean-out, Weight Reduction."
        />
        <Card
          pic={Photo}
          title="Tree Removal"
          desc="Individual or Group Tree Removal, Stump Grinding, Brush Clearing."
        />
        <Card
          pic={Photo}
          title="Lot Clearance"
          desc="Forestry, Land Clearing."
        />
      </div>
    </div>
  );
}

export default Services;
