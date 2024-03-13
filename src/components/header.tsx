"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PRIMARYNAVIGATION } from "@/constants/image-gallery";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const shopPath = pathname.includes("/shop");
  const darkLogo =
    "https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/logo_dark.png";
  const lightLogo =
    "https://rosewoodstudio.wpenginepowered.com/wp-content/uploads/2024/03/RoseWood_Main_FlowerandHome-emerald.png";
  return (
    <>
      <div className="flex flex-col bg-[#FFFFF0]">
        <header className={shopPath ? `bg-[#A07A56]` : `bg-[#FFFFF0]`}>
          <Link className="flex justify-center items-center" href="/">
            <Image
              className="object-contain "
              src={shopPath ? darkLogo : lightLogo}
              alt="logo"
              width={300}
              height={300}
            />
          </Link>
          <nav className="flex flex-wrap items-center justify-center py-4">
            <ul className="flex flex-wrap justify-center items-center space-x-8">
              {PRIMARYNAVIGATION.map((navItem) => (
                <li key={navItem.href}>
                  <Link href={navItem.href}>
                    <p
                      className={
                        shopPath
                          ? `text-white text-xl hover:text-gray-900`
                          : `text-[#AD5F43] text-xl hover:text-gray-900`
                      }
                    >
                      {navItem.label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
