"use client";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import { ImSpinner6 } from "react-icons/im";

import profilePic from "/public/profilePic.jpg";
import thailandPic from "/public/thailand.jpg";
import { addUser, signOut } from "@/services/api/user-client";
import FormInput from "../form-input";
import { createNewAccount } from "@/actions";
import { startTransition, useRef, useState } from "react";

interface CreateAccountModalProps {}

export default function CreateAccountModal({}: CreateAccountModalProps) {
  const [created, setCreated] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(createNewAccount, {
    errors: {},
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      if (!formState.success) {
        console.log("failed");
        startTransition(() => {
          action(formData);
        });
        console.log(formState.success);
      } else {
        console.log("great success");
        startTransition(() => {
          action(formData);
        });

        window.localStorage.removeItem("username");
        window.localStorage.removeItem("displayName");
        window.localStorage.removeItem("email");
      }
    }
  };
  // };

  if (formState.success && !created) {
    setCreated(true);
    const { username, displayName, email } = formState.payload!;
    addUser(username, displayName, email);
  }

  return (
    <dialog className="fixed inset-x-0 top-0 bg-black/20 overflow-y-auto h-full w-full flex items-center justify-center z-[100]">
      <div className="bg-white flex flex-col gap-4 p-8 w-max rounded-lg animate-scaleIn">
        {created ? (
          <div className="flex flex-col items-center justify-center gap-3">
            <ImSpinner6 className="animate-spin text-3xl text-blue-800" />

            <p>Redirecting...</p>
          </div>
        ) : (
          <div className="flex flex-row gap-4">
            <div className="border-r mr-3 pr-7 w-[43ch] text-sm flex flex-col justify-between">
              <div className="space-y-4">
                <h1 className="text-lg">Welcome to tuktukwan!</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate vitae, omnis recusandae dolorem iure nemo velit eum
                  debitis quasi! Pariatur omnis accusantium doloremque impedit
                  cum, eius obcaecati saepe repudiandae molestiae.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Cupiditate vitae, omnis recusandae dolorem iure nemo velit eum
                  debitis quasi! Pariatur omnis accusantium doloremque impedit
                  cum, eius obcaecati saepe repudiandae molestiaenemo velit eum
                  debitis quasi! Pariatur omnis accusantium doloremque impedit
                  cum, eius obcaecati saepe repudiandae molestiae..
                </p>
              </div>
              <div className="relative min-h-10 w-full aspect-[2.4]">
                <Image src={thailandPic} alt="" fill />
              </div>
            </div>
            <div>
              <h1 className="text-lg">Create new account</h1>

              <form
                ref={formRef}
                className="flex flex-col gap-2 justify-center items-center"
                onSubmit={handleSubmit}
              >
                <div className="relative rounded-full bg-blue-100 w-36 h-36 my-3.5 overflow-hidden">
                  <Image
                    className="scale-110 mt-1 ml-0.5"
                    src={profilePic}
                    fill
                    alt=""
                  />
                </div>
                <FormInput
                  id="username"
                  title="Username"
                  placeholder="USERNAME: asdasd"
                  errors={formState?.errors.username}
                />
                <FormInput
                  id="displayName"
                  title="Display Name"
                  placeholder="DISPLAY NAME: Alex Doe"
                  errors={formState?.errors.displayName}
                />
                <FormInput
                  id="email"
                  title="Email"
                  placeholder="EMAIL: email@example.com"
                  errors={formState?.errors.email}
                />

                <div className="flex flex-row gap-2 items-center justify-start w-full px-1 text-sm pt-2.5">
                  <input name="terms" type="checkbox" />
                  <label>
                    I accept the
                    <Link
                      href="?terms=true"
                      className="text-blue-400 underline pl-1"
                    >
                      Terms of Service
                    </Link>
                  </label>
                </div>
                <div className="flex flex-row gap-2 items-center justify-start w-full px-1 text-sm">
                  <input name="policy" type="checkbox" />
                  <label>
                    I accept the
                    <Link
                      href="?policy=true"
                      className="text-blue-400 underline pl-1"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                <div className="flex flex-row justify-end gap-10">
                  <button
                    type="submit"
                    className="text-black border-2 w-fit py-2 px-7 rounded mt-4"
                  >
                    Create
                  </button>
                  <button
                    onClick={async () => {
                      await signOut();
                      window.location.reload();
                    }}
                    className="text-black border-2 w-fit py-2 px-7 rounded mt-4"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </dialog>
  );
}
