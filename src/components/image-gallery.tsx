import React from "react";
import SingleCard from "./single-card";
import { IMAGEURLS } from "@/constants/image-gallery";

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 py-4 px-4 gap-x-6 gap-y-6 mb-10">
      {IMAGEURLS.map((url) => (
        <SingleCard key={url.src} url={url} />
      ))}
    </div>
  );
}
