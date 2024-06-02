import { cookies } from "next/headers";


export const getStatus = async () => {


    return await fetch(`${process.env.NEXT_PUBLIC_HOST_URL!}/api/auth/status`).then((res) => 
        res.json())
        // .then((data) => {
        //   setUser(data);
        //   setLoading(false);
        // });
}
