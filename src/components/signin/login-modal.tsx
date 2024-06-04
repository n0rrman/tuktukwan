"use client";
import Link from "next/link";
import { FaLine, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";

import { useSearchParams } from "next/navigation";
import { OAuthButton } from "./oauth-button";
import Loading from "../loading";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

export default function LoginModal() {
  const [redirected, setRedirected] = useState(false);
  const show = useSearchParams().get("login");
  const register = show === "register";
  return (
    <>
      {show && (
        <dialog className="fixed inset-x-0 top-0 bg-black/20 overflow-y-auto h-full w-full flex items-center justify-center z-[100]">
          <div className="bg-white flex flex-col gap-4 py-8 px-8 w-full sm:w-max sm:rounded animate-scaleIn shadow-lg">
            {redirected ? (
              <Loading />
            ) : (
              <>
                <Link
                  href="/"
                  className="self-end cursor-pointer hover:brightness-[0.85] -my-4 -mr-4"
                >
                  <MdCancel className="text-red-600 text-2xl" />
                </Link>
                <h2 className="font-semibold text-2xl">
                  {register ? "Sign up!" : "Sign in!"}
                </h2>
                <p className="text-sm max-w-full sm:max-w-[42.5ch] pb-4">
                  Authenticate using the third-party apps you already trust. No
                  private data or passwords are saved on tuktukwan.
                </p>
                <OAuthButton
                  name="LINE"
                  borderColour="border-line text-line"
                  className="hover:bg-line"
                  register={register}
                  icon={<FaLine />}
                  clicked={setRedirected}
                />
                <OAuthButton
                  name="Google"
                  borderColour="border-google text-google"
                  className="hover:bg-google"
                  register={register}
                  icon={<FaGoogle />}
                  clicked={setRedirected}
                />
                <OAuthButton
                  name="Microsoft"
                  borderColour="border-microsoft text-microsoft"
                  className="hover:bg-microsoft"
                  register={register}
                  icon={<FaMicrosoft />}
                  clicked={setRedirected}
                />
                <OAuthButton
                  name="GitHub"
                  borderColour="border-github text-github"
                  className="hover:bg-github"
                  register={register}
                  icon={<FaGithub />}
                  clicked={setRedirected}
                />
              </>
            )}
          </div>
        </dialog>
      )}
    </>
  );
}
