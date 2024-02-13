import { InstagramIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-between mt-auto footer items-center p-4 bg-[#ADBFAB]text-neutral-content border border-top">
      <div className="flex justify-center items-center gap-x-10">
        <Image src="/logo-white.png" alt="logo" width={80} height={80} />
        <p className="font-lato">Copyright © 2024 - All right reserved</p>
      </div>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://instagram.com/Rosewoodstudioatl">
          <InstagramIcon size={35} />
        </a>
      </nav>
    </footer>
  );
}
