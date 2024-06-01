"use client";

export default function Home() {
  return (
    <div>
      <h1>YOU'RE IN!!</h1>
      <button
        onClick={async () => {
          await fetch(`${process.env.HOST_URL}/api/auth/logout`, {
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
