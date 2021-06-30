import React from "react";
import Card from "../components/Card";
import Removal from "../assets/removal.jpg";
import Trimming from "../assets/trimming.jpg";
import Clearing from "../assets/clearing.jpg";

function Services() {
  return (
    <div
      className="flex flex-col items-center text-4xl font-bold pt-20 h-100vh"
      id="Services"
    >
      <h1 className="text-4xl font-bold pb-10">Services</h1>
      <div className="min-h-full max-w-full justify-around flex flex-row flex-wrap lg:flex-nowrap z-1">
        <Card
          pic={Trimming}
          title="Tree Trimming"
          desc="Light/Heavy Elevation, Clean-out, Weight Reduction."
        />
        <Card
          pic={Removal}
          title="Tree Removal"
          desc="Individual or Group Tree Removal, Stump Grinding, Brush Clearing."
        />
        <Card
          pic={Clearing}
          title="Lot Clearance"
          desc="Forestry, Land Clearing."
        />
      </div>
    </div>
  );
}

export default Services;
