"use client";

import { useState } from "react";
import CreateAccountForm from "./create-account-form";
import Loading from "../loading";
import { MdCancel } from "react-icons/md";
import { signOut } from "@/services/api/user-client";
import { refreshStatus } from "@/services/api/user-server";

interface CreateAccountModalProps {}

export default function CreateAccountModal({}: CreateAccountModalProps) {
  const handleExit = async () => {
    await signOut();
    refreshStatus();
  };

  const [created, setCreated] = useState(false);

  return (
    <dialog className="fixed inset-x-0 top-0 bg-black/20 overflow-y-auto h-full w-full flex items-center justify-center z-[100]">
      <div className="bg-white flex flex-col gap-4 p-8 w-full sm:w-max sm:rounded-lg animate-scaleIn shadow-lg">
        {created ? (
          <Loading />
        ) : (
          <div className="flex flex-col w-full sm:w-80">
            <button
              onClick={() => {
                handleExit();
              }}
              className="self-end cursor-pointer hover:brightness-[0.85] -mr-4 -my-4"
            >
              <MdCancel className="text-red-600 text-2xl" />
            </button>
            <div>
              <h1 className="text-lg pb-5 font-semibold">Create new account</h1>
              <CreateAccountForm done={created} setDone={setCreated} />
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}
