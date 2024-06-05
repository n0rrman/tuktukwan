"use client";

export const clientPrint = () => {
    console.log("where is this printed?")
}

export const signOut = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/logout`, {
        method: "GET",
    });
}

export const linkUser = async (username: string, email: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/user/link`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "username": username,
            "email": email,
        }
    });
}

export const getAllCredentials = async () => {
    const credentials = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/options`, { 
        method: "GET"
    }).then((res) => res.json());
    return credentials;
}

export const addUser = async (username: string, displayName: string, email: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/user/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "username": username,
            "display_name": displayName,
            "email": email,
        }
    });
}
