import Link from "next/link";

export default function LandingHero() {
  return (
    <div className="text-lg xl:text-3xl w-[35ch] mx-20 my-10 xl:my-20 flex flex-col gap-7 z-50 text-white">
      <h1 className="text-5xl xl:text-6xl">
        <div className="flex gap-3 items-center">
          tuktukwan
          <span className="text-3xl xl:text-4xl">(ทุกวัน)</span>
        </div>
      </h1>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vitae
        molestiae modi ducimus omnis praesentium pariatur laudantium
        perspiciatis quod ab eum cum? Praesentium perferendis fugit modi libero
        voluptatibus illum magni.
      </p>
      <div className="w-full flex flex-row gap-5">
        <Link href="?login=true" className="border-2 rounded-xl px-4 py-2.5">
          Sign in
        </Link>
        <Link
          href="?login=register"
          className="border-2 rounded-xl px-4 py-2.5"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
