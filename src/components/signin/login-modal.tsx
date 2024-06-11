"use client";
import Link from "next/link";
import { FaGithub, FaGoogle, FaLine, FaMicrosoft } from "react-icons/fa";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import Loading from "../loading";
import { OAuthButton } from "./oauth-button";

interface LoginModalProps {
  redirect?: string;
}

export default function LoginModal({ redirect }: LoginModalProps) {
  const [redirected, setRedirected] = useState(false);
  const mode = useSearchParams().get("login");
  const register = mode === "register";
  const login = mode === "login";
  const link = mode === "link";
  return (
    <>
      {mode && (
        <dialog className="fixed inset-x-0 top-0 bg-black/20 overflow-y-auto h-full w-full flex items-center justify-center z-[100]">
          <div className="bg-white flex flex-col gap-4 py-8 px-8 w-full sm:w-max sm:rounded animate-scaleIn shadow-lg">
            {redirected ? (
              <Loading />
            ) : (
              <>
                <Link
                  href={redirect ? redirect : "/"}
                  className="self-end cursor-pointer hover:brightness-[0.85] -my-4 -mr-4"
                >
                  <MdCancel className="text-red-600 text-2xl" />
                </Link>
                <h2 className="font-semibold text-2xl">
                  {register && "Sign up!"}
                  {login && "Sign in!"}
                  {link && "Link your account!"}
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
                  login={login}
                  link={link}
                  icon={<FaLine />}
                  clicked={setRedirected}
                />
                <OAuthButton
                  name="Google"
                  borderColour="border-google text-google"
                  className="hover:bg-google"
                  register={register}
                  login={login}
                  link={link}
                  icon={<FaGoogle />}
                  clicked={setRedirected}
                />
                <OAuthButton
                  name="Microsoft"
                  borderColour="border-microsoft text-microsoft"
                  className="hover:bg-microsoft"
                  register={register}
                  login={login}
                  link={link}
                  icon={<FaMicrosoft />}
                  clicked={setRedirected}
                />
                <OAuthButton
                  name="GitHub"
                  borderColour="border-github text-github"
                  className="hover:bg-github"
                  register={register}
                  login={login}
                  link={link}
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
