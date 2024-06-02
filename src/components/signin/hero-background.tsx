import Image from "next/image";
import landingBg from "/public/landing-bg.svg";
import cloud1 from "/public/cloud1.svg";
import cloud2 from "/public/cloud2.svg";

export default function HeroBackground() {
  return (
    <div className="relative z-10 bg-heroBg saturate-[0.8] brightness-75 xl:min-h-[80vh] flex flex-col justify-end">
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
    </div>
  );
}
