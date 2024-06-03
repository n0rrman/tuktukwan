"use client";

import { useFormState } from "react-dom";
import { ImSpinner6 } from "react-icons/im";

// import thailandPic from "/public/thailand.jpg";
import { addUser, signOut } from "@/services/api/user-client";
import { createNewAccount } from "@/actions";
import { startTransition, useRef, useState } from "react";
import { refreshStatus } from "@/services/api/user-server";
import CreateAccountForm from "./create-account-form";
import LinkAccountForm from "./link-account-form";

interface CreateAccountModalProps {}

export default function CreateAccountModal({}: CreateAccountModalProps) {
  const [created, setCreated] = useState(false);

  return (
    <dialog className="fixed inset-x-0 top-0 bg-black/20 overflow-y-auto h-full w-full flex items-center justify-center z-[100]">
      <div className="bg-white flex flex-col gap-4 p-8 w-max rounded-lg animate-scaleIn">
        {created ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <ImSpinner6 className="animate-spin text-3xl text-blue-800" />
            <p>Redirecting...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h1 className="text-lg pb-5">Create new account</h1>
              <CreateAccountForm done={created} setDone={setCreated} />
            </div>
            <div className="border-l pl-8 space-y-3">
              <h1 className="text-lg">Link existing account</h1>
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
