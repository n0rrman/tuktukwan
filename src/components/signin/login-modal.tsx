"use client";
import Link from "next/link";
import { FaLine, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";

import { useSearchParams } from "next/navigation";
import { OAuthButton } from "./oauth-button";

export default function LoginModal() {
  const show = useSearchParams().get("login");
  const register = show === "register";
  return (
    <>
      {show && (
        <dialog className="fixed inset-x-0 top-0 bg-black/20 overflow-y-auto h-full w-full flex items-center justify-center z-[100]">
          <div className="bg-white flex flex-col gap-4 p-10 w-max rounded-lg animate-scaleIn">
            <OAuthButton
              name="LINE"
              borderColour="border-line text-line"
              className="hover:bg-line"
              register={register}
              icon={<FaLine />}
            />
            <OAuthButton
              name="Google"
              borderColour="border-google text-google"
              className="hover:bg-google"
              register={register}
              icon={<FaGoogle />}
            />
            <OAuthButton
              name="Microsoft"
              borderColour="border-microsoft text-microsoft"
              className="hover:bg-microsoft"
              register={register}
              icon={<FaMicrosoft />}
            />
            <OAuthButton
              name="GitHub"
              borderColour="border-github text-github"
              className="hover:bg-github"
              register={register}
              icon={<FaGithub />}
            />
            <Link
              href="/"
              className="text-black border-2 w-fit py-2 px-5 rounded self-end mt-4"
            >
              Cancel
            </Link>
          </div>
        </dialog>
      )}
    </>
  );
}
