import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="navbar bg-zinc-50">
      <Link href="/">
        <Image src="/logo-emerald.png" alt="logo" width={200} height={200} />
      </Link>
    </div>
  );
}
