import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JJCX",
  description: "Frontend Development portfolio",
  openGraph: {
    type: "website",
    title: "JJCX",
    description: "Frontend Development portfolio",
    images: [
      {
        url: "https://i.ibb.co/yQVTbz1/Screenshot-2023-10-09-at-2-44-28-AM.png",
      },
    ],
  },
};

export default function Hero() {
  return (
    <div className="flex flex-col justify-center text-center" id="home">
      <div className="flex justify-between">
        <div></div>
        <div className="flex flex-col w-full text-clamp-xs items-center text-center">
          <h1 className="font-poppins text-center text-clamp-xl font-bold uppercase text-white">
            Justin<span className="font-light ml-1">Chambers</span>
          </h1>
          <h2 className="font-poppins text-center text-clamp-sm font-light uppercase text-white">
            Frontend Developer
          </h2>
        </div>
        <div></div>
      </div>
    </div>
  );
}
