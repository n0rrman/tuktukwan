"use server";

import { revalidatePath } from "next/cache";

export const getStatus = async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/status`).then((res) => 
        res.json())
        // .then((data) => {
        //   setUser(data);
        //   setLoading(false);
        // });
}

export const revalidate = () => {
    console.log("revalidated")
    revalidatePath("/", "layout");
}