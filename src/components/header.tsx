import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PRIMARYNAVIGATION } from "@/constants/image-gallery";

export default function Header() {
  return (
    <header className="flex flex-col bg-[#FFFFF0] h-75 w-full">
      <Link className="flex justify-center items-center w-full" href="/">
        <Image
          className="object-contain w-75 h-[75]"
          src="https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/RoseWood_Main_FlowerandHome-emerald.png"
          alt="logo"
          width={300}
          height={300}
        />
      </Link>
      <nav className="flex items-center justify-center ml-10 w-full py-4">
        <ul className="flex flex-wrap justify-center items-center space-x-8">
          {PRIMARYNAVIGATION.map((navItem) => (
            <li key={navItem.href}>
              <Link href={navItem.href}>
                <p className="text-[#AD5F43] text-xl hover:text-gray-900">
                  {navItem.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
