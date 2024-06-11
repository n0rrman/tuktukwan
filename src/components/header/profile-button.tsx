import { signOut } from "@/services/api/user-client";
import { refreshStatus } from "@/services/api/user-server";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import profilePic from "/public/no-profile.jpg";

interface ProfileButtonProps {
  username?: string;
  image?: string;
}

export default function ProfileButton({ username, image }: ProfileButtonProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return;

    const click = (event: any) => {
      if (!ref.current) {
        return;
      }

      setOpen((ref.current as HTMLElement).contains(event.target));
    };

    window.addEventListener("click", click);

    return () => window.removeEventListener("click", click);
  }, [open]);

  const handleClick = (event: any) => {
    setOpen(!open);
  };

  return (
    <div onClick={handleClick} ref={ref}>
      <div className="cursor-pointer flex flex-row items-center justify-center gap-1">
        <div>{username ? username : "loading"}</div>
        <div className={`relative h-6 w-6 overflow-hidden rounded-full z-10`}>
          <img alt="" src={image || profilePic.src} className="w-full h-full" />
        </div>
      </div>

      <div
        className={`${
          open
            ? "opacity-100 scale-100 translate-y-4 -translate-x-24"
            : "opacity-0 scale-0 translate-y-0"
        } absolute h-auto w-[12.6rem] shadow-xl z-40 ease-in-out transition-all duration-200 bg-slate-100 p-3 rounded`}
      >
        <div className="flex flex-col items-start gap-3">
          <Link href="/profile">profile</Link>
          <Link href="/settings">settings</Link>
          <button
            className=""
            onClick={async () => {
              await signOut();
              refreshStatus();
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
