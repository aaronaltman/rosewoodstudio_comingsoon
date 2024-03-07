import Image from "next/image";
import React from "react";

export default function IntroHero() {
  return (
    <section className="flex items-center justify-center">
      <Image
        src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/2024-vday-small-closeup5-scaled.jpg"
        alt="flowers"
        width={600}
        height={400}
        className="flex items-center justify-center object-contain py-10 px-4"
      />
    </section>
  );
}
