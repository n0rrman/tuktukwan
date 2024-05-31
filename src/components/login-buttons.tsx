"user client";

import LoggedIn from "@/components/logged-in";
import Link from "next/link";

export default function LoginButtons() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <LoggedIn />
      <Link
        href="/api/auth/discord"
        className="text-center bg-purple-500 text-white w-64"
      >
        Login with Discord
      </Link>
      <Link
        href="/api/auth/google"
        className="text-center bg-red-500 text-white w-64"
      >
        Login with Google
      </Link>
      <Link
        href="/api/auth/github"
        className="text-center bg-slate-900 text-white w-64"
      >
        Login with GitHub
      </Link>
      <Link
        href="/api/auth/microsoft"
        className="text-center bg-blue-700 text-white w-64"
      >
        Login with Microsoft
      </Link>
      <Link
        href="/api/auth/logout"
        className="text-center bg-red-700 text-white w-64"
      >
        Logout
      </Link>
    </div>
  );
}
