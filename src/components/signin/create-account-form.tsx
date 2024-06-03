import Image from "next/image";
import Link from "next/link";
import { startTransition, useRef } from "react";
import { useFormState } from "react-dom";

import profilePic from "/public/profilePic.jpg";
import FormInput from "../form-input";
import { addUser, signOut } from "@/services/api/user-client";
import { createNewAccount } from "@/actions";
import { refreshStatus } from "@/services/api/user-server";

interface FormProps {
  done: boolean;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateAccountForm({ done, setDone }: FormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(createNewAccount, {
    errors: {},
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      startTransition(() => {
        action(formData);
      });
    }
  };

  if (formState.success && !done) {
    setDone(true);
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("displayName");
    window.localStorage.removeItem("email");
    const { username, displayName, email } = formState.payload!;
    addUser(username, displayName, email);
    refreshStatus();
  }

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-2 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="relative rounded-full bg-blue-100 w-36 h-36 my-3.5 overflow-hidden">
        <Image className="scale-110 mt-1 ml-0.5" src={profilePic} fill alt="" />
      </div>
      <FormInput
        id="username"
        title="Username"
        placeholder="USERNAME: yaksha"
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
          {formState?.errors.terms ? (
            <span className="text-red-500">I have not accepted the</span>
          ) : (
            "I accept the "
          )}
          <Link href="?terms=true" className="text-blue-400 underline pl-1">
            Terms of Service
          </Link>
        </label>
      </div>
      <div className="flex flex-row gap-2 items-center justify-start w-full px-1 text-sm">
        <input name="policy" type="checkbox" />
        <label>
          {formState?.errors.policy ? (
            <span className="text-red-500">I have not accepted the</span>
          ) : (
            "I accept the "
          )}
          <Link href="?policy=true" className="text-blue-400 underline pl-1">
            Privacy Policy
          </Link>
        </label>
      </div>
      <div className="flex flex-row justify-end gap-5 w-full pt-6">
        <button
          type="submit"
          className="text-black border-2 py-2 px-7 rounded mt-4 w-full"
        >
          Create
        </button>
        <button
          onClick={async () => {
            await signOut();
            refreshStatus();
          }}
          className="text-black border-2 py-2 px-7 rounded mt-4 w-full"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
