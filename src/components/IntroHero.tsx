import React from "react";

export default function IntroHero() {
  return (
    <div className="flex flex-col py-10 px-4">
      <h2 className="capitalize text-3xl text-center mb-10">
        we’re blooming: thank you for your patience
      </h2>
      <div className="flex flex-wrap justify-around">
        <div className="py-10 md:py-0">
          <p className="font-bold">Sasha Fierro</p>
          <p>Lead Designer and Founder</p>
          <a
            href="mailto:Sasha@RosewoodStudioATL.com"
            className="hover:underline"
          >
            Sasha@RosewoodStudioATL.com
          </a>
        </div>
        <div>
          <p className="font-bold">Farris France</p>
          <p>Managing Partner</p>
          <a
            href="mailto:Farris@RosewoodStudioATL.com"
            className="hover:underline"
          >
            Farris@RosewoodStudioATL.com
          </a>
        </div>
      </div>
    </div>
  );
}
