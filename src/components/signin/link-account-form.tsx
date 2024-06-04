import FormInput from "../form-input";
import { startTransition, useRef } from "react";
import { useFormState } from "react-dom";
import { linkAccount } from "@/actions";
import { linkUser, signOut } from "@/services/api/user-client";
import { refreshStatus } from "@/services/api/user-server";

interface FormProps {
  done: boolean;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LinkAccountForm({ done, setDone }: FormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(linkAccount, {
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
    window.localStorage.removeItem("email");
    const { username, email } = formState.payload!;
    linkUser(username, email);
    refreshStatus();
  }

  return (
    <form
      ref={formRef}
      className="flex flex-col gap-1 justify-center items-center"
      onSubmit={handleSubmit}
    >
      <FormInput
        id="username"
        title="Username"
        placeholder="USERNAME: yaksha"
        errors={formState?.errors.username}
      />
      <FormInput
        id="email"
        title="Email"
        placeholder="EMAIL: email@example.com"
        errors={formState?.errors.email}
      />
      <div className="flex flex-row items-center justify-end gap-10">
        <button
          type="submit"
          className="text-black border-2 w-full py-2 px-7 rounded mt-4"
        >
          Send request
        </button>
      </div>
    </form>
  );
}
