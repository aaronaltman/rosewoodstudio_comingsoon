import Image from "next/image";
import React from "react";

export default function IntroHero() {
  return (
    <section className="flex items-center justify-center h-full">
      <Image
        src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/2024-vday-small-closeup5-scaled.jpg"
        alt="flowers"
        width={2560}
        height={1707}
        className="flex items-center justify-center max-w-[400px] py-10"
      />
    </section>
  );
}
