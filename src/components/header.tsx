"use client";

import { logoFont } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import { signOut } from "@/services/api/user-client";

export default function Header() {
  return (
    <header className="fixed flex flex-row justify-between items-center w-full py-4 px-10 shadow-lg shadow-slate-400/20 bg-slate-200">
      <Link
        href="/"
        className={`${logoFont.className} flex flex-col w-max justify-center items-center text-slate-800 cursor-pointer`}
      >
        <div className="relative w-12 h-10 -mb-1">
          <Image src={logo} alt="logo" fill />
        </div>
        <span className="text-xl">ทุกๆวัน</span>
      </Link>
      <div className="flex flex-row gap-5">
        <button
          className="bg-red-500"
          onClick={async () => {
            await signOut();
            window.location.reload();
          }}
        >
          Logout
        </button>
        <div className="w-16 text-center">Learn</div>
        <div className="w-16 text-center">Review</div>
        <div className="w-16 text-center">Profile</div>
      </div>
    </header>
  );
}
