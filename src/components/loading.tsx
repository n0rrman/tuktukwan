import { signOut } from "@/services/api/user-client";
import { refreshStatus } from "@/services/api/user-server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ImSpinner2 } from "react-icons/im";
import { MdCancel } from "react-icons/md";

export default function Loading() {
  const handleLogout = async () => {
    await signOut();
    refreshStatus();
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-3 text-slate-800">
      <Link
        onClick={handleLogout}
        href="/"
        className="self-end -mt-10 -mr-10 cursor-pointer hover:brightness-[0.85]"
      >
        <MdCancel onClick={handleLogout} className="text-red-600 text-2xl" />
      </Link>
      <ImSpinner2 className="animate-spin text-4xl mt-2" />
      <div className="flex flex-col justify-center items-center gap-1.5">
        <p className="font-semibold">Redirecting, please wait...</p>
        <p className="text-xs max-w-[42ch] text-center">
          If stuck, try reloading the website, or abort the redirection by
          pressing the cancel button in to top right corner.
        </p>
      </div>
    </div>
  );
}
