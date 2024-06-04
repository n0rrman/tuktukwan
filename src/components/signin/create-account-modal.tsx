"use client";

import { useState } from "react";
import CreateAccountForm from "./create-account-form";
import LinkAccountForm from "./link-account-form";
import Loading from "../loading";
import Link from "next/link";
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
      <div className="bg-white flex flex-col gap-4 p-8 w-max rounded-lg animate-scaleIn">
        {created ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h1 className="text-lg pb-5 font-semibold">Create new account</h1>
              <CreateAccountForm done={created} setDone={setCreated} />
            </div>
            <div className="flex flex-col border-l pl-8 space-y-3">
              <button
                onClick={() => {
                  handleExit();
                }}
                className="self-end cursor-pointer hover:brightness-[0.85] -mr-4 -mt-4"
              >
                <MdCancel className="text-red-600 text-2xl" />
              </button>
              <h1 className="text-lg font-semibold">Link existing account</h1>
              <p className="w-[37.5ch] text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum ullam ipsam soluta laborum aliquam quis, incidunt
                fugit saepe doloremque exercitationem veniam, tenetur nesciunt
                esse necessitatibus minus quia debitis ex nostrum.
              </p>
              <LinkAccountForm done={created} setDone={setCreated} />
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}
