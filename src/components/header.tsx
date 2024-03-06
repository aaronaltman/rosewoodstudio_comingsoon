import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PRIMARYNAVIGATION } from "@/constants/image-gallery";

export default function Header() {
  return (
    <header className="flex flex-col bg-zinc-50 h-75 w-full">
      <Link className="flex justify-center items-center w-full" href="/">
        <Image
          className="flex items-center justify-center"
          src="/logo-emerald.png"
          alt="logo"
          width={300}
          height={300}
        />
      </Link>
      <nav className="flex items-center justify-center ml-10 w-full py-4">
        <ul className="flex justify-center items-center space-x-8">
          {PRIMARYNAVIGATION.map((navItem) => (
            <li key={navItem.href}>
              <Link href={navItem.href}>
                <p className="text-gray-600 hover:text-gray-900">
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
