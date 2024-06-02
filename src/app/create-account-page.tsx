"use client";

export default function CreateAccountPage() {
  return (
    <div>
      <h1>CREATE ACCOUNT PAGE...</h1>
      <button
        onClick={async () => {
          await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/logout`, {
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
