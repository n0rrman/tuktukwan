import Link from "next/link";

export default function LandingHeader() {
  return (
    <div className="grid grid-cols-3 w-full p-5 z-50 text-white">
      <div>logo</div>
      <div className="flex flex-row gap-4 justify-self-center">
        <button>nav1</button>
        <button>nav2</button>
        <button>nav3</button>
      </div>
      <div className="flex flex-row gap-5 justify-self-end">
        <Link href="?login=true" className="border-2 rounded-xl px-4 py-2.5">
          Sign in
        </Link>
        <Link href="?login=true" className="border-2 rounded-xl px-4 py-2.5">
          Register
        </Link>
      </div>
    </div>
  );
}
