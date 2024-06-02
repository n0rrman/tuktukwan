import Image from "next/image";

import landingBg from "/public/landing-bg.svg";
import cloud1 from "/public/cloud1.svg";
import cloud2 from "/public/cloud2.svg";
import LoginButtons from "@/components/login-buttons";
import { LoginModal } from "@/components/login-modal";
import Link from "next/link";
import { Suspense } from "react";
import { revalidatePath } from "next/cache";

export default function LandingPage() {
  return (
    <main className="">
      <Suspense>
        <LoginModal />
      </Suspense>
      <div className="text-white absolute inset-0 flex flex-col gap-4 z-50">
        <div className="grid grid-cols-3 w-full p-5">
          <div>logo</div>
          <div className="flex flex-row gap-4 justify-self-center">
            <button>nav1</button>
            <button>nav2</button>
            <button>nav3</button>
          </div>
          <div className="flex flex-row gap-5 justify-self-end">
            <Link
              href="?login=true"
              className="border-2 rounded-xl px-4 py-2.5"
            >
              Sign in
            </Link>
            <Link
              href="?login=true"
              className="border-2 rounded-xl px-4 py-2.5"
            >
              Register
            </Link>
          </div>
        </div>

        <div className="text-lg xl:text-3xl w-[35ch] mx-20 my-10 xl:my-20 flex flex-col gap-7">
          <h1 className="text-5xl xl:text-6xl">
            <div className="flex gap-3 items-center">
              tuktukwan
              <span className="text-3xl xl:text-4xl">(ทุกวัน)</span>
            </div>
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
            vitae molestiae modi ducimus omnis praesentium pariatur laudantium
            perspiciatis quod ab eum cum? Praesentium perferendis fugit modi
            libero voluptatibus illum magni.
          </p>
          <div className="w-full flex flex-row gap-5">
            <button
              // href="?login=true"
              // onClick={() => {
              // revalidatePath("/");
              // }}
              className="border-2 rounded-xl px-4 py-2.5"
            >
              Sign in
            </button>
            <Link
              href="?login=register"
              className="border-2 rounded-xl px-4 py-2.5"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
      <section
        id="hero"
        className="relative bg-heroBg saturate-[0.8] brightness-75 xl:min-h-[80vh] flex flex-col justify-end"
      >
        <div className="absolute z-10 opacity-75 top-0 w-full overflow-x-hidden">
          <div className="relative w-[20vw] min-h-12 -ml-[50vw] animate-floatRight3">
            <Image src={cloud1} fill alt="" />
          </div>
          <div className="relative w-[25vw] min-h-12 -ml-[90vw] animate-floatRight2">
            <Image src={cloud1} fill alt="" />
          </div>
          <div className="relative w-[25vw] min-h-12 -ml-[50vw] animate-floatRight3">
            <Image className="rotate-180" src={cloud1} fill alt="" />
          </div>
          <div className="relative w-[25vw] min-h-12 animate-floatRight1">
            <Image src={cloud1} fill alt="" />
          </div>
          <div className="relative w-[15vw] min-h-12 ml-[20vw] animate-floatRight4">
            <Image src={cloud2} fill alt="" />
          </div>
        </div>

        <div className="absolute z-10 opacity-75 top-10 w-full overflow-x-hidden">
          <div className="relative w-[25vw] min-h-12 ml-[90vw] animate-floatRight5">
            <Image className="rotate-180" src={cloud1} fill alt="" />
          </div>
          <div className="relative w-[15vw] min-h-12 -ml-[30vw] animate-floatRight1">
            <Image src={cloud1} fill alt="" />
          </div>
          <div className="relative w-[10vw] min-h-12 ml-[60vw] animate-floatRight5">
            <Image src={cloud2} fill alt="" />
          </div>
          <div className="relative w-[15vw] min-h-12 animate-floatRight2">
            <Image src={cloud2} fill alt="" />
          </div>
          <div className="relative w-[10vw] min-h-12 -ml-[30vw] animate-floatRight3">
            <Image src={cloud2} fill alt="" />
          </div>
        </div>
        <div className="relative w-full h-full aspect-[1.83] overflow-x-hidden">
          <Image
            className="object-cover"
            priority={true}
            src={landingBg}
            fill
            alt=""
          />
        </div>
      </section>
    </main>
  );
}
