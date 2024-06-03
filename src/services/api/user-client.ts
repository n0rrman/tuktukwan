"use client";

export const signOut = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/logout`, {
        method: "GET",
    });
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
