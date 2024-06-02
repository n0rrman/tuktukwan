"use client";

import { revalidatePath } from "next/cache";
import { getStatus } from "./api/user";

export const Test1 = () => {
  return (
    <button
      onClick={async () => {
        const status = await fetch(
          `${process.env.HOST_URL!}/api/auth/status`
        ).then((res) => res.json());
        // const status = {
        //   credential_id: "22",
        //   token: "",
        //   user_id: "22",
        // };
        console.log("credential", status.credential_id);
        console.log("token", status.token);
        console.log("user_id", status.user_id);
      }}
    >
      status
    </button>
  );
};

export const Test2 = async () => {
  return (
    <button
      onClick={() => {
        revalidatePath("/");
      }}
    >
      revalidate
    </button>
  );
};
export const Test3 = async () => {
  return <button>nav3</button>;
};
