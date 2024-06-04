import Link from "next/link";

export default function LandingHero() {
  return (
    <div className="text-lg sm:w-[35ch] sm:mx-32 mx-10 my-16 flex flex-col gap-7 z-50 text-white text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl">
        <div className="flex flex-row justify-center items-center sm:justify-start gap-3">
          <span>tuktukwan</span>
          <span className="text-2xl sm:text-3xl">(ทุกๆวัน)</span>
        </div>
      </h1>
      <p className="text-base sm:text-inherit">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vitae
        molestiae modi ducimus omnis praesentium pariatur laudantium
        perspiciatis quod ab eum cum? Praesentium perferendis fugit modi libero
        voluptatibus illum magni.
      </p>
      <div className="mt-5">
        <Link
          href="?login=register"
          className="border-2 rounded-xl px-14 sm:px-5 py-3 hover:text-sky-700 font-semibold hover:bg-white border-white bg-transparent text-white transition w-max"
        >
          Join now!
        </Link>
      </div>
    </div>
  );
}
