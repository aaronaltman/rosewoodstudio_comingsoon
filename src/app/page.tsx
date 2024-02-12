"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 500); // Fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen py-10 px-10 overflow-hidden ">
      <div
        className="z-10 flex flex-col items-center space-y-6 bg-white bg-opacity-90 backdrop-filter backdrop-blur-md p-10 rounded-lg shadow-xl"
        style={{ opacity }}
      >
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Under Construction: We’ll be blooming soon!
        </h1>
        <p className="text-2xl font-semibold text-gray-700">Contact:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-600">
            Sasha Fierro: Lead Designer and Founder
            <br />
            <a
              href="mailto:Sasha@RosewoodStudioATL.com"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              Sasha@RosewoodStudioATL.com
            </a>
          </p>
          <p className="text-xl text-gray-600">
            Farris France: Managing Partner
            <br />
            <a
              href="mailto:Farris@RosewoodStudioATL.com"
              className="text-blue-500 hover:text-blue-600 transition duration-300"
            >
              Farris@RosewoodStudioATL.com
            </a>
          </p>
        </div>
        <p className="text-3xl text-gray-800">
          Instagram:{" "}
          <a
            href="https://instagram.com/RosewoodStudioATL"
            className="text-blue-500 hover:text-blue-600 transition duration-300"
          >
            @RosewoodStudioATL
          </a>
        </p>
      </div>
    </div>
  );
}
