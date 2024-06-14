"use client";

export const clientPrint = () => {
    console.log("where is this printed?")
}

export const signOut = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/logout`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Access-Control-Request-Method": "GET",
            "Access-Control-Allow-Credentials": "true",
        }
    });
}

export const getProfileInfo = async () => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/user/me`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Access-Control-Request-Method": "GET",
            "Access-Control-Allow-Credentials": "true",
        }
    }).then((res) => res.json());
    return user;
}


export const unlinkAccount = async (auth_id: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/user/link`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
            "Access-Control-Request-Method": "DELETE",
            "Access-Control-Allow-Credentials": "true",
            "Content-Type": "application/json",
            "auth_id": auth_id,
        }
    });
}

// export const linkUser = async (username: string, email: string) => {
//     await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/user/link`, {
//         method: "POST",
//         credentials: 'include',
//         headers: {
//             "Access-Control-Request-Method": "GET",
//             "Access-Control-Allow-Credentials": "true",
//             "Content-Type": "application/json",
//             "username": username,
//             "email": email,
//         }
//     });
// }

export const getAllCredentials = async () => {
    const credentials = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/credentials`, { 
        method: "GET",
        credentials: 'include',
        headers: {
            "Access-Control-Request-Method": "GET",
            "Access-Control-Allow-Credentials": "true",
        }
    }).then((res) => res.json());
    return credentials;
}

export const addUser = async (username: string, displayName: string, email: string) => {
    await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/user/new`, {
        method: "POST",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
            "username": username,
            "display_name": displayName,
            "email": email,
            "Access-Control-Request-Method": "GET",
            "Access-Control-Allow-Credentials": "true",
        }
    });
}
