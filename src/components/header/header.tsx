"use client";

import { logoFont } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo.png";
import ProfileButton from "./profile-button";
import { getProfileInfo, signOut } from "@/services/api/user-client";
import { useEffect, useState } from "react";

interface ProfileData {
  id: string;
  username: string;
  display_name: string;
  email: string;
  created_at: string;
  auth_picture: string;
}

interface HeaderProps {
  userId: string;
}

export default function Header({ userId }: HeaderProps) {
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
        console.log("header:getProfileInfo() - Something went wrong!");
      }
    })();
  }, []);

  if (profile) {
    console.log(profile);
  }

  return (
    <header className="fixed flex flex-row justify-between items-center w-full py-4 px-10 shadow-lg shadow-slate-400/20 bg-slate-200 z-50">
      <Link
        href="/"
        className={`${logoFont.className} flex flex-col w-max justify-center items-center text-slate-800 cursor-pointer`}
      >
        <div className="relative w-12 h-10 -mb-1">
          <Image src={logo} alt="logo" fill />
        </div>
        <span className="text-xl">ทุกๆวัน</span>
      </Link>
      <div className="flex flex-row gap-5">
        <div className="w-16 text-center">Learn</div>
        <div className="w-16 text-center">Review</div>
        <ProfileButton
          username={profile?.username}
          image={profile?.auth_picture}
        />
      </div>
    </header>
  );
}
