"use server";

import { revalidatePath } from "next/cache";

interface Cookie {
    name: string,
    value: string
}

export const refreshStatus = () => {
    revalidatePath('/');
}

export const checkUser = async (username: string, email: string) => {
    const status = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL!}/api/user/check`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "username": username, 
            "email": email, 
            "key": process.env.SERVER_AUTH_KEY!, 
        }
    }).then((res) => res.json());
    return status
}

export const getStatus = async (cookie: Cookie | undefined, cookieSig: Cookie | undefined) => {
    if (cookie && cookieSig) {
        const status = await fetch(
            `${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/status`, {
                method: "GET",
                headers: {
                    Cookie: `${cookie.name}=${cookie.value};${cookieSig.name}=${cookieSig.value};`,
                },
            }
        ).then((res) => res.json());
        return {
            credentialId: status.credential_id,
            token: status.token,
            userId: status.user_id,
        }
    } else {
        return {
            credentialId: "",
            token: "",
            userId: "",
        }; 
    }
}
