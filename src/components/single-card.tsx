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
        />
      </figure>
    </div>
  );
}
