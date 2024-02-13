import Image from "next/image";
import React from "react";

type SingleCardProps = {
  url: {
    src: string;
    width: number;
    height: number;
  };
};

export default function SingleCard({ url }: SingleCardProps) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <Image
          src={url.src}
          alt="Shoes"
          width={url.width}
          height={url.height}
          className="rounded-t-lg object-cover w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-80"
        />
      </figure>
    </div>
  );
}
