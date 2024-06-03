"use client";
import Link from "next/link";

import { useSearchParams } from "next/navigation";

export default function TermsPage() {
  const show = useSearchParams().get("terms");

  return (
    <>
      {show && (
        <dialog className="fixed inset-x-0 top-0 bg-black/20 overflow-y-auto h-full w-full flex items-center justify-center z-[120]">
          <div className="bg-white min-h-[80vh] flex flex-col gap-4 p-10 w-max rounded-lg animate-scaleIn">
            <h1>Terms of Service</h1>
            <p>asudhasud asudhuahsd asudhasudsaduh saduh</p>

            <Link
              href="/"
              className="text-black border-2 w-fit py-2 px-5 rounded self-end mt-auto"
            >
              Back
            </Link>
          </div>
        </dialog>
      )}
    </>
  );
}
