import React from "react";

const Card = ({ pic, title, desc }) => {
  return (
    <div
      className="w-full max-w-3xl lg:w-3/6 xl:w-4/12
        p-2.5 m-5 border-2 border-black rounded-2xl"
    >
      <div className="bg-white">
        <div>
          <img src={pic} alt="big" className="w-full rounded-2xl" />
        </div>

        <div className="p-2.5">
          <div className="list-none">
            <span className="font-bold text-2xl">{title}</span>
          </div>
          <ul>
            <li className="list-none">
              <span className="text-base font-normal">{desc}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
