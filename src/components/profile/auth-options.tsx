"use client";

import { getAllCredentials, unlinkAccount } from "@/services/api/user-client";
import { useState, useEffect } from "react";
import { FaLine, FaGithub, FaGoogle, FaMicrosoft } from "react-icons/fa";
import profilePic from "/public/no-profile.jpg";
import Image from "next/image";

interface Option {
  id: number;
  user_id: number;
  user_verified: boolean;
  auth_id: string;
  auth_username: string;
  auth_provider: string;
  auth_picture: string;
  created_at: string;
}

export default function AuthOptions() {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        await getAllCredentials().then((data) => {
          console.log(data);
          setOptions(data);
          setLoading(false);
        });
      } catch (err: unknown) {
        console.log("Something went wrong!");
      }
    })();
  }, []);

  const handleUnlink = (id: number) => {
    console.log(options.length);
    if (options.length > 1) {
      unlinkAccount(id.toString());
    }
  };

  const renderedOptions = options!.map((option: Option) => {
    let logo: React.ReactElement;
    let borderColour: string;
    switch (option.auth_provider) {
      case "line":
        logo = <FaLine className="text-line" />;
        borderColour = "border-line/60";
        break;
      case "microsoft":
        logo = <FaMicrosoft className="text-microsoft" />;
        borderColour = "border-microsoft/60";
        break;
      case "google":
        logo = <FaGoogle className="text-google" />;
        borderColour = "border-google/60";
        break;
      default:
        logo = <FaGithub className="text-github" />;
        borderColour = "border-github/60";
        break;
    }

    return (
      <div
        key={option.id}
        onClick={() => handleUnlink(option.id)}
        className="flex flex-row justify-start items-center py-2 cursor-pointer"
      >
        <div
          className={`${borderColour} border-2 relative h-10 w-10 overflow-hidden rounded-full z-10`}
        >
          <img
            alt=""
            src={option.auth_picture || profilePic.src}
            className="w-full h-full scale-[1.1]"
          />
        </div>
        <div className="-translate-x-2 translate-y-4 text-lg">{logo}</div>
        <div className={`${borderColour} border-b-2 text-md w-max`}>
          {option.auth_username}
        </div>
      </div>
    );
  });

  return (
    <div className="">
      <p>{loading && "Loading..."}</p>
      <div>{renderedOptions}</div>
    </div>
  );
}
