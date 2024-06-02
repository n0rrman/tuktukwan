"use client";

import { signOut } from "@/services/api/user";

export default function CreateAccountModal() {
  return (
    <dialog className="fixed inset-x-0 top-0 bg-black/20 overflow-y-auto h-full w-full flex items-center justify-center z-[100]">
      <div className="bg-white flex flex-col gap-4 p-10 w-max rounded-lg">
        <h1>CREATE ACCOUNT PAGE...</h1>

        <button
          onClick={async () => {
            await signOut();
            window.location.reload();
          }}
          className="text-black border-2 w-fit py-2 px-5 rounded self-end mt-4"
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
}
