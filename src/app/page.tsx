import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-6 py-10 px-10">
      <h1 className="text-4xl">Under Construction: We’ll be blooming soon!</h1>
      <p className="text-4xl">Contact:</p>
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-3">
        <p className="text-3xl">
          Sasha Fierro:Lead Designer and Founder
          <br />
          Sasha@RosewoodStudioATL.com
        </p>
        <p className="text-3xl">
          {" "}
          Farris France Managing Partner Farris@RosewoodStudioATL.com
        </p>
      </div>
      <p className="text-3xl">Instagram: @RosewoodStudioATL</p>
    </div>
  );
}
