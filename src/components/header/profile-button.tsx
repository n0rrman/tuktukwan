import { signOut } from "@/services/api/user-client";
import { refreshStatus } from "@/services/api/user-server";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ProfileButtonProps {
  username?: string;
}

export default function ProfileButton({ username }: ProfileButtonProps) {
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
      {username}

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
