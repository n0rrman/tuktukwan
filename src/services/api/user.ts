"use server";

interface Cookie {
    name: string,
    value: string
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

export const signOut = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/logout`, {
        method: "GET",
    });
}
