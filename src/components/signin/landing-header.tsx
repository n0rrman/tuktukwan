import Link from "next/link";
import Image from "next/image";

import logo from "/public/logo.png";
import { logoFont } from "@/app/fonts";

export default function LandingHeader() {
  return (
    <div className="grid grid-cols-2 w-full px-8 py-5 z-50 text-white">
      <Link
        href="/"
        className={`${logoFont.className} flex flex-col w-max justify-center items-center text-white cursor-pointer`}
      >
        <div className="relative w-12 h-10 -mb-1">
          <Image src={logo} alt="logo" fill />
        </div>
        <span className="text-xl">ทุกๆวัน</span>
      </Link>

      <div className="flex flex-row gap-8 items-center justify-self-end">
        <Link href="?login=login" className="font-semibold py-2 group">
          <span className="border-b-2 pb-1 border-transparent group-hover:border-white transition">
            Sign In
          </span>
        </Link>
        <Link
          href="?login=register"
          className="hidden sm:inline border-2 rounded-xl px-4 py-2.5 text-sky-700 font-semibold bg-white/90 border-white hover:bg-transparent hover:text-white transition"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
