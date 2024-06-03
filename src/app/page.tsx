"use client";

import { signOut } from "@/services/api/user-client";

export default function Home() {
  return (
    <div>
      <h1>YOU ARE IN!!</h1>
      <button
        onClick={async () => {
          await signOut();
          window.location.reload();
        }}
        className="text-center bg-red-700 text-white w-64"
      >
        Logout
      </button>
    </div>
  );
}
