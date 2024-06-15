"use client";

import AuthOptions from "@/components/profile/auth-options";
import LoginModal from "@/components/signin/login-modal";
import { getProfileInfo } from "@/services/api/user-client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProfileData {
  id: string;
  username: string;
  display_name: string;
  email: string;
  created_at: string;
  auth_picture: string;
}

interface ProfilePageProps {}

export default function ProfilePage({}: ProfilePageProps) {
  const [profile, setProfile] = useState<ProfileData>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        await getProfileInfo().then((data) => {
          setProfile(data);
          setLoading(false);
        });
      } catch (err: unknown) {
        console.log("Something went wrong!");
      }
    })();
  }, []);
  return (
    <div className="w-full flex flex-row gap-5">
      <div className="bg-slate-200 p-10">
        <div className="flex flex-col justify-center items-center gap-3">
          <div className="rounded-full w-32 h-32 bg-slate-400"></div>
          <div>{loading ? "loading" : profile?.username}</div>
          <div>{loading ? "loading" : profile?.display_name}</div>
          <div>{loading ? "loading" : profile?.email}</div>
          <Link href="/settings">Edit</Link>
        </div>
      </div>
      <div className="bg-slate-200 p-10 w-full">
        delete account, member since, streak, follows, followed by
      </div>
      <div className="bg-slate-200 p-6 w-max">
        <div className="">Linked accounts</div>
        <AuthOptions />

        <LoginModal redirect="/profile" />
        <Link href="?login=link" className="font-semibold py-2 w-full">
          <span className="w-max">Link new account</span>
        </Link>
      </div>
    </div>
  );
}

/**
 * Export Data
Download a copy of the personal data you have provided.
 */
