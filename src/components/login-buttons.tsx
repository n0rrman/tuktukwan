"use client";

import LoggedIn from "@/components/logged-in";

export default function LoginButtons() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <LoggedIn />
      <a
        href="/api/auth/line"
        className="text-center bg-green-500 text-white w-64"
      >
        Login with LINE
      </a>
      <a
        href="/api/auth/google"
        className="text-center bg-red-500 text-white w-64"
      >
        Login with Google
      </a>
      <a
        href="/api/auth/github"
        className="text-center bg-slate-900 text-white w-64"
      >
        Login with GitHub
      </a>
      <a
        href="/api/auth/microsoft"
        className="text-center bg-blue-700 text-white w-64"
      >
        Login with Microsoft
      </a>
      <button
        onClick={async () => {
          await fetch("https://tuktukwan.henriknorrman.com/api/auth/logout", {
            method: "GET",
          });
          window.location.reload();
        }}
        className="text-center bg-red-700 text-white w-64"
      >
        Logout
      </button>
    </div>
  );
}
