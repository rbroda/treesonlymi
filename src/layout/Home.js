import React from "react";
import Trees from "../assets/trees.jpg";

export default function Home() {
  return (
    <div className="min-h-full bg-gray-100 font-body">
      <div className="h-screen flex flex-col	">
        <div
          className="
            relative flex items-center justify-center h-full
            bg-cover bg-center bg-fixed bg-no-repeat
          "
          style={{
            backgroundImage: `url(${Trees})`,
          }}
        >
          <div
            className="
              z-0 absolute -top-0 -left-0 h-full w-full bg-black opacity-40
            "
          />
        </div>
      </div>
    </div>
  );
}
